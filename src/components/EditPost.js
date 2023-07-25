import { useEffect } from "react";
import { useParams } from "react-router-dom"

const EditPost = ({ handleEditForm, inputRef, items, editEvent, editHead, setEditEvent, setEditHead }) => {

    const { id } = useParams();
    const getEditItem = items.find(item => (item.id).toString() === id)
    useEffect(() => {

        if (getEditItem) {
            setEditHead(getEditItem.head);
            setEditEvent(getEditItem.event);
        }
    }, [items, id, getEditItem, setEditEvent, setEditHead]);

    return (
        <main>
            {getEditItem &&
                <form className='new-post' onSubmit={(e) => e.preventDefault()}>
                    <label htmlFor='heading' >Heading:</label>
                    <input
                        ref={inputRef}
                        className="new-post-head"
                        type='text'
                        value={editHead}
                        required
                        onChange={(e) => setEditHead(e.target.value)} />

                    <label htmlFor='event'>Event:</label>
                    <textarea
                        className='text-area'
                        required
                        onChange={(e) => setEditEvent(e.target.value)}
                        value={editEvent} />

                    <button type='submit' className='new-post-btn' onClick={() => handleEditForm(getEditItem.id)}>Upload Edit</button>
                </form>
            }
            {
                !getEditItem && <h2>No post is Found to edit !</h2>
            }

        </main>

    )
}

export default EditPost
