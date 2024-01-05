import React, { useState } from 'react'
import { Checkbox } from "@material-tailwind/react";
 



const IncludeCheck = ({symbol,setSymbol,lowerCase,setLowerCase,upperCase,setUppercase,number,setNumber}) => {

 


  return (
      <div className='flex w-[50%] flex-col'> 
          <div className='flex'>
          <Checkbox color={ 'red'} label="UpperCase" onChange={(e) => {
                  setUppercase(e.target.checked)
              }}/>
          </div>
          <div className='flex gap-2'>
              
              <Checkbox color={ 'red'} label="LowerCase" onChange={(e) => {
                  setLowerCase(e.target.checked)
              }} />
              
          </div>
          <div className='flex gap-2'>
              
              <Checkbox color={ 'red'} label="Number" onChange={(e) => {
                  setNumber(e.target.checked)
              }}/>
              
          </div>
          <div className='flex gap-2'>
              
              <Checkbox color={ 'red'} label="Symbol" onChange={(e) => {
                  setSymbol(e.target.checked)
              }} />
              
          </div>
    </div>
  )
}

export default IncludeCheck