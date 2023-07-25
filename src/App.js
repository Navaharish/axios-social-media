import { Route, Routes, useNavigate } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Nav from './components/Nav';
import HomePage from './components/HomePage';
import NewPost from './components/NewPost';
import About from './components/About';
import Footer from './components/Footer';
import Post from './components/Post';
import SearchBar from './components/SearchBar';
import { useState, useRef, useEffect } from 'react';
import { format } from 'date-fns';
import Missing from './components/Missing';
import api from './API/post'
import EditPost from './components/EditPost';

function App() {
  const Navigation = useNavigate();
  const inputRef = useRef();

  const [postHead, setPostHead] = useState('')
  const [postEvent, setPostEvent] = useState('')
  const [search, setSearch] = useState('')
  const [searchResult, setSearchResult] = useState('')
  const [items, setItems] = useState([])
  const [editHead, setEditHead] = useState('')
  const [editEvent, setEditEvent] = useState('')


  useEffect(() => {

    const fetchPost = async () => {
      try {
        const response = await api.get('/posts')
        setItems(response.data)
      }
      catch (err) {
        console.log(err.message);
      }
    }
    (async () => fetchPost())()
  }, [])

  const handleSubmitPost = async (e) => {
    e.preventDefault()
    const id = items.length ? items[items.length - 1].id + 1 : 1
    const date = format(new Date(), 'MMMM dd ,yyyy pp')
    const NewItem = { id, head: postHead, date, event: postEvent };
    const response = await api.post('/posts', NewItem)
    const listItems = [...items, response.data]
    setItems(listItems)
    setPostHead('')
    setPostEvent('')
    Navigation('/')
  }

  useEffect(() => {
    const filterItems = items.filter((item) => (item.head).toLowerCase().includes(search.toLowerCase()) ||
      (item.event).toLowerCase().includes(search.toLowerCase())
    )
    setSearchResult(filterItems.reverse())
  }, [items, search])

  const handleDelete = async (id) => {
    try {
      console.log(id);
      await api.delete(`/posts/${id}`)
      const DeletedItem = items.filter(item => item.id !== id)
      setItems(DeletedItem)
      Navigation('/')
    }
    catch (err) {
      console.log(err.message);
    }
  }

  const handleEditForm = async (id) => {

    try {

      const date = format(new Date(), 'MMMM dd ,yyyy pp')
      const NewItem = { id, head: editHead, date, event: editEvent };
      const response = await api.put(`/posts/${id}`, NewItem)
      setItems(items.map(item => item.id === id ? response.data : item))
      setEditHead('')
      setEditEvent('')
      Navigation('/')
    }
    catch (err) {
      console.log('submition Error:', err.message);
    }
  }
  return (
    <div className="App">
      <Header />
      <SearchBar setSearch={setSearch} search={search} />
      <Nav inputRef={inputRef} />
      <main>
        <Routes>
          <Route path='/'
            element={<HomePage
              items={searchResult} />}></Route>
          <Route path='/newpost'>
            <Route index element={<NewPost
              inputRef={inputRef}
              setHead={setPostHead}
              setEvent={setPostEvent}
              handleSubmitPost={handleSubmitPost} />} />

            <Route path=':id' element={<Post
              items={items}
              handleDelete={handleDelete}
              inputRef={inputRef}
            />} />

          </Route>

          <Route path='/edit/:id' element={
            <EditPost
              items={items}
              setHead={setPostHead}
              setEvent={setPostEvent}
              handleEditForm={handleEditForm}
              setEditHead={setEditHead}
              setEditEvent={setEditEvent}
              editHead={editHead}
              editEvent={editEvent}
            />} />
          <Route path='/about' element={<About />}></Route>
          <Route path='*' element={<Missing />}></Route>

        </Routes>
      </main>

      <Footer />

    </div >
  );
}

export default App;
