import React from 'react'

const SearchBar = ({ setSearch, search }) => {
    return (
        <form>
            <label htmlFor='search post' />
            <input type='search'
                value={search}
                placeholder='Search Post'
                id='search post' className='search-bar'
                onChange={e => setSearch(e.target.value)}
            />
        </form>
    )
}

export default SearchBar
