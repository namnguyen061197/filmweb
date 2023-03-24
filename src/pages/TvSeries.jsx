import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import CategoryPage from '../components/common/CategoryPage';

TvSeries.propTypes = {
    
};

function TvSeries(props) {
    
    useEffect(() => {
        window.scrollTo(0,0)
    }, [])

    return (
        <div className='tvseries'>
            <CategoryPage title="TV Series"/>
        </div>   
    );
}

export default TvSeries;