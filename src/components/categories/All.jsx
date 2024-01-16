import React, { useState } from 'react';
import { Link } from 'react-router-dom'

// Image Category All
import firstImage from "../../assets/Advertisement Flyers/Cool Logo For IMBIBE copy.png"
import secondImage from "../../assets/Advertisement Flyers/Flyer black.png"
import thirdImage from "../../assets/Advertisement Flyers/Get your design.png"
import fourImage from "../../assets/Advertisement Flyers/Ignite Yor Brand Potentetial copy.jpg"
import fiveImage from "../../assets/Advertisement Flyers/Imbibe Cake copy.png"
import sixImage from "../../assets/Advertisement Flyers/leumas flyer copy.png"
import sevenImage from "../../assets/Advertisement Flyers/Logo Design Services copy.png"
import eightImage from "../../assets/Advertisement Flyers/Package.jpg"
import nineImage from "../../assets/Advertisement Flyers/Seling Card copy.png"
import tenImage from "../../assets/Advertisement Flyers/Unleash Energy copy.png"
// Image Category Movie
import firstMovie from "../../assets/movie flyers/FAST 10.png"
import secondMovie from "../../assets/movie flyers/Last One copy.png"
import thirdMovie from "../../assets/movie flyers/Neural Blades copy.png"
import fourMovie from "../../assets/movie flyers/The ferce Master copy.png"
import fiveMovie from "../../assets/movie flyers/WEI WELS Movie poster copy.png"
// Image Category Advert
import firstAdvert from "../../assets/Advertisement Flyers/Cool Logo For IMBIBE copy.png"
import secondAdvert from "../../assets/Advertisement Flyers/Flyer black.png"
import thirdAdvert from "../../assets/Advertisement Flyers/Get your design.png"
import fourAdvert from "../../assets/Advertisement Flyers/Ignite Yor Brand Potentetial copy.jpg"
import fiveAdvert from "../../assets/Advertisement Flyers/leumas flyer copy.png"
import sixAdvert from "../../assets/Advertisement Flyers/Logo Design Services copy.png"
import sevenAdvert from "../../assets/Advertisement Flyers/Package.jpg"
import eightAdvert from "../../assets/Advertisement Flyers/Seling Card copy.png"
import nineAdvert from "../../assets/Advertisement Flyers/Unleash Energy copy.png"
// Image Category Event Promotion Flyers
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
// Image Category Product Promotion
import firstProduct from "../../assets/Product Promotion Flyer/Chips.png"
import secondProduct from "../../assets/Product Promotion Flyer/DO polutry Flyer copy.png"
import thirdProduct from "../../assets/Product Promotion Flyer/Imbibe Bigar shop copy.png"
import Navbar from '../Navbar';
import SectionOne from '../SectionOne';
import SectionTwo from '../SectionTwo';









const All = () => {
  const [categoryDisplay, setCategoryDisplay] = useState([]);

  
    const generateCardsAndModals = () => {
      return allImageArray.map((items, index) => (
        <div key={index} className="col-md-3 mb-3">
          
        </div>
      ));
    };
  
    const changeCategory = () => {
      const generatedContent = generateCardsAndModals();
      setCategoryDisplay(generatedContent);
    };
  


  

 let allImageArray = [
    {
        imageCategoryName:"Advert Flyers",
        image:firstImage,
    },  
    {
        imageCategoryName:'Advert Flyers',
        image:secondImage
    },
    {
      imageCategoryName:'Advert Flyers',
      image:thirdImage
    },
    {
      imageCategoryName:'Advert Flyers',
      image:fourImage
    },
    {
      imageCategoryName:'Advert Flyers',
      image:fiveImage
    },
    {
      imageCategoryName:'Advert Flyers',
      image:sixImage
    },
    {
      imageCategoryName:'Advert Flyers',
      image:sevenImage
    },
    {
      imageCategoryName:'Advert Flyers',
      image:eightImage
    },
    {
      imageCategoryName:'Advert Flyers',
      image:nineImage
    },
    {
      imageCategoryName:'Advert Flyers',
      image:tenImage
    },
    {
      imageCategoryName:'Movie Flyers',
      image:firstMovie
    },
    {
      imageCategoryName:'Movie Flyers',
      image:secondMovie
     },
     {
      imageCategoryName:'Movie Flyers',
      image:thirdMovie
    },
    {
      imageCategoryName:'Movie Flyers',
      image:fourMovie
    },
    {
      imageCategoryName:'Movie Flyers',
      image:fiveMovie
    },
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
    {/* <Section/> */}
      <div>
        {/* Categories Of my design */}
        
        <div className="row mx-auto">
          <Link to="/all" className="border-bottom border-dark border-2 nav-link me-sm-5 m-1 linksAnimation col-lg-1 col-sm-12 text-center btn rounded rounded-0">
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
          <Link to="/product" className="nav-link btn me-sm-5 m-1 linksAnimation col-lg-2 col-sm-12 text-center">
            Product Promotion Flyers
          </Link>
        </div>
        <div className="m-sm-5 m-3 ">
        <div className="row" id="changeCategory ">
        {allImageArray.map((items, index) => (
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
    </>
  );
};

export default All;
