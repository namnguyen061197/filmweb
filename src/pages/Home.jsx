import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import SliderList from '../components/common/SliderList';
import RowList from '../components/common/RowList';

Home.propTypes = {
    
};

function Home(props) {

    useEffect(() => {
        window.scrollTo(0,0)
    }, [])
    
    return (
        <div className='home'>
            <SliderList />
            <RowList title={"Popular Movies"}/>
            <RowList title={"Popular Series"}/>
            <RowList title={"Top Rated Movies"}/>
            <RowList title={"Top Rated Series"}/>
        </div>
    );
}

export default Home;