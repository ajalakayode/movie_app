"use client"
import { movies } from "@/app/data"
import { Satisfy } from "next/font/google";
import Link from "next/link";
import MovieCard from "@/app/components/MovieCard";
import {SidebarContext} from "@/app/providers";
import {useContext} from "react";



const sat = Satisfy({ subsets: ["latin"] , weight: ['400']});

export default function MovieDetails({params}) {
  const {setVal, movieItem, setMovieItem} = useContext(SidebarContext)
  const details = movies.find(movie => movie.title.split(' ').join('-') == params.slug)


  function handleMovieAdd(){
    setVal(prev => prev + 1)
    setMovieItem ([...movieItem, {title:details.title,epi:details.epilogue, cat:details.category,actors:details.actors}] )
  }

  const relatedMovies = movies.filter((card => card.type == details.type && details.title !== card.title))

  const relatedCard = relatedMovies.map((card,index) =>
    <Link href={`/movies/${card.title.split(' ').join('-')}`} title={card.title} className='cursor-pointer' key={index}>
    <MovieCard title={card.title} kind={card.kind} category={card.category} type={card.type} date_released={card.date_released} rating ={card.rating}/>
    </Link>
  )

  return (

    <div className="px-16">
      <h1 className={`${sat.className} text-2xl`} style={{paddingBlock: '20px', backgroundColor: 'blue'}}> {details.title}</h1>
      <p>{details.epilogue}</p>

      <button 
      onClick={handleMovieAdd} className= "bg-slate-800 text-slate-100 p-3 rounded-md">add movie</button>

      <div>
        <h2 className="text-4xl font-bold">related movies</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

          {relatedCard}
        </div>
      </div>
    </div>
 
    
  )
}


























// import { movies } from "@/app/data"

// export default function MovieDetails({params}) {
//     const details = movies.find(movie => movie.title.split(' ').join('-') == params.slug)
//   return (
//     <div>
//         <h1>{details.title}</h1>
//         <p>{details.epilogue}</p>

//     </div>
//   )
// }
