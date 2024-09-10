"use client"
import React from 'react'
import { useContext } from 'react'
import { SidebarContext } from '../providers'
import Image from 'next/image'
import Delete from './Delete'


 

export default function WishesPage() {
  const {movieItem} = useContext(SidebarContext)
  
  return (
    <div>
      {movieItem.length == 0 ?
      (
        <h2>Add your movies to your list</h2>
      )
    :
    (
      <div>
        <table className='w-4/5 m-auto '>
          <thead>
            <tr>
              <th className='px-10'>image</th>
              <th className='p-10'>title</th>
              <th className='p-10'>epilogue</th>
              <th className='p-10'>actors</th>
            </tr>
          </thead>

          <tbody>
      {movieItem.map((movie, index) =>(
        <tr key={index}>

          <td><Image src={`/bp/${movie.title.toLowerCase().split(' ').join('-')}.jpg`} alt={movie.title} title={movie.cat} width={'150'} height={'200'}/></td>

          <td className='py-3 px-3'>{movie.title}</td>
          <td className='py-4 px-4'>{movie.epi}</td>
          <td className='py-5 px-5'>{movie.actors}</td>

          <td className='py-6 px-6'>
            <Delete index={index} title={movie.title}/>
          </td>

        </tr>

      ))
      
      }
          </tbody>


        </table>
      </div>

    )
      }
    </div>

  );
}

