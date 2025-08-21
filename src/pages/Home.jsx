import React from 'react';
import { Link } from 'react-router-dom';
import { IoMdArrowForward } from "react-icons/io";

const Home = () => {
  return (
    <div className='relative flex mx-auto flex-col w-11/12  items-center
     text-white justify-between'>
        {/* Section1 */}
        <div>
            <Link to={"/signup"}>
               <div className='mx-auto rounded-b-full bg-richblack-800 font-bold text-richblack-200'>
                  <div className=''>
                     <p>Become an Instructor</p>
                      <IoMdArrowForward />
                  </div>
               </div>
            </Link>
        </div>


        {/* Section2 */}


        {/* Section3 */}


        {/* Footer */}
    </div>
  )
}

export default Home
