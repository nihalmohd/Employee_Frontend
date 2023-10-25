import React,{useState} from "react";

function Employeelist() {
    const [showModal,setShowModal]=useState(false)
  return (
    <div>
      <div className="w-full h-screen  grid grid-cols-3">
        <div className="w-full h-80  flex justify-center items-center">
          <div class="w-full max-w-sm bg-white border  border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            
            <div class="flex flex-col gap-2 items-center shadow-lg shadow-black pb-10">
             <h1 class="mb-1 text-xl font-medium text-gray-900 dark:text-white mt-3">Name You Created</h1>
             <div className="w-full h-5  flex justify-center">
             <h1 class="text-sm text-gray-500 dark:text-gray-400">Email:</h1>
             <h1 class="text-sm text-Black dark:text-gray-400">Email@gmail.com</h1>
             </div>
             <div className="w-full h-5  flex justify-center">
             <h1 class="text-sm text-gray-500 dark:text-gray-400">Phone:</h1>
             <h1 class="text-sm text-Black dark:text-gray-400">1234567890</h1>
             </div>
             <div className="w-full h-5  flex justify-center">
             <h1 class="text-sm text-gray-500 dark:text-gray-400">Designation :</h1>
             <h1 class="text-sm text-Black dark:text-gray-400">Software Developer</h1>
             </div>

             <marquee behavior="" direction="">

             <h1 class="text-base text-gray-500 dark:text-gray-400">I am mohammed Nihal vk Vettikkadan house kadampuzha </h1>
             </marquee>
              <div class="flex mt-4 space-x-3 md:mt-6">
                <a onClick={()=>{setShowModal(true)}}
                  href="#"
                  class="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Edit 
                </a>
                <a
                  href="#"
                  class="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700"
                >
                  Delete
                </a>
              </div>
            </div>
          </div>
        </div>
           {/* /////////////////////modall */}
           {showModal && (
                      <div
                        className="fixed top-0 left-0 right-0 z-50  bg-opacity-50 flex items-center justify-center h-screen"
                      >
                        <div className="absolute top-0 left-0 right-0 z-10 flex items-center justify-center h-screen">
                          <div className="relative   w-1/3 bg-white rounded-lg shadow dark:bg-gray-700">
                          <button
                    onClick={()=>{setShowModal(false)}}
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
                            <div className="px-6 py-6 lg:px-10 ">
                              <h3 className="mb-4 text-xl font-medium text-center text-gray-900 dark:text-white">
                                Update your data
                              </h3>
                              <form className="space-y-6" >
                                <div className="w-full">
                                  <input type="email"
                                    id="email"
                                    name="email"
                                    // onChange={(e) => setSendEmail(e.target.value)}
                                    placeholder='Name'
                                    className="mt-2 p-1.5 block w-full rounded-md  border-current border  border-gray-300 shadow-md   " required />
                                </div>
                                <div className="w-full">
                                  <input type="email"
                                    id="email"
                                    name="email"
                                    // onChange={(e) => setSendEmail(e.target.value)}
                                    placeholder='Phone'
                                    className="mt-2 p-1.5 block w-full rounded-md  border-current border  border-gray-300 shadow-md   " required />
                                </div>
                                <div className="w-full">
                                  <input type="email"
                                    id="email"
                                    name="email"
                                    // onChange={(e) => setSendEmail(e.target.value)}
                                    placeholder='email'
                                    className="mt-2 p-1.5 block w-full rounded-md  border-current border  border-gray-300 shadow-md   " required />
                                </div>
                                <div className="w-full">
                                  <input type="email"
                                    id="email"
                                    name="email"
                                    // onChange={(e) => setSendEmail(e.target.value)}
                                    placeholder='Designation'
                                    className="mt-2 p-1.5 block w-full rounded-md  border-current border  border-gray-300 shadow-md   " required />
                                </div>
                                <div className="w-full">
                                  <input type="email"
                                    id="email"
                                    name="email"
                                    // onChange={(e) => setSendEmail(e.target.value)}
                                    placeholder='Address'
                                    className="mt-2 p-1.5 block w-full rounded-md  border-current border  border-gray-300 shadow-md   " required />
                                </div>

                                {/* Submit Button */}
                                <div className="flex items-center justify-center">
                                  <button type="submit"  className="bg-blue-500 text-white h-10 w-3/6 rounded-lg shadow-xl ">
                                    Submit
                                  </button>
                                </div>
                              </form>

                            </div>
                          </div>
                        </div>
                      </div>
                    )}  
      
      </div>
    </div>
  );
}

export default Employeelist;
