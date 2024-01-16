import React from 'react'
import Navbar from './Navbar'

const Hire = () => {
  let skillsArray = [
    {
      img:"https://static.thenounproject.com/png/4873401-200.png",
        text:"Typography",
        classDesign:"w-25"
      }, 
      {
        img:"https://static.thenounproject.com/png/4381139-200.png",
        text:"Photo Editing",
        classDesign:"w-25"
      },
      
      {
        img:"https://cdn-icons-png.flaticon.com/512/1644/1644033.png",
        text:"Digital Media Design",
        classDesign:"w-25"
      },
      {
        img:"https://cdn-icons-png.flaticon.com/512/5626/5626129.png",
        text:"Branding",
        classDesign:"w-25"
        
      }, 
      {
        img:"https://cdn-icons-png.flaticon.com/512/7556/7556841.png",
        text:"Branding & Logo Design",
        classDesign:"w-25"
      },
      {
        icon:`bi bi-palette h1`,
        text:"Graphic Design"
      },
      {
        icon:`bi bi-eyeglasses h1`,
        text:"Creative Visualizations"
      },
        {
          img:"https://i.pinimg.com/736x/3e/e3/af/3ee3af2ae164bf631c5ebc13d40e95b1.jpg",
          text:"Adobe Creative Suite",
          classDesign:"w-25 m-2"
        }, 

    
    {
      img:"https://static.thenounproject.com/png/4395395-200.png",
      text:"Photo Manipulation",
      classDesign:"w-25"

    },

    
  ]
  return (
    <>
    <Navbar/>
    <div>
        <div className='m-5'>
            <p className='h3 fw-semibold'>HIRE ME</p>
            <p className='h3 text-light'>WHY YOU NEED TO CHOOSE ME</p>
            <div className="row">
                <div className="col-lg-5 col-sm-5-12">
                Hello, I'm Adeosun Samuel, a skilled graphic designer with over 2 years of experience. In my dynamic journey, I've cultivated a passion for turning client visions into compelling designs. My strengths lie in creativity, attention to detail, and a commitment to exceeding expectations. I am genuinely enthusiastic about new opportunities that allow me to apply my unique skills in graphic design. Let's collaborate to turn your ideas into visually impactful realities and create something amazing together!
                </div>
                <div className="col-lg-5 col-sm-5-12"></div>
            </div>
            <div>
            <br />
            <p className='h3 fw-semibold'>SKILLS</p>
            <br />
            <div className="">
  <div className="row gap-2">
    {skillsArray.map((item, index) => (
      <div key={index} className='col-lg-2 p-0'>
        <div className='border rounded text-center shadow-sm'>
        <img src={item.img} className={item.classDesign}  alt="" />
          <i className={item.icon}></i>
          <p>{item.text}</p>
        </div>
      </div>
    ))}
  </div>
</div>

              
            </div>
        </div>
    </div>
    </>
  )
}

export default Hire