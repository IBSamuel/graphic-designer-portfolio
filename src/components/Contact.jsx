import React from 'react'
import element1 from '../assets/element/separatorBlack 2.png'
import Navbar from './Navbar'
import "../styles/Contact.css"

const Contact = () => {
    return (
        <>
            <Navbar />
            <section>
                <div className="row m-sm-5 m-2">
                    <div className="col-lg-6 col-sm-12">
                        <img className='w-100 mt-sm-5' src="https://img.freepik.com/free-photo/person-office-during-work-day_23-2150690165.jpg?w=826&t=st=1705394649~exp=1705395249~hmac=a3d5c33cdff4d93632bd70154396413974d4ccea870050d83a8fcc6831aa510f" alt="" />
                    </div>
                    <div className="col-lg-5 col-sm-12">
                        <div className='text-center'>
                            <p className='h1 fw-bold'>CONTACT</p>
                            <p>Project or hire? Let's talk! Drop me a message.</p>
                            <img src={element1} alt="" />
                            <div className='text-center'>
                            <br />
                                <div className='p-2'>
                                <input type="text" name="" className='form-control m-2' placeholder='Full Name*' />
                                <input type="email" name="" className='form-control m-2' placeholder='Email Address*' />
                                <input type="number" name="" className='form-control m-2' placeholder='Phone Number' />
                                <textarea name="" className='form-control m-2' placeholder='Message*' id="" cols="30" rows="10"></textarea>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Contact