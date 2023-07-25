import { Link, useParams } from 'react-router-dom'

const Post = ({ items, handleDelete }) => {
    const { id } = useParams()
    const getItem = items.find(item => (item.id).toString() === id)
    return (

        <>
            {getItem ?
                <main className='fullpost'>
                    <h3 className='fullpost-head'>{getItem.head}</h3>
                    <p className='fullpost-event'>{getItem.event}</p>
                    <div >
                        <Link to={`/edit/${getItem.id}`}>
                            <button className='edit-btn' >Edit Post</button>
                        </Link>
                        <button className='del-btn' onClick={() => handleDelete(getItem.id)}>Delete Post</button>
                    </div>


                </main >
                : <h2>Post is not found</h2>}
        </>

    )

}

export default Post
