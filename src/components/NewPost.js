
const NewPost = ({ setHead, setEvent, handleSubmitPost, inputRef }) => {
    return (
        <form className='new-post' onSubmit={handleSubmitPost}>
            <label htmlFor='heading' >Heading:</label>
            <input ref={inputRef} className="new-post-head" type='text' required onChange={(e) => setHead(e.target.value)} />

            <label htmlFor='event'>Event:</label>
            <textarea className='text-area' required onChange={(e) => setEvent(e.target.value)} />

            <button type='submit' className='new-post-btn'>Upload Post</button>
        </form>
    )
}

export default NewPost
