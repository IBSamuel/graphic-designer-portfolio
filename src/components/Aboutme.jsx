import React from 'react'
import Navbar from './Navbar'
const Aboutme = () => {
  return (
    <>
        <div>
            <Navbar/>
        </div>
        <div className='row m-5 m-3'>
            <div className="col-lg-6 col-sm-12">
            <img className='w-100' src="https://img.freepik.com/free-photo/casual-young-african-man-smiling-isolated-white_93675-128895.jpg?w=740&t=st=1705050077~exp=1705050677~hmac=a1cb96f2f5ac2a974b5a3c982f7cf792419772ebb48f685b6a08288ddfe9cbae" alt="" />
            </div>
            <div className="col-lg-5 col-sm-12 mt-sm-5">
            <br />
            <br />
                <p className='h3 fw-bold'>ABOUT ME</p>
                <p className='text text-light'>WHO I AM</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil tempora exercitationem, commodi eligendi possimus optio quas, perspiciatis, fugit numquam similique quam tempore consectetur animi! Ad officiis esse animi temporibus, quae recusandae iste cupiditate commodi, inventore fugit reprehenderit magnam excepturi vero expedita enim libero ipsam a. Earum doloremque, magni adipisci debitis maxime, culpa, sequi corrupti nisi quaerat autem amet neque eos!</p>
                <div>
                <button className='text-uppercase btn fw-semibold rounded rounded-5 me-2 text-white bg-dark'>Hire Me</button>
                    <button className='text-uppercase btn border border-dark border-2 fw-semibold rounded rounded-5'>See My Resume</button>
                </div>
            </div>
        </div>
    </>
  )
}

export default Aboutme