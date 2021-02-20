import React from "react";
import { Fade } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import "./styles.css";

const fadeImages = [
  "/images/img_1-min.jpg",
  "/images/img_2-min.jpg",
  "/images/img_3-min.jpg",
  "/images/img_4-min.jpg",
  "/images/img_5-min.jpg",
  "/images/img_6-min.jpg",
  "/images/img_7-min.jpg",
];

const SlideShow = () => {
  return (
    <div className='slide-container'>
      <Fade>
        <div className='each-fade'>
          <div className='image-container'>
            <img className='slide-image' src={fadeImages[0]} alt='slide' />
          </div>
        </div>
        <div className='each-fade'>
          <div className='image-container'>
            <img className='slide-image' src={fadeImages[1]} alt='slide' />
          </div>
        </div>
        <div className='each-fade'>
          <div className='image-container'>
            <img className='slide-image' src={fadeImages[2]} alt='slide' />
          </div>
        </div>
        <div className='each-fade'>
          <div className='image-container'>
            <img className='slide-image' src={fadeImages[3]} alt='slide' />
          </div>
        </div>
        <div className='each-fade'>
          <div className='image-container'>
            <img className='slide-image' src={fadeImages[4]} alt='slide' />
          </div>
        </div>
        <div className='each-fade'>
          <div className='image-container'>
            <img className='slide-image' src={fadeImages[5]} alt='slide' />
          </div>
        </div>
        <div className='each-fade'>
          <div className='image-container'>
            <img className='slide-image' src={fadeImages[6]} alt='slide' />
          </div>
        </div>
      </Fade>
    </div>
  );
};

export default SlideShow;
