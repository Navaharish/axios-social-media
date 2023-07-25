import React from 'react'
import { Link } from 'react-router-dom'

const Nav = ({ inputRef }) => {
    return (
        <ul className='nav'>
            <Link to="/" className='nav-link'>
                <li className='nav-item'>
                    Home
                </li>
            </Link>
            <Link to='/newpost' className='nav-link' onClick={() => inputRef.current && inputRef.current.focus()}>
                <li className='nav-item'>
                    NewPost
                </li>
            </Link>
            <Link to="/about" className='nav-link'>
                <li className='nav-item'>
                    about
                </li>
            </Link>

        </ul >
    )
}

export default Nav
