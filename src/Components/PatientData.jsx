import React from 'react'

const PatientData = () => {
  return (
    <div>
        <div className="w-full h-[280px] p-1">
            <div className="w-full h-1/6  flex items-center pl-2 ">
                <h1 className='font-bold text-xl'>Name:</h1>
                <h1 className='font-bold text-xl p-2'>Mohammed Nihal v.k</h1>
            </div>
            
            <div className="w-full h-5/6 bg-gray-100">
            <div className="w-full h-10  mt-1">
                <div className="w-full h-10  mt-1 flex text-sm text-gray-500 items-center  ">
                    <h1 className='ml-2'>Age:</h1>
                    <h1>Age</h1>
                </div>
                </div>
                <div className="w-full h-10  mt-1 flex text-sm text-gray-500 items-center  ">
                    <h1 className='ml-2'>Blood group:</h1>
                    <h1>A+ve</h1>
                </div>
                <div className="w-full h-10  mt-1">
                <div className="w-full h-10  mt-1 flex text-sm text-gray-500 items-center  ">
                    <h1 className='ml-2'>Privious history:</h1>
                    <h1>Yes</h1>
                </div>
                </div>
                <div className="w-full h-10  mt-1">
                <div className="w-full h-10  mt-1 flex text-sm text-gray-500 items-center  ">
                    <h1 className='ml-2'>Place:</h1>
                    <h1>Kadampuzha</h1>
                </div>
                </div>
                <div className="w-full h-10  mt-1">
                <div className="w-full h-10  mt-1 flex text-sm text-gray-500 items-center  ">
                    <h1 className='ml-2'>Phone no:</h1>
                    <h1>7025488181</h1>
                </div>
                </div>
                
            </div>
        </div>
    </div>
  )
}

export default PatientData