import React from 'react'

const SectionOne = () => {
  return (
    <>
        <section>
            <div className='row m-sm-5 m-3'>
                <div className="col-lg-6 col-12-sm mt-sm-5 pt-5">
                <div className='fontHight mt-5'>
                    <p className='fs-1'>Hello, I'm</p>
                    <p className='nameFontSize'>Adeosun Samuel</p>
                    <p>Graphic Designer</p>
                </div>
                <div className='gap-2 d-flex'>
                <i class="bi bi-github h3"></i>
                <i class="bi bi-linkedin h3"></i>
                <i class="bi bi-whatsapp h3"></i>
                </div>
                <div>
                <button className='text-uppercase btn fw-semibold rounded rounded-5 me-2 text-white bg-dark'>Hire Me</button>
                    <button className='text-uppercase btn border border-dark border-2 fw-semibold rounded rounded-5'>See My Resume</button>
                </div>
                </div>
                <div className="col-lg-5 col-12-sm">
                    <div><img className='w-100' src="https://img.freepik.com/free-photo/casual-young-african-man-smiling-isolated-white_93675-128895.jpg?w=740&t=st=1705050077~exp=1705050677~hmac=a1cb96f2f5ac2a974b5a3c982f7cf792419772ebb48f685b6a08288ddfe9cbae" alt="" /></div>
                </div>
            </div>
        </section>
    </>
  )
}

export default SectionOne