import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Row from '../components/Row'
import axios from 'axios'
import { IMovie } from '../utility/typescript'

interface Props {
    marvelMovies: IMovie[]
}

const Home = () => {
    const [marvelMovies, setMarvelMovies] = useState<IMovie[]>([])
    useEffect(() => {
        const fetchData = async () => {
            const res = await axios.get('https://my-moviedb-api.herokuapp.com/marvelMovies')
            setMarvelMovies(res.data)
        }
        fetchData()
    }, [])
    return (
        <div className=' h-screen'>
            {/* <Link to='/watch'>
                <div className='h-24 w-48 bg-gray-100 rounded cursor-pointer'>

                </div>
            </Link> */}
            <section className='w-full mx-auto mt-10 md:space-y-24'>
                <Row movies={marvelMovies} />
            </section>
        </div>
    )
}

export default Home