import React, { useEffect } from 'react';
import CategoryPage from '../components/common/CategoryPage';


Movies.propTypes = {
    
};

function Movies(props) {
    
    useEffect(() => {
        window.scrollTo(0,0)
    }, [])

    return (
        <div className='movies'>
            <CategoryPage title="movies"/>
        </div>   
    );
}

export default Movies;