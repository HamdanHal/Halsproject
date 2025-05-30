import { Button } from '@mui/material'
import React from 'react'

function Todoapp() {
  return (
    <>
    <div className='bg-amber-950'>
  <header className="flex flex-wrap sm:justify-start sm:flex-nowrap w-full bg-white text-sm py-3">
  <nav className="max-w-[85rem] w-full mx-auto px-4 sm:flex sm:items-center sm:justify-between">
    <a className="flex-none font-bold text-5xl text-black focus:outline-hidden focus:opacity-80" href="#" aria-label="Brand">To-Do</a>
    <div className="flex flex-row items-center gap-5 mt-5 sm:justify-end sm:mt-0 sm:ps-5">
      <a className="font-medium text-2xl text-blue-500 focus:outline-hidden" href="https://www.youtube.com/" aria-current="page">Youtube</a>
      <a className="font-medium text-2xl text-blue-500 hover:text-gray-400 focus:outline-hidden focus:text-gray-400" href="#">Home</a>
      <a className="font-medium text-2xl text-blue-500 hover:text-gray-400 focus:outline-hidden focus:text-gray-400" href="#">Option</a>
      <a className="font-medium text-2xl text-blue-500 hover:text-gray-400 focus:outline-hidden focus:text-gray-400" href="#">About</a>
    </div>
  </nav>
</header>
 </div>
  </>

  
)
}

export default Todoapp
