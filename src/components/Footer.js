import React from 'react'

const Footer = () => {
    const year = (new Date().getFullYear())
    return (
        <div className='footer'>
            <h3 >
                Copy rights &copy;  reserved on {year}
            </h3>
        </div>

    )
}

export default Footer
