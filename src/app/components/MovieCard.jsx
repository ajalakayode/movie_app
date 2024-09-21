import Image from 'next/image'
import { Rating } from '@mui/material'
//  import React from 'react'
 
 export default function MovieCard({title, type, rating, epilogue, date_released, category, actor, keywords, kind, runtime}) {
   return (
     <div className='flex flex-col items-center'>
        <Image src={`/bp/${title.toLowerCase().split(' ').join('-')}.jpg`} alt={title} width={'300'} height={'500'} className='rounded-md'/>
        <p>
        <Rating name="half-rating-read" defaultValue={2.5} precision={0.5} max={7} readOnly />
        </p>
        <h1>{title}</h1>
        <p>{keywords}</p>
        <p>{date_released}</p>
        <p>{actor}</p>
        <p>{kind}</p>
        <p className="text-blue-700 mt-2">
          {parseInt(runtime / 60)} hr{parseInt(runtime / 60) > 1 ? 's ' : ' '}
          {runtime % 60} min
          </p>
        
     </div>
   )
 }