import React, { useState } from 'react'


export default function App() {
  
  const [Counter , setCounter]  = useState(10);

  const incrementCounter = ()=> setCounter(Counter + 1);

  const  descrementCounter = () => {
    if (Counter > 0) {
      setCounter(Counter - 1)
    }
  }

  return (
     <div className="min-h-screen bg-gradient-to-r from-blue-800 to-pink-900 flex items-center justify-center flex-col gap-5">

             <h1 className="text-7xl " >Counter <span id="counter-display">{Counter}</span></h1>
             <div className="flex gap-5">
           <button className="bg-blue-600 text-white font-bold py-2 px-6 rounded 
         hover:from-blue-700 
         focus:outline-none focus:ring-4 focus:ring-blue-400 focus:ring-opacity-50 
         transition-all" onClick={()=>{incrementCounter()}}>+</button>
         <button className="bg-blue-600 text-white font-bold py-2 px-6 rounded 
         hover:from-blue-700 
         focus:outline-none focus:ring-4 focus:ring-blue-400 focus:ring-opacity-50 
         transition-all" onClick={()=>{descrementCounter()}}>-</button>
             </div>
      
    </div>
  )
}
