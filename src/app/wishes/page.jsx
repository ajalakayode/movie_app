"use client"
import React from 'react'
import { useContext } from 'react'
import { SidebarContext } from '../providers'
import Image from 'next/image'

 

export default function WishesPage() {
  const {movieItem} = useContext(SidebarContext)
  
  return (
    <div>
      {movieItem.length == 0 ?
      (
        <h2>add your movies to your list</h2>
      )
    :
    (
      <div>
        <table className='w-4/5 m-auto'>
          <thead>
            <tr>
              <th>image</th>
              <th>title</th>
              <th>epilogue</th>
              <th>actors</th>
            </tr>
          </thead>

          <tbody>
      {movieItem.map((movie, index) =>(
        <tr key={index}>

          <td><Image src={`/bp/${movie.title.toLowerCase().split(' ').join('-')}.jpg`} alt={movie.title} title={movie.cat} width={'150'} height={'200'}/></td>

          <td>{movie.title}</td>
          <td>{movie.epi}</td>
          <td>{movie.actors}</td>

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

