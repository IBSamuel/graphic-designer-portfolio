import React from 'react'
import oneEvent from "../../assets/Event Promotion Flyers/4b6dfcd7d84ec622ffe8aaf3e5bbaf30 copy.jpg"
import twoEvent from "../../assets/Event Promotion Flyers/Activities.jpg"
import threeEvent from "../../assets/Event Promotion Flyers/Adeyemo Dorcas Odunola copy.jpg"
import fourEvent from "../../assets/Event Promotion Flyers/bROKEN SHAKLES DESIGN copy.png"
import fiveEvent from "../../assets/Event Promotion Flyers/Eid-Ul-Fitr-Banner copy.png"
import sixEvent from "../../assets/Event Promotion Flyers/Festival Music copy.png"
import sevenEvent from "../../assets/Event Promotion Flyers/Harmony In Diversity.jpg"
import eightEvent from "../../assets/Event Promotion Flyers/helping Pelumi copy my own.png"
import nineEvent from "../../assets/Event Promotion Flyers/Main flyer.jpg"
import tenEvent from "../../assets/Event Promotion Flyers/Nathniel & Natasha copy.png"
import elevenEvent from "../../assets/Event Promotion Flyers/Skkci Donation2.jpg"
import twelveEvent from "../../assets/Event Promotion Flyers/Throwback Thursday.png"
import thirteenEvent from "../../assets/Event Promotion Flyers/We are Reactivating copy.jpg"
import { Link } from 'react-router-dom'
import Navbar from '../Navbar'
import SectionOne from '../SectionOne'
const Events = () => {
    let eventCategory = [
        {
          imageCategoryName:'Event Flyers',
          image:oneEvent
        },
        {
          imageCategoryName:'Event Flyers',
          image:twoEvent
        },
        {
          imageCategoryName:'Event Flyers',
          image:threeEvent
        },
        {
          imageCategoryName:'Event Flyers',
          image:fourEvent
        },
        {
          imageCategoryName:'Event Flyers',
          image:fiveEvent
        },
        {
          imageCategoryName:'Event Flyers',
          image:sixEvent
        },
        {
          imageCategoryName:'Event Flyers',
          image:sevenEvent
        },
        {
          imageCategoryName:'Event Flyers',
          image:eightEvent
        },
        {
          imageCategoryName:'Event Flyers',
          image:nineEvent
        },
        {
          imageCategoryName:'Event Flyers',
          image:tenEvent
        },
        {
          imageCategoryName:'Event Flyers',
          image:elevenEvent
        },
        {
          imageCategoryName:'Event Flyers',
          image:twelveEvent
        },
        {
          imageCategoryName:'Event Flyers',
          image:thirteenEvent
        },
      ]
  return (
    <div>
    <Navbar/>
    <SectionOne/>
      <div className="row mx-auto">
          <Link to="/all" className="nav-link me-sm-5 m-1 linksAnimation col-lg-1 col-sm-12 text-center btn">
            All
          </Link>
          <Link to="/movie" className="nav-link me-sm-5 m-1 linksAnimation col-lg-2 col-sm-12 text-center">
            Movie Flyers
          </Link>
          <Link to="/advert" className="nav-link me-sm-5 m-1 linksAnimation col-lg-2 col-sm-12 text-center">
            Advertisement Flyers
          </Link>
          <Link to="/event" className="nav-link border-bottom border-dark border-2 me-sm-5 m-1 linksAnimation col-lg-2 col-sm-12 text-center">
            Event Promotion Flyers
          </Link>
          <Link to="/product" className="border-bottom border-2 border-dark nav-link me-sm-5 m-1 linksAnimation col-lg-2 col-sm-12 text-center">
            Product Promotion Flyers
          </Link>
        </div>
        <div className="m-sm-5 m-3 ">
        <div className="row" id="changeCategory ">
        {eventCategory.map((items, index) => (
    <div key={index} className="col-md-3 mb-3 border">
      <div
        className="card d-inline border"
        data-bs-toggle="modal"
        data-bs-target={`#exampleModal-${index}`}
        style={{ width: "18rem" }}
      >
        <img src={items.image} className="card-img-top" alt="..." />
        <div className="card-body">
          <p className="card-title fw-semibold">Category</p>
          <p className="card-text">{items.imageCategoryName}</p>
        </div>
      </div>

      <div
        className="modal fade"
        id={`exampleModal-${index}`}
        tabIndex="-1"
        aria-labelledby={`exampleModalLabel-${index}`}
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg">
          <div className="modal-content ">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id={`exampleModalLabel-${index}`}>
              {items.imageCategoryName}
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <img className="w-100" src={items.image} alt="" />
            </div>
            <div className="modal-footer">

            </div>
          </div>
        </div>
      </div>
    </div>
  ))}
</div>

          
        </div>
    </div>
  )
}

export default Events