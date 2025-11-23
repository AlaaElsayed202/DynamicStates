import React from 'react'

export default function LastWay() {
 let counter = 10;
  const incrementCounter = () => {
    counter++;
    document.getElementById("counter-display").innerText = counter;
  }
    const descrementCounter = () => {
      if(counter > 0){

    
    counter--;
   document.getElementById("counter-display").innerText = counter;
      }

  
  }
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-800 to-pink-900 flex items-center justify-center flex-col gap-5">

             <h1 className="text-7xl " >Counter <span id="counter-display">10</span></h1>
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
