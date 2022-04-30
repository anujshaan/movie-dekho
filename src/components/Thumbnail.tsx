import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { IMovie } from '../utility/typescript'

interface Props {
    movie: IMovie
}

const Thumbnail = ({ movie }: Props) => {
    const { token } = movie;
    return (
        <div className='relative min-w-[180px] h-28 rounded-lg cursor-pointer
            transition duration-200 ease-out md:h-36 md:min-w-[260px] md:hover:scale-105'>

            <Link to='/watch' state={{ token }}>
                <img src={movie.img} alt=""
                    className='w-full h-full object-cover rounded-lg'
                />
            </Link>

        </div>
    )
}

export default Thumbnail