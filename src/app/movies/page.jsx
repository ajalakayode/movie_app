"use client"
import {movies} from "../data"
import Link from "next/link"
import MovieCard from "../components/MovieCard"
import { IoMdSearch } from "react-icons/io"
import { useState } from "react"


export default function MoviePage() {
  const [searchMovie, setSearchMovie] = useState('')

  function filterSearch(e){
    setSearchMovie(e.target.value)
  }

  const filterLists = movies.filter(movie => String(movie.title).toLowerCase().includes(searchMovie.toLowerCase()) || String(movie.category).toLowerCase().includes(searchMovie.toLowerCase()) )
  const cards = filterLists.length == 0 ?(<hi>Sorry, search item does not exist </hi>) : filterLists.map((card,index) => (
    <section key={index}>
      <Link href={`/movies/${card.title.split(' ').join('-')}`} title={card.title} className='cursor-pointer'>
      <MovieCard title={card.title} type={card.type} runtime={card.runtime} img={card.image}/>
      </Link>

    </section>
  ))
    return (
      <>
      <div className="flex items-center justify-between p-3 border-4 rounded-full mt-4 border-slate-800 w-3/5 m-auto">
      <input type="text" name="search" id="search" className="outline-none block mt-4 w-4/5 text-2xl" placeholder="Search for movie or category or actor" defaultValue={searchMovie} onChange={(e)=>filterSearch(e)} />
      <IoMdSearch className="text-2xl text-red-600"/>
      </div>
      <div className="grid grid-cols-3 gap-4 px-16 py-32 capitalize"></div>
      {cards}
      </>
    )
}
