import React from 'react'
import './Spinner.css';
const Spinner = () => {
  return (
    <div className="flex flex-col items-center mt-[170px] space-y-2 h-screen">
        <div className='spinner'></div>
        <p className="text-bgDark text-lg font-semibold">Loading...</p>
    </div>
  )
}

export default Spinner
