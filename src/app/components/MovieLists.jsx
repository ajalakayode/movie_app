import React from 'react'
import MovieCard from './MovieCard'
import { movies } from '../data'
import Link from 'next/link'

export default function MovieLists() {
  
    const cards = movies.map((card, index) => (
        <section key={index}>
          <Link href={`/movies/${card.title.split(' ').join('-')}`} title={card.title} className='cursor-pointer'>
          <MovieCard title={card.title} type={card.type} runtime={card.runtime} rating ={card.rating} actor={card.actors} />
          </Link>
        </section>
    ))
// .slice(0,17)
    

  return (
    <>
    <div className='grid grid-cols-3 gap-4 px-16 py-32 capitalize'>
    {cards}
 
    </div>
    <Link href={'/movies'} className= 'flex items-center justify-center my-5' >
    <span className='bg-blue-700 text-white rounded-md p-7' >See More</span>
    </Link>
    </>
  )
}
