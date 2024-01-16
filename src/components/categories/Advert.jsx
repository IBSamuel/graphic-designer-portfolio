import React from 'react'
import Navbar from '../Navbar'
import { Link } from 'react-router-dom'
import firstAdvert from "../../assets/Advertisement Flyers/Cool Logo For IMBIBE copy.png"
import secondAdvert from "../../assets/Advertisement Flyers/Flyer black.png"
import thirdAdvert from "../../assets/Advertisement Flyers/Get your design.png"
import fourAdvert from "../../assets/Advertisement Flyers/Ignite Yor Brand Potentetial copy.jpg"
import fiveAdvert from "../../assets/Advertisement Flyers/leumas flyer copy.png"
import sixAdvert from "../../assets/Advertisement Flyers/Logo Design Services copy.png"
import sevenAdvert from "../../assets/Advertisement Flyers/Package.jpg"
import eightAdvert from "../../assets/Advertisement Flyers/Seling Card copy.png"
import nineAdvert from "../../assets/Advertisement Flyers/Unleash Energy copy.png"
import SectionOne from '../SectionOne'
const Advert = () => {
    let advertArray = [
        {
            imageCategoryName:'Advert Flyers',
            image:firstAdvert
          },
          {
            imageCategoryName:'Advert Flyers',
            image:secondAdvert
          },
          {
            imageCategoryName:'Advert Flyers',
            image:thirdAdvert
          },
          {
            imageCategoryName:'Advert Flyers',
            image:fourAdvert
          },
          {
            imageCategoryName:'Advert Flyers',
            image:fiveAdvert
          },
          {
            imageCategoryName:'Advert Flyers',
            image:sixAdvert
          },
          {
            imageCategoryName:'Advert Flyers',
            image:sevenAdvert
          },
          {
            imageCategoryName:'Advert Flyers',
            image:eightAdvert
          },
          {
            imageCategoryName:'Advert Flyers',
            image:sevenAdvert
          },
          {
            imageCategoryName:'Advert Flyers',
            image:eightAdvert
          },
          {
            imageCategoryName:'Advert Flyers',
            image:nineAdvert
          },
    ]
  return (
    <>
    <Navbar/>
    <SectionOne/>
     {/* Categories Of my design */}
        
        <div className="row mx-auto">
          <Link to="/all" className="nav-link me-sm-5 m-1 linksAnimation col-lg-1 col-sm-12 text-center btn">
            All
          </Link>
          <Link to="/movie" className="nav-link me-sm-5 m-1 linksAnimation col-lg-2 col-sm-12 text-center">
            Movie Flyers
          </Link>
          <Link to="/advert" className="border-bottom border-dark border-2 nav-link me-sm-5 m-1 linksAnimation col-lg-2 col-sm-12 text-center">
            Advertisement Flyers
          </Link>
          <Link to="/event" className="nav-link me-sm-5 m-1 linksAnimation col-lg-2 col-sm-12 text-center">
            Event Promotion Flyers
          </Link>
          <Link to="/product" className=" nav-link me-sm-5 m-1 linksAnimation col-lg-2 col-sm-12 text-center">
            Product Promotion Flyers
          </Link>
        </div>
        <div className="m-sm-5 m-3 ">
        <div className="row" id="changeCategory ">
        {advertArray.map((items, index) => (
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
      
  </>

  )
}

export default Advert