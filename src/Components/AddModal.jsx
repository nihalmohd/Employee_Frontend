import React from 'react'
import Nav from './Nav'
import { useNavigate } from 'react-router-dom'

const AddModal = () => {
    const Navigate = useNavigate()
  return (
    <div>
    <Nav/>
    <div
        className="fixed top-0 left-0 right-0 z-50 bg-opacity-50 flex items-center justify-center h-screen"
    >
        <div className="absolute top-0 left-0 right-0 z-10 flex items-center justify-center h-screen">
            <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                <button
                    onClick={()=>{Navigate(-1)}}
                    type="button"
                    className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                >
                    <svg
                        className="w-3 h-3"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 14 14"
                    >
                        <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                        />
                    </svg>
                    <span className="sr-only">Close modal</span>
                </button>
                {/* Modal content */}
                <div className=" w-[400px] py-6 lg:px-10 ">
                    <form className=""
                    //  onSubmit={handleMail}
                    >
                    <div className="w-full h-8 mt-2 font-semibold pl-2 text-white">
                        <h1>Enter your Name <span className='text-xl  text-red-700 '>*</span></h1>
                    </div>
                    <div className="w-full h-12 p-1 ">
                        <input type="text" className='w-full h-10 border-2 p-2 border-black rounded-md' placeholder='Enter Name' />
                    </div>                    <div className="w-full h-8 mt-2 font-semibold pl-2 text-white">
                        <h1>Enter your Age <span className='text-xl  text-red-700 '>*</span></h1>
                    </div>
                    <div className="w-full h-12 p-1 ">
                        <input type="text" className='w-full h-10 border-2 p-2 border-black rounded-md' placeholder='Enter Age' />
                    </div>                    <div className="w-full h-8 mt-2 font-semibold pl-2 text-white">
                        <h1>Enter your Blood group <span className='text-xl  text-red-700 '>*</span></h1>
                    </div>
                    <div className="w-full h-12 p-1 ">
                        <input type="text" className='w-full h-10 border-2 p-2 border-black rounded-md' placeholder='Enter blood group' />
                    </div>                    <div className="w-full h-8 mt-2 font-semibold pl-2 text-white">
                        <h1>Enter your Place  <span className='text-xl  text-red-700 '>*</span></h1>
                    </div>
                    <div className="w-full h-12 p-1 ">
                        <input type="text" className='w-full h-10 border-2 p-2 border-black rounded-md' placeholder='Enter Place' />
                    </div>                    <div className="w-full h-8 mt-2 font-semibold pl-2 text-white">
                        <h1>Enter your Phone No <span className='text-xl  text-red-700 '>*</span></h1>
                    </div>
                    <div className="w-full h-12 p-1 ">
                        <input type="text" className='w-full h-10 border-2 p-2 border-black rounded-md' placeholder='Enter phone Number' />
                    </div>
                       <div className="w-full h-12 flex justify-center items-center">
                        <button className='w-1/2 h-10 bg-white border-2 border-black rounded-lg'>Submit</button>
                       </div>
                    </form>
                </div>
            </div>
        </div>
    </div>

</div>
  )
}

export default AddModal