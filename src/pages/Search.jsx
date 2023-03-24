import React, { useState } from 'react';
import PropTypes from 'prop-types';

Search.propTypes = {
    
};

function Search(props) {
    const listTab = [
        { label : "movies", param: "movies"},
        { label : "tv series", param: "tv"},
        { label : "people", param: "peole"}
    ]

    const [activeTab, setActiveTab] = useState("movies")

    return (
        <div className='search py-3'>
            <ul className='d-flex justify-content-center'>
                {listTab.map((tab,idx) => 
                    <li key={idx}>
                        <span 
                            className={`tabItem p-2 mx-2 ${activeTab === tab.label ? "active_tab" : ""}`}
                            onClick={() => setActiveTab(tab.label)}
                        >
                            {tab.label.toUpperCase()}
                        </span>
                    </li>
                )}
            </ul>
            <div className='form' >
                <input type="text" className="form-control p-2 py-3" placeholder='Search SunStar '></input>
            </div>
        </div>
    );
}

export default Search;