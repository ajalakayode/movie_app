"use client"
import React from 'react'
import { useContext } from 'react'
import { SidebarContext } from '../providers'

export default function Delete({title}) {
    const {movieItem, setMovieItem, setVal} = useContext(SidebarContext)

    const handleDelete = () => {
        setVal(prev => prev - 1)
        setMovieItem(movieItem.filter(movie => movie.title !== title))
    }
  return (
    <button className='bg-red-600 hover:bg-red-700 text-white font-bold font-sans py-3 px-6 rounded-full' onClick={() => handleDelete()}>

      Delete!!!
    </button>
  )
}
