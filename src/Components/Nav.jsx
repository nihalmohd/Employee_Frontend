import React, { useState } from 'react'
import {FiLogOut} from "react-icons/fi"
import {AiOutlinePlusCircle} from "react-icons/ai"
import { useDispatch } from 'react-redux'
import { logoutUser } from '../Redux/DoctorSlice'
import {IoIosContact} from "react-icons/io"
import { useNavigate } from 'react-router-dom'
const Nav = () => {
    const Navigate  = useNavigate()
    const Dispatch = useDispatch()
    const [isModalOpen,setIsmodalOpen] = useState(false)
  return (
    <div>  
        <div className="w-full h-16 bg-[#bec9e1] p-1 z-10">
            <div className="w-full h-full  flex justify-end items-center gap-2 p-2">
                <div className="w-[200px] h-14  flex justify-center items-center">
                    <button 
                    onClick={()=>{Navigate("/Modal")}}
                    className='w-full h-11 hover:text-white bg-[#6d42d8] text-xl font-extrabold text-[#7886a1] flex justify-center items-center gap-2 shadow-xl rounded-md  '>
                        <h1 className='text-2xl'><AiOutlinePlusCircle/></h1>
                        <h1>Add</h1>
                     </button>
                </div>
                <div className="w-[200px] h-14  flex justify-center items-center">
                    <button
                    onClick={()=>{Dispatch(logoutUser() ,Navigate("/"))}} 
                    className='w-full h-11 hover:text-white bg-[#6d42d8] text-xl font-extrabold text-[#7886a1] flex justify-center items-center gap-2 shadow-xl rounded-md  '>
                        <h1>Logout</h1>
                        <h1><FiLogOut/></h1>
                     </button>
                </div>
                <div onClick={()=>{Navigate("/profile")}} className="w-12 h-12 bg-white rounded-full flex justify-center items-center text-center">
                    <h1 className='text-center text-5xl'><IoIosContact/></h1>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Nav