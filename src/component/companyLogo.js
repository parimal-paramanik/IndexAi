import React from "react";
import amazon from '../assets/images/client/amazon.svg';
import google from '../assets/images/client/google.svg';
import lenovo from '../assets/images/client/lenovo.svg';
import paypal from '../assets/images/client/paypal.svg';
import shopify from '../assets/images/client/shopify.svg';
import spotify from '../assets/images/client/spotify.svg';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export default function CompanyLogo(){
    const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };

    return(
        <div className="grid md:grid-cols-6 grid-cols-2 justify-center gap-[30px]">
            <Carousel
        responsive={responsive}
        swipeable={false}
        draggable={false}
        autoPlay={true}
        autoPlaySpeed={4000}
        infinite={true}
        ssr={true}
        keyBoardControl={true}
        showDots={false}
        slidesToSlide={1}
        containerClass="carousel-container"
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
        direction="rtl"
>
            <div >
                <img src={amazon} className="h-6" alt="" />
            </div>

            <div >
                <img src={google} className="h-6" alt="" />
            </div>

            <div >
                <img src={lenovo} className="h-6" alt="" />
            </div>

            <div >
                <img src={paypal} className="h-6" alt="" />
            </div>

            <div >
                <img src={shopify} className="h-6" alt="" />
            </div>

            <div >
                <img src={spotify} className="h-6" alt="" />
            </div>
            </Carousel>
        </div>
    )
}