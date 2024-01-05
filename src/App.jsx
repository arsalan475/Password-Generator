
import React, { useEffect } from 'react';
import DisplayPassword from './components/DisplayPassword';
import GeneratePassword from './components/SetLength';

import IncludeCheck from './components/IncludeCheck';
import { useState } from 'react';
import './index.css'

import { IconButton } from "@material-tailwind/react";
import { Button } from "@material-tailwind/react";
 
import { Tooltip} from "@material-tailwind/react";


const App = () => {
  const [isCopied, setCopied] = useState(false)
  const [length,setLength] = useState(0)
   const [upperCase, setUppercase] = useState(false);
    const [lowerCase, setLowerCase] = useState(false);
    const [number, setNumber] = useState(false);
  const [symbol, setSymbol] = useState(false);
  let [result , setResult] = useState('')
    let yourPasswordIsHere = ''

  
  
    function copyPassword(e) {
   
      var copyText = e.target.closest('.container').firstElementChild.firstElementChild;
      console.log(copyText)
      setCopied(true)
      copyText.select
      navigator.clipboard.writeText(copyText.value);
    }
  
  
  
  function Password() {
    setCopied(false)
    let includeupperCase = 'ABCDEFGHIJKLMNOPQURSTUVWXYZ'
    let includelowerCase = 'abcdefcghijklmnopqurstuvqxyz'
    let includesymbol = '!@#$%^&*()'
    let includenumber = '1234567890'
    
for (let i = 0; i < length; i++) {
  
 
  
 if (number) yourPasswordIsHere += includenumber.charAt(Math.floor(Math.random() * includenumber.length))
 if(symbol) yourPasswordIsHere += includesymbol.charAt(Math.floor(Math.random() * includesymbol.length))
  if (lowerCase) yourPasswordIsHere += includelowerCase.charAt(Math.floor(Math.random() * includelowerCase.length))
  if (upperCase) yourPasswordIsHere += includeupperCase.charAt(Math.floor(Math.random() * includeupperCase.length))

  
  
  
}
    let fixedLengthPass = yourPasswordIsHere.slice(0,length)
    
setResult(fixedLengthPass)

}
  
  useEffect(function () {

  Password()
  
},[length,upperCase,lowerCase,symbol,number])
  

  return <div className='container bg-[#CAEDF7] w-full h-[100vh] flex flex-col gap-10 justify-center items-center'>
    <DisplayPassword isCopied={isCopied} setCopied={setCopied} Password={Password} result={result} />
  
    <div className='shadow-lg w-2/3 h-[20rem] rounded  bg-white'> 
      <h1 className=' my-6 mx-14 py-2 rounded  border-0 border-b-2 font-extrabold text-3xl font-sans'>Costomize your Password</h1>
  <div className='flex'>
      <GeneratePassword setLength={setLength} length={length}/>
      
        <IncludeCheck setUppercase={setUppercase} upperCase={upperCase}
          setLowerCase={setLowerCase} lowerCase={lowerCase}
          setNumber={setNumber} number={number}
          setSymbol={setSymbol} symbol={symbol} />
      </div>

    
    </div>
    <Tooltip content={isCopied? 'Copied':'Copy Text'}>
      
      <Button size='lg'  onClick={(e) => { copyPassword(e) }}>
      <span>Copy Password</span>
    </Button>

    </Tooltip>
  </div>
}

export default App