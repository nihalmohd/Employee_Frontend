import React from 'react'
import Nav from './Nav'
import {BiEditAlt} from "react-icons/bi"
import {  useSelector } from 'react-redux/es/hooks/useSelector'
import { useNavigate } from 'react-router-dom'

const DoctorsProfile = () => {
  const navigate = useNavigate()

  const DoctorData = useSelector((state)=>state.Doctor)
 console.log(DoctorData);

  return (
    <div>
      <Nav/>
      <div className="w-full h-[400px]  flex justify-center items-center p-2">
          
        <div className="w-1/2 h-full bg-[#7886a1] shadow-2xl rounded-s-3xl p-3 rounded-b-3xl">
        <div className="w-full h-12  flex justify-end items-center ">
        <div className="w-1/12 h-10 bg-gray-600 ">
                    <button
                    onClick={()=>{navigate("/ProfielEditModal")}} 
                    className='w-full h-10 bg-white translate-x-1 -translate-y-1 hover:translate-x-0 hover:-translate-y-0 font-bold text-2xl flex justify-center items-center '><BiEditAlt /></button>
                  </div>
        </div>
          <div className="w-full h-16  flex justify-center items-center">
            <h1 className='text-2xl font-bold ' >Doctor Name :</h1>
            <h1 className='text-2xl font-bold ' >{DoctorData.Name}</h1>
          </div>
          <div className="w-full h-16  flex justify-center items-center mt-1">
            <h1 className='text-lg font-bold  ' > Email :</h1>
            <h1 className='text-lg font-bold ' >{DoctorData.Email}</h1>
          </div>
          <div className="w-full h-16  flex justify-center items-center mt-1">
            <h1 className='text-lg font-bold ' > Phone no :</h1>
            <h1 className='text-lg font-bold ' >{DoctorData.Phone}</h1>
          </div>
          <div className="w-full h-16  flex justify-center items-center mt-1">
            <h1 className='text-lg font-bold ' >spiciality :</h1>
            <h1 className='text-lg font-bold ' >{DoctorData.speciality}</h1>
          </div>
          <div className="w-full h-16  flex justify-center items-center mt-1">
            <h1 className='text-lg font-bold ' ><marquee behavior="" direction="">Doctors are not just healers of the body; they are guardians of hope, champions of resilience, and bearers of compassion. Their hands work miracles, but their hearts mend spirits. In the realm of illness, they are the beacons of light, guiding us towards the shores of health and well-being</marquee></h1>
          </div>
          

        </div>
     
      </div>
    </div>
  )
}

export default DoctorsProfile