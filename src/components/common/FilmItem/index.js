import React from 'react';
import PropTypes from 'prop-types';
import "./index.scss"

FilmItem.propTypes = {
    
};

function FilmItem(props) {
    return (
        <div className='film-item my-1'>
            <img src="https://image.tmdb.org/t/p/w500/3bhkrj58Vtu7enYsRolD1fZdja1.jpg" alt="img_film"/>
            <div className='overlay d-flex align-items-end'>
                <span className='play'>
                    <i className="fa-solid fa-play"></i>
                </span>
                <div className='info p-3' style={{color:"#ffffff"}}>
                    <p className='score'>8.9</p>
                    <p className='release my-2'>2022</p>
                    <p className='name'>The God Father</p>
                </div>
            </div>
        </div>
    );
}

export default FilmItem;