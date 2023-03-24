import React from 'react';
import PropTypes from 'prop-types';
import { Swiper, SwiperSlide } from "swiper/react";
import SliderFilm from '../SliderFilm';

SliderList.propTypes = {
    
};

function SliderList(props) {
    return (
        <Swiper className="swiper-list">
            <SwiperSlide>
                <SliderFilm />
            </SwiperSlide>
            <SwiperSlide>
                <SliderFilm />
            </SwiperSlide>
            <SwiperSlide>
                <SliderFilm />
            </SwiperSlide>
            <SwiperSlide>
                <SliderFilm />
            </SwiperSlide>
            <SwiperSlide>
                <SliderFilm />
            </SwiperSlide>
        </Swiper>
    );
}

export default SliderList;