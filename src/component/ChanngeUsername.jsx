import React, { useState } from 'react'

export default function ChanngeUsername() {
    const [userName ,  setUserName] = useState('Ali');
 
      
    const ChangName = () => {
        let newName = prompt("Please Enter your New Name");
        setUserName(newName)
    }
  return (
   <div className="h-screen bg-blue-950  p-10 flex flex-row justify-center items-center ">
    <div className='flex gap-8'>
     <h1 className='text-6xl text-amber-50  '>userName is : <span className='text-orange-700'>{userName}</span></h1>
       <button className=' bg-blue-500 text-white font-bold py-2 px-8 rounded mt-2
         hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-200 transition-all cursor-pointer'  onClick={ChangName} > Change Your Name </button>
     
    </div>

   </div>
  )
}
