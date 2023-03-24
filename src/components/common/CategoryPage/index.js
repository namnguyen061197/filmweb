import React, { useState } from 'react';
import PropTypes from 'prop-types';
import FilmItem from '../FilmItem';
import SliderList from '../SliderList';
import "./index.scss"

CategoryPage.propTypes = {
    
};

function CategoryPage({title, listSliderList, listData, onHandleChangeType}) {

    const listType = [
        {
            label:"popular",
            path:"popular"
        },
        {
            label:"top rated", 
            path:"top_rated"
        }
    ]

    const [activeType, setActiveType] = useState("popular");
    const [loadStatus, setLoadStatus] = useState(false)

    const handleChangeType = (type) => {
        setActiveType(type)
    }
    
    const handleLoadMore = () => {
        setLoadStatus(true);
        setTimeout(() => {
            setLoadStatus(false)
        },1000)
    }

    return (
        <div className='category-page'>
            <SliderList />
            <div className='navbar container my-4 ps-3 d-flex justify-content-between'>
                <h4>{title.charAt(0).toUpperCase() + title.slice(1)}</h4>
                <span>
                    {listType.map((type,idx) => 
                        <button 
                            className={`p-2 mx-2 btn ${ activeType === type.label && "btn-danger" }`}
                            key={type.label}
                            onClick={() => handleChangeType(type?.label)} 
                        >
                            {type?.label.toUpperCase()}
                        </button>
                    )}
                </span>
            </div>
            <div className='listData container'>
                <div className='row'>
                    <div className='col-3'>
                        <FilmItem />
                    </div>
                    <div className='col-3'>
                        <FilmItem />
                    </div>
                    <div className='col-3'>
                        <FilmItem />
                    </div>
                    <div className='col-3'>
                        <FilmItem />
                    </div>
                    <div className='col-3'>
                        <FilmItem />
                    </div>
                    <div className='col-3'>
                        <FilmItem />
                    </div>
                    <div className='col-3'>
                        <FilmItem />
                    </div>
                    <div className='col-3'>
                        <FilmItem />
                    </div>
                    <div className='col-3'>
                        <FilmItem />
                    </div>
                    <div className='col-3'>
                        <FilmItem />
                    </div>
                    <div className='col-3'>
                        <FilmItem />
                    </div>
                    <div className='col-3'>
                        <FilmItem />
                    </div>
                    <div className='col-3'>
                        <FilmItem />
                    </div>
                    <div className='col-3'>
                        <FilmItem />
                    </div>
                    <div className='col-3'>
                        <FilmItem />
                    </div>
                    <div className='col-3'>
                        <FilmItem />
                    </div>
                </div>
                <div className="d-grid">
                    <button 
                        className="btn btn-danger my-5" 
                        type="button"
                        onClick={() => handleLoadMore()}
                    >
                        {loadStatus ? <img className='ms-2 mb-1' width="15px" height="15px" src="https://media.tenor.com/On7kvXhzml4AAAAj/loading-gif.gif" alt='imgloading' /> : "LOAD MORE"}
                    </button>
                </div>
            </div>
            
        </div>
    );
}

export default CategoryPage;