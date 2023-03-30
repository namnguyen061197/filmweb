import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import tmdpApi, { CATEGORY_DATA, MOVIE_TYPE } from '../api/tmdp';
import CategoryPage from '../components/common/CategoryPage';
import { getMoviesPopular, getMoviesTopRate, getMoviesUpcoming } from '../store/slices/moviesSlice';


Movies.propTypes = {
    
};

function Movies(props) {
    const {moviesPopular, moviesTopRate, moviesUpcoming }= useSelector(state => state.movies);
    const [listData, setListData] = useState(moviesPopular);
    const [activeType, setActiveType] = useState("popular")
    const [loadStatus, setLoadStatus] = useState(false)
    const dispatch = useDispatch();

    useEffect(() => {
        window.scrollTo(0,0);
        dispatch(getMoviesUpcoming());
        if(!(moviesPopular.length && moviesTopRate.length)) {
            dispatch(getMoviesTopRate());
            dispatch(getMoviesPopular())
        }
    }, [dispatch])

    useEffect(() => {
        activeType === "popular" ? setListData(moviesPopular) : setListData(moviesTopRate)
    }, [activeType, moviesTopRate, moviesPopular])

    const handleChangeType = (type) => {
        setActiveType(type)
    }

    const handleLoadmore = async (page) => {
        setLoadStatus(true);
        const res = activeType === "popular" ? 
        await tmdpApi.getList(MOVIE_TYPE.popular, CATEGORY_DATA.movie, {page: page}) 
        : await tmdpApi.getList(MOVIE_TYPE.popular, CATEGORY_DATA.movie, {page: page}) ;
        setTimeout(() => {
            const newData = [...listData,...(res.results)];
            setListData(newData)
            setLoadStatus(false)
        },[1000])
    }

    return (
        <div className='movies'>
            <CategoryPage 
                title="movies" 
                listData={listData} 
                activeType={activeType} 
                loadStatus= {loadStatus}
                listSlide={moviesUpcoming} 
                category="movie" 
                onChangeType={handleChangeType}
                onHandleLoadmore={handleLoadmore}
            />
        </div>   
    );
}

export default Movies;