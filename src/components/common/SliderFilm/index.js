import React from 'react';
import PropTypes from 'prop-types';
import "./index.scss"

SliderFilm.propTypes = {
    
};

function SliderFilm(props) {
    const listTag = [
        "Action",
        "Funny"
    ]
    return (
        <div className='slider-item'>
            <img src='https://image.tmdb.org/t/p/original/2Eewgp7o5AU1xCataDmiIL2nYxd.jpg' alt='img_poster' />
            <span className='overlay'></span>
            <div className='info container'>
                <h1 >Prizefighter: The Life of Jem Belcher</h1>
                <div className='rating d-flex align-items-center my-4'>
                    <div className='score me-2'>9.7</div>
                    <span>
                        {listTag.map((tag,idx) => <button type="button" className="btn btn-danger py-1 px-2 mx-2" key={idx}>{tag}</button>)}
                    </span>
                </div>
                <p className='short_desc'>
                    At the turn of the 19th century, Pugilism was the sport of kings 
                    and a gifted young boxer fought his way to becoming champion of England.
                </p>
                <button type="button" className="btn btn-danger my-4 p-2 px-3">
                    <i className="fa-solid fa-play ms-2 me-2"></i>
                    WATCH NOW
                </button>
            </div>
        </div>
    );
}

export default SliderFilm;