import React from "react";
import PropTypes from "prop-types";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "./index.scss";
import FilmItem from "../FilmItem";

RowList.propTypes = {};

function RowList({ title, listFilm }) {
  return (
    <div className=" container row-list my-5">
      <div className="title mb-3">
        <h4>{title && title.toUpperCase()}</h4>
        <span className="line"></span>
      </div>
      <Swiper
        className="listSwiper"
        spaceBetween={0}
        slidesPerView={5}

      >
        <SwiperSlide>
          <FilmItem />
        </SwiperSlide>
        <SwiperSlide>
          <FilmItem />
        </SwiperSlide>
        <SwiperSlide>
          <FilmItem />
        </SwiperSlide>
        <SwiperSlide>
          <FilmItem />
        </SwiperSlide>
        <SwiperSlide>
          <FilmItem />
        </SwiperSlide>
        <SwiperSlide>
          <FilmItem />
        </SwiperSlide>
        <SwiperSlide>
          <FilmItem />
        </SwiperSlide>
        <SwiperSlide>
          <FilmItem />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default RowList;
