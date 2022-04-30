import React, { useState, useRef } from 'react'
import Thumbnail from './Thumbnail'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/outline'
import { IMovie } from '../utility/typescript'

interface Props {
    movies: IMovie[]
}

const Row = ({ movies }: Props) => {
    console.log(movies)
    const rowRef = useRef<HTMLDivElement>(null);
    const [isMoved, setIsMoved] = useState(false);

    const handleClick = (direction: string) => {
        setIsMoved(true)
        if (rowRef.current) {
            const { scrollLeft, clientWidth } = rowRef.current;

            const scrollTo = direction === "left"
                ? scrollLeft - 270
                : scrollLeft + clientWidth

            rowRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' })
        }

    }

    return (
        <div className=' group relative md:ml-2'>
            <ChevronLeftIcon className={`row-navigation left-2 ${!isMoved && "hidden"}`}
                onClick={() => handleClick('left')} />
            <div ref={rowRef} className='lg:file:max-w-10/12 flex items-center space-x-2 
                overflow-x-scroll md:space-x-2.5 md:p-2 scrollbar-hide'>
                {movies.map((movie) => (
                    <Thumbnail key={movie.id} movie={movie} />
                ))}
            </div>
            <ChevronRightIcon className='row-navigation right-2'
                onClick={() => handleClick('right')} />
        </div>
    )
}

export default Row