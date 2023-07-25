import React from 'react'
import PostListItems from './PostListItems'

const PostList = ({ item }) => {
    return (
        <li className='post-item'>

            <PostListItems item={item} />
        </li>
    )
}

export default PostList
