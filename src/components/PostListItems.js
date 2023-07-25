import React from 'react'
import { Link } from 'react-router-dom';

const PostListItems = ({ item }) => {
    const { head, date, event } = item;
    const shortEvent = event.length >= 35 ? event.slice(0, 35) + "..." : event;
    return (
        <article>
            <Link to={`/newpost/${item.id}`} className='enterPost-link'>
                <h3>{head}</h3>
                <h4>{date}</h4>
                <p>{shortEvent}</p>
            </Link>



        </article >
    )
}

export default PostListItems
