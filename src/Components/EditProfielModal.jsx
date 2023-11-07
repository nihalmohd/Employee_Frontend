import React from 'react'
import Nav from './Nav'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const EditProfielModal = () => {
    const DoctorData = useSelector((state) => state.Doctor)
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
                            onClick={() => { Navigate(-1) }}
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
                                    <input type="text" value={DoctorData.Name} className='w-full h-10 border-2 p-2 border-black rounded-md' placeholder='Enter Name' />
                                </div>      
                                <div className="w-full h-8 mt-2 font-semibold pl-2 text-white">
                                    <h1>Enter your Email <span className='text-xl  text-red-700 '>*</span></h1>
                                </div>
                                <div className="w-full h-12 p-1 ">
                                    <input type="Email" value={DoctorData.Email} className='w-full h-10 border-2 p-2 border-black rounded-md' placeholder='Enter Age' />
                                </div>    
                                <div className="w-full h-8 mt-2 font-semibold pl-2 text-white">
                                    <h1>Enter your Phone No <span className='text-xl  text-red-700 '>*</span></h1>
                                </div>
                                <div className="w-full h-12 p-1 ">
                                    <input type="number" value={DoctorData.Phone} className='w-full h-10 border-2 p-2 border-black rounded-md' placeholder='Enter blood group' />
                                </div>                    
                                <div className="w-full h-8 mt-2 font-semibold pl-2 text-white">
                                    <h1>select a speciality  <span className='text-xl  text-red-700 '>*</span></h1>
                                </div>
                                <select value={DoctorData.speciality} className="w-full h-10 bg-[#1f2d48] border border-white rounded-md text-sm text-[#7886a1] p-2" >
                                    <option value="eye specialist">eye specialist</option>
                                    <option value="otolaryngologist">otolaryngologist</option>
                                    <option value="Dentist">Dentist</option>
                                    <option value="orthologist">orthologist</option>
                                    <option value="General practitioner">General practitioner</option>
                                </select>             
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

export default EditProfielModal