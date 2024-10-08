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
    <MovieCard title={card.title} kind={card.kind} category={card.category} type={card.type} runtime={card.runtime} date_released={card.date_released} rating ={card.rating}/>
    </Link>
  )

  return (

    <div className="px-16 py-3 font-serif">
      <h1 className={`${sat.className} text-2xl`} style={{paddingBlock: '20px', backgroundColor: 'yellow'}}> {details.title}</h1> <br />

      <div className="bg-blue-600 py-3 px-4 font-serif">
      <p>{details.epilogue} </p> <br />
      <p >{details.keywords}</p> <br />
      <p>{details.category}</p> <br />
      <p >{details.kind}</p> <br />
      <p >{details.date_released}</p> <br />
      </div> <br />

      <button 
      onClick={handleMovieAdd} className= "bg-green-500 text-slate-100 p-3 rounded-full p3-4 px-3 pt-3 pb-3 font-serif" >Add Movie</button> <br /> <br /> <br />

      <div>
        <h2 className="pt-3 pb-3 text-2xl text-black-100 bg-blue-600 font-serif">Related Movies</h2>
        {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-4"> */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 px-16 py-7" >

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
