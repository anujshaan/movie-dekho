import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <div className='w-10/12 h-16 mx-auto flex justify-between items-center 
            bg-white rounded p-4 mt-2'>
            <Link to='/'>
                <h1 className='text-lg lg:text-4xl font-bold text-green-600'>
                    MovieDekho
                </h1>
            </Link>
            <ul className='lg:flex hidden'>
                <li>Home</li>
                <li>Movies</li>
                <li>TV Series</li>
                <li>New Arrival</li>
            </ul>
            <div className='w-3/5 md:w-2/5 rounded border-2'>
                <input
                    type="text"
                    placeholder='Search...'
                    className='w-full h-full outline-none border-0 p-2'
                />
            </div>
            <div className='font-bold text-green-500 cursor-pointer hidden md:block'>
                Login
            </div>
        </div>
    )
}

export default Header