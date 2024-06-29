"use client"
import React from 'react'
import { Typewriter } from 'react-simple-typewriter'

const Writer = () => {
  return (
    
    <div className='App'>
      <h1 
      className='p-1
   bg-gradient-to-r from-yellow-500 via-purple-400 to-red-500 font-extrabold text-white
      
      '
      >
        {' '}
        <span >
          {/* Style will be inherited from the parent element */}
          <Typewriter
            words={['Content Writer','Social Media Specialist']}
            loop={3}
            cursor
            cursorStyle='_'
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
            onLoopDone={''}
            onType={''}
          />
        </span>
      </h1>
    </div>
  )
}
  


export default Writer