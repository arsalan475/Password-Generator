import React from 'react'
import { useState} from 'react'

const GeneratePassword = ({length,setLength}) => {

  


  return (
      <div className=' mx-14 flex flex-col gap-4 w-[25%]' >
          <h1 className=' text-sm sm:text-lg'>Password Length</h1>
          <div className=' flex flex-col gap-4 sm:flex sm:gap-2'>
              <input type="text" value={length} className='ring ring-opacity-5 ring-black  text-center inline-block w-9 h-6 p-2 sm:w-16 sm:h-12 sm:p-4' disabled/>
        <input className=" w-full" type='range' value={length} min='0' max='20'  onChange={(e) => { setLength(Number(e.target.value)) }} />
          </div>
    </div>
  )
}

export default GeneratePassword