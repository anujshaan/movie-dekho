import React from 'react'
import { IMovie } from '../utility/typescript';
import { useLocation } from 'react-router-dom';

const watch = () => {
    const location = useLocation();
    console.log(useLocation())
    const url: any = location.state;

    return (
        <div className='w-full h-screen flex justify-center mt-2 '>
            <iframe width="1080" height="620" src={`https://short.ink/${url.token}`}
                frameBorder="0" scrolling='0' title="Iron man" allowFullScreen>
            </iframe>
        </div>
    )
}

export default watch