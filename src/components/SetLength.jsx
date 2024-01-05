import React from 'react'
import { useState} from 'react'

const GeneratePassword = ({length,setLength}) => {

  


  return (
      <div className=' mx-14 flex flex-col gap-4 w-1/2' >
          <h1>Password Length</h1>
          <div className='flex gap-2'>
              <input type="text" value={length} className='ring ring-opacity-5 ring-black  text-center inline-block w-16 h-12 p-4' disabled/>
        <input className=" w-1/2" type='range' value={length} min='0' max='20'  onChange={(e) => { setLength(Number(e.target.value)) }} />
          </div>
    </div>
  )
}

export default GeneratePassword