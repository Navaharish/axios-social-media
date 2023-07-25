import React from 'react'
import PostList from './PostList'

const HomePage = ({ items }) => {
    return (
        <ul className='post'>
            {items.length > 0 ?
                items.map(item => (
                    <PostList item={item} key={item.id} />
                )) : "No post is Found"
            }
        </ul>
    )
}

export default HomePage
