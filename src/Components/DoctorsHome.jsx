import React from 'react'
import Nav from './Nav'
import { BiEditAlt } from "react-icons/bi"
import { MdDelete } from "react-icons/md"
import PatientData from './PatientData'


const DoctorsHome = () => {
  return (
    <div>
      <div className="w-full h-full ">
        <Nav />
        <div className="w-full  h-full ">
          {/* <div className="w-full h-full  grid grid-cols-3 gap-2 p-2 ">
            <div className="w-full h-[300px] bg-gray-200 p-2 flex border-2 border-black">
              <div className="w-full h-full  ">
                <PatientData />
              </div>
              <div className="w-3/12 h-1/2 p-1">
                <div className="w-full h-1/2  mt-1 p-1">
                  <div className="w-full h-10 bg-gray-500 ">
                    <button className='w-full h-10 bg-white translate-x-1 -translate-y-1 hover:translate-x-0 hover:-translate-y-0 font-bold text-2xl flex justify-center items-center '><BiEditAlt /></button>
                  </div>
                  <div className="w-full h-10 bg-gray-500 mt-2">
                    <button className='w-full h-10 bg-white translate-x-1 -translate-y-1 hover:translate-x-0 hover:-translate-y-0 font-bold text-2xl flex justify-center items-center '><MdDelete /></button>
                  </div>
                </div>
              </div>
            </div>


          </div> */}
          <div className="w-full h-full flex justify-center items-center p-3">
              <div className="w-2/3 h-[400px] ">
                <img src="https://freedesignfile.com/upload/2022/04/Empty-page-cartoon-illustration-vector.jpg" alt=""  className='w-full h-full object-cover'/>
              </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DoctorsHome