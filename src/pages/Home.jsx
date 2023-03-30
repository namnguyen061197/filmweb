import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import SliderList from '../components/common/SliderList';
import RowList from '../components/common/RowList';
import { useDispatch, useSelector } from 'react-redux';
import { getMoviesTopRate, getMoviesPopular, getMoviesNowPlaying } from '../store/slices/moviesSlice';
import { getTvSeriesTopRate, getTvSeriesPopular } from '../store/slices/tvSeriesSlice';
import { CATEGORY_DATA } from '../api/tmdp';

Home.propTypes = {
    
};

function Home(props) {
    const {moviesPopular, moviesTopRate, moviesNowPlaying }= useSelector(state => state.movies);

    const {tvSeriesPopular, tvSeriesTopRate}= useSelector(state => state.tvSeries);
    const dispatch = useDispatch();

    useEffect(() => {
        // get data movies
        dispatch(getMoviesTopRate())
        dispatch(getMoviesPopular())
        dispatch(getMoviesNowPlaying())

        // get data tv series
        dispatch(getTvSeriesTopRate())
        dispatch(getTvSeriesPopular())
        window.scrollTo(0,0)
      },[dispatch]);
      
    
    return (
        <div className='home'>
            <SliderList listSlide={moviesNowPlaying}/>
            <RowList title={"Popular Movies"} listData={moviesPopular} category={CATEGORY_DATA.movie}/> 
            <RowList title={"Popular Series"} listData={tvSeriesPopular} category={CATEGORY_DATA.tv} />
            <RowList title={"Top Rated Movies"} listData={moviesTopRate} category={CATEGORY_DATA.movie}/>
            <RowList title={"Top Rated Series"} listData={tvSeriesTopRate}  category={CATEGORY_DATA.tv}/> 
        </div>
    );
}

export default Home;