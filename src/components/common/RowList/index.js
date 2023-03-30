import React, { useContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "./index.scss";
import FilmItem from "../FilmItem";
import { ThemeContext } from "../../../store/contexts/themeContext";

RowList.propTypes = {};

function RowList ({listData, title, category, ...props}) {
  const {themeMode} = useContext(ThemeContext);

  return (
    <div className={`container row-list my-5 ${themeMode.name}`}>
      <div className="title mb-3">
        <h4 className="text_color">{title && title.toUpperCase()}</h4>
        <span className="line"></span>
      </div>
      <Swiper
        className="listSwiper"
        spaceBetween={0}
        slidesPerView={5}
      >
        {listData && listData.map((data,idx) => {
          if(data) {
            return (
              <SwiperSlide key={idx}>
                <FilmItem data={data} category={category}/>
              </SwiperSlide>
            )
          }
        })}
      </Swiper>
    </div>
  );
}

export default RowList;
