import React, { useState } from 'react'
import { Checkbox } from "@material-tailwind/react";
 



const IncludeCheck = ({symbol,setSymbol,lowerCase,setLowerCase,upperCase,setUppercase,number,setNumber}) => {

 


  return (
      <div className='flex w-full sm:w-1/2 flex-col'> 
          <div>
          <Checkbox  color={ 'black'} label="UpperCase" onChange={(e) => {
                  setUppercase(e.target.checked)
              }}/>
          </div>
          <div>
              
              <Checkbox color={ 'black'} label="LowerCase" onChange={(e) => {
                  setLowerCase(e.target.checked)
              }} />
              
          </div>
          <div>
              
              <Checkbox  color={ 'black'} label="Number" onChange={(e) => {
                  setNumber(e.target.checked)
              }}/>
              
          </div>
          <div>
              
              <Checkbox color={ 'black'} label="Symbol" onChange={(e) => {
                  setSymbol(e.target.checked)
              }} />
              
          </div>
    </div>
  )
}

export default IncludeCheck