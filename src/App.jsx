
import React, { useEffect } from 'react';
import DisplayPassword from './components/DisplayPassword';
import GeneratePassword from './components/SetLength';

import IncludeCheck from './components/IncludeCheck';
import { useState } from 'react';
import './index.css'

const App = () => {
  const [isCopied, setCopied] = useState(false)
  const [length,setLength] = useState(0)
   const [upperCase, setUppercase] = useState(false);
    const [lowerCase, setLowerCase] = useState(false);
    const [number, setNumber] = useState(false);
  const [symbol, setSymbol] = useState(false);
  let [result , setResult] = useState('')
    let yourPasswordIsHere = ''

  function Password() {
    setCopied(false)
    let includeupperCase = 'ABCDEFGHIJKLMNOPQURSTUVWXYZ'
    let includelowerCase = 'abcdefcghijklmnopqurstuvqxyz'
    let includesymbol = '!@#$%^&*()'
    let includenumber = '1234567890'
    
for (let i = 0; i < length; i++) {
  
 let j = Math.floor(Math.random() * length);
  
 if (number) yourPasswordIsHere += String(includenumber.charAt(j))
 if(symbol) yourPasswordIsHere += includesymbol.charAt(j)
  if (lowerCase) yourPasswordIsHere += includelowerCase.charAt(j)
  if (upperCase) yourPasswordIsHere += includeupperCase.charAt(j)
console.log(j)
  
  
  
}
    let fixedLengthPass = yourPasswordIsHere.slice(0,length)
    
setResult(fixedLengthPass)

}
  
  useEffect(function () {

  Password()
  
},[length,upperCase,lowerCase,symbol,number])
  

  return <div className='bg-[#CAEDF7] w-full h-[100vh] flex flex-col gap-10 justify-center items-center'>
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

  </div>
}

export default App