import React from 'react'

import firstProduct from "../../assets/Product Promotion Flyer/Chips.png"
import secondProduct from "../../assets/Product Promotion Flyer/DO polutry Flyer copy.png"
import thirdProduct from "../../assets/Product Promotion Flyer/Imbibe Bigar shop copy.png"
import Navbar from '../Navbar'
import SectionOne from '../SectionOne'
import { Link } from 'react-router-dom'

const Product = () => {
    let productCategory = [
        {
          imageCategoryName:'Product Flyers',
          image:firstProduct
        },
        {
          imageCategoryName:'Product Flyers',
          image:secondProduct
        },
        {
          imageCategoryName:'Product Flyers',
          image:thirdProduct
        },
      ]
  return (
    <>
       <Navbar/>
        <SectionOne/>
        <div className="row mx-auto">
          <Link to="/all" className=" nav-link me-sm-5 m-1 linksAnimation col-lg-1 col-sm-12 text-center btn">
            All
          </Link>
          <Link to="/movie" className=" nav-link btm me-sm-5 m-1 linksAnimation col-lg-2 col-sm-12 text-center">
            Movie Flyers
          </Link>
          <Link to="/advert" className="nav-link btn me-sm-5 m-1 linksAnimation col-lg-2 col-sm-12 text-center">
            Advertisement Flyers
          </Link>
          <Link to="/event" className="nav-link btn me-sm-5 m-1 linksAnimation col-lg-2 col-sm-12 text-center">
            Event Promotion Flyers
          </Link>
          <Link to="/product" className="nav-link border-bottom border-2 border-dark rounded rounded-0  btn me-sm-5 m-1 linksAnimation col-lg-2 col-sm-12 text-center">
            Product Promotion Flyers
          </Link>
        </div>
        <div className="m-sm-5 m-3 ">
        <div className="row" id="changeCategory ">
        {productCategory.map((items, index) => (
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

export default Product