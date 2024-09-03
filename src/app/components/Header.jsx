import React from 'react'

export default function Header() {
  return (
    <div className='grid md:grid-cols-6 md:grid-rows-[300px_300px_300px] grid-cols-1 grid-rows-[200px_200px_200px]' >
    <div className='bg-[url(/dp1.png)] md:col-span-4 md:row-span-3 bg-cover' ></div>
    <div className='bg-[url(/dp2.png)]  bg-cover md:row-span-2 md:col-span-2' ></div>
    <div className='bg-[url(/dp3.png)]' ></div>
    <div className='bg-[url(/dp4.png)]' ></div>

</div>
  )
}