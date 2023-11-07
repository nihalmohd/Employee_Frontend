import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { Update } from "../Redux/DoctorSlice";

function Form() {
   const [Name,setName] = useState("")
   const [Email,setEmail] = useState("")
   const [Phone,setPhone] = useState("")
   const [speciality,setspeciality] = useState("")

  const navigate = useNavigate()
  const Dispatch = useDispatch()
  const AddData = ()=>{
    Dispatch(Update({
      Name:Name,
      Email:Email,
      Phone:Phone,
      speciality:speciality
    }))
    navigate("/Home")
  }

console.log(Name,Email,Phone,speciality);
  return (
    <>
      <div className="w-full h-screen  flex ">
        <div className="w-1/2 h-full  flex justify-center items-center p-2">
          <div className="w-full h-full  flex flex-col gap-2 p-2">
            <div className="w-full h-32  flex justify-center items-end">
              <section className="w-[285px] h-14   flex items-end justify-start">
                <h1 className="text-xl text-[#7886a1] font-roboto font-bold text-center">
                  SignUp for an account
                </h1>
              </section>
            </div>
            <div className="w-full h-96  p-2">
              <div className="w-full h-full  flex justify-center items-center ">
                <div className="w-72">
                  <div className="relative mt-5 h-10 w-full min-w-[200px]">
                    <input
                      onChange={(e)=>{setName(e.target.value)}}
                      required
                      className=" text-white peer h-full w-full rounded-[7px] border border-blue-gray-200 border-t-[#7886a1] bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-[#7886a1] focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                      placeholder=" "
                    />
                    <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-[#7886a1] peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-[#7886a1] peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-[#7886a1] peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-[#7886a1] peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-[#7886a1]">
                      Name
                    </label>
                  </div>
                  <div className="relative mt-5 h-10 w-full min-w-[200px]">
                    <input
                    required
                      onChange={(e)=>{setEmail(e.target.value)}}
                      className=" text-white peer h-full w-full rounded-[7px] border border-blue-gray-200 border-t-[#7886a1] bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-[#7886a1] focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                      placeholder=" "
                    />
                    <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-[#7886a1] peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-[#7886a1] peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-[#7886a1] peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-[#7886a1] peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-[#7886a1]">
                      Email
                    </label>
                  </div>
                  <div className="relative mt-5 h-10 w-full min-w-[200px]">
                    <input
                    
                     onChange={(e)=>{setPhone(e.target.value)}}
                     type="numbe"
                      className=" text-white peer h-full w-full rounded-[7px] border border-blue-gray-200 border-t-[#7886a1] bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-[#7886a1] focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                      placeholder=" "
                      
                    />
                    <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-[#7886a1] peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-[#7886a1] peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-[#7886a1] peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-[#7886a1] peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-[#7886a1]">
                      Phone
                    </label>
                  </div>

                  <div className="relative mt-5 h-10 w-full min-w-[200px]">
                    
                    <select onChange={(e)=>{setspeciality(e.target.value)}} className="w-full h-10 bg-[#1f2d48] border border-white rounded-md text-sm text-[#7886a1] p-2" >
                      <option value="eye specialist">eye specialist</option>
                      <option value="otolaryngologist">otolaryngologist</option>
                      <option value="Dentist">Dentist</option>
                      <option value="orthologist">orthologist</option>
                      <option  value="General practitioner">General practitioner</option>
                    </select>
                  </div>
                  <div className="w-full h-14  flex justify-center items-center mt-3">
                    <button className="w-full h-10 text-white bg-[#6d42d8] rounded-lg shadow-lg" onClick={() => {AddData() }}>Submit</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-1/2 h-full  pt-5 px-6 mt-3 flex">
          <div className="w-full h-full bg-[#364761] rounded-t-2xl flex justify-center items-center">
            <div>
              <div className="w-full h-72  flex justify-center items-center">
                <img className=" h-full object-cover" src="\Images\WhatsApp Image 2023-10-25 at 9.26.25 PM.jpeg" alt="no Image Founded" />
              </div>
              <h1 className="text-xl font-serif font-semibold text-[#7886a1] text-center">Join Us & Explore Thousands </h1>
              <h1 className="text-xl font-serif font-semibold text-[#7886a1] text-center"> Of Greate Opportonuties </h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Form;

