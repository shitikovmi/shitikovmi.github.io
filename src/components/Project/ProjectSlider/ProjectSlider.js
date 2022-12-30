import {Swiper, SwiperSlide} from 'swiper/react';
import SwiperCore, { Autoplay, Navigation } from 'swiper';

import {useEffect} from "react";

import 'swiper/css';
import "swiper/css/navigation";
import "./ProjectSlider.scss"

const ProjectSlider = ({imagesArray = [], delay, hideOnMobile}) => {

    useEffect(() => {
        SwiperCore.use([Autoplay, Navigation]);
    })

    const isNavigation = window.screen.width <= 600;

    if (hideOnMobile && window.screen.width <= 600) return

    return (
        <Swiper className="swiper-wrapper project-slider"
            slidesPerView={"auto"}
            autoplay={{
                delay: delay,
            }}
            loop={true}
            spaceBetween={30}
            lazy={true}
            navigation={isNavigation}
            modules={[Navigation, Autoplay]}>
            {
                imagesArray.map((image, i) => (
                    <SwiperSlide key={i} className="swiper-slide">
                        <img src={image}
                             className="slide-image"
                             loading="lazy"
                             alt="Project"/>
                    </SwiperSlide>
                ))
            }
        </Swiper>
    );
};

export default ProjectSlider;