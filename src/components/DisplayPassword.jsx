import React, { useState } from 'react'

import { IconButton } from "@material-tailwind/react";
 
import { Tooltip} from "@material-tailwind/react";
 


 



const DisplayPassword = ({isCopied,setCopied ,Password, result }) => {
  
  
  

  function copyPassword(e) {
    // Get the text field
    var copyText = e.target.closest('.pass-container').firstElementChild;
  
    setCopied(true)
    
    // Select the text field
    copyText.select
     copyText.setSelectionRange(0, 99999); // For mobile devices
  
     // Copy the text inside the text field
    navigator.clipboard.writeText(copyText.value);
  
    // Alert the copied text
    // alert("Copied the text: " + copyText.value);
  }

  return (
      <div className='pass-container flex font-semibold  justify-between items-center px-10 bg-white w-2/3 h-1/6 rounded shadow-lg'>
      <input type='text'  value={ result} className='text-xl bg-transparent w-1/2'  disabled/>
      <div className='flex gap-5'>
        
        

      <Tooltip content={isCopied? 'Copied':'Copy Text'}>
      
      <IconButton size='lg' variant='outlined' onClick={(e) => { copyPassword(e) }}>
      <i className="fa-regular fa-copy fa-xl" />
    </IconButton>

    </Tooltip>

        <IconButton size='lg' variant='outlined' onClick={Password}>
      <i className="fas fa-rotate-right fa-xl" />
    </IconButton>
      </div>
      
   
    </div>
  )
}

export default DisplayPassword