import React from 'react'

const SectionOne = () => {
  return (
    <>
        <section>
            <div className='row m-5'>
                <div className="col-lg-6 col-12-sm mt-5 pt-5">
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
                </div>
                <div className="col-lg-4 col-12-sm">
                    <div><img className='w-75' src="https://img.freepik.com/free-photo/black-man-with-happy-expression_155003-11382.jpg?w=360&t=st=1704994582~exp=1704995182~hmac=5d5108d60f5426b2d971d0d70c3bf3863dffae92057a2b398372fac391ef35bf" alt="" /></div>
                </div>
            </div>
        </section>
    </>
  )
}

export default SectionOne