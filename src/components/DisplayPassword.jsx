import React, { useState } from 'react'

import { IconButton } from "@material-tailwind/react";
 
import { Tooltip} from "@material-tailwind/react";
 


 



const DisplayPassword = ({isCopied,setCopied ,Password, result }) => {
  
  
  

  function copyPassword(e) {
   
    var copyText = e.target.closest('.pass-container').firstElementChild;
    setCopied(true)
    copyText.select
    navigator.clipboard.writeText(copyText.value);
  }

  return (
      <div className='pass-container text-sm flex flex-col gap-4 justify-center sm:text-2xl sm:flex sm:flex-row  font-semibold  sm:justify-between items-center px-10 bg-white w-2/3 h-1/6 rounded shadow-lg'>
      <input type='text'  value={ result} className='text-center sm:text-left bg-transparent w-full sm:w-1/2'  disabled/>
      <div className='flex gap-5 '>
        
        

      <Tooltip content={isCopied? 'Password Copied':'Copy Password'}>
      
      <IconButton  size='sm' className='sm:text-xl sm:w-48 sm:p-6  ' variant='outlined' onClick={(e) => { copyPassword(e) }}>
      <i className="fa-regular fa-copy fa-xl" />
    </IconButton>

    </Tooltip>

    <Tooltip content='Regenerate Password'>
        <IconButton size='sm'  className='sm:text-xl sm:w-48 sm:p-6' variant='outlined' onClick={Password}>
      <i className="fas fa-rotate-right fa-xl" />
          </IconButton>
          
          </Tooltip>
          
      </div>
      
   
    </div>
  )
}

export default DisplayPassword