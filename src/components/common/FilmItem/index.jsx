import React from 'react';
import "./index.scss"
import defaultImg from "../../../assets/images/defaultImg.jpg"
import { Link } from 'react-router-dom';

FilmItem.propTypes = {
    
};

function FilmItem({data,category, ...props}) {
    const releaseDate = new Date(data.release_date || data.first_air_date).getFullYear()

    return (
        <Link to={`/${category}/${data.id}`} >
            <div className='film-item my-1'>
                <img src={data?.poster_path ? `https://image.tmdb.org/t/p/w500${data?.poster_path}` : defaultImg } style={{height:"100%"}} alt="img_film"/>
                <div className='overlay d-flex align-items-end'>
                    <span className='play'>
                        <i className="fa-solid fa-play"></i>
                    </span>
                    <div className='info p-3'>
                        <p className='score'>{(data.vote_average)?.toFixed(1)}</p>
                        <p className='release my-2'>{releaseDate}</p>
                        <p className='name'>{data.title || data.name }</p> 
                    </div>
                </div>
            </div>
        </Link>
    );
    
}

export default FilmItem;