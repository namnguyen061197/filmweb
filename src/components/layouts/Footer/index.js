import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import "./index.scss"
import { ThemeContext } from '../../../store/contexts/themeContext';

Footer.propTypes = {
    
};

function Footer(props) {
    const {themeMode} = useContext(ThemeContext);
    return (
        <div className={`footer px-4 py-4 d-flex justify-content-between ${themeMode}`}>
            <span className='logo'>
                <span style={{color:"black"}}>Sun</span>
                <span style={{color:"red"}}>Star</span>
            </span>
            <ul className='d-flex align-items-center'>
                <li className='mx-1 p-2 menu_item'>HOME</li>
                <li className='mx-1 p-2 menu_item'>MOVIES</li>
                <li className='mx-1 p-2 menu_item'>TV SERIES</li>
                <li className='mx-1 p-2 menu_item'>SEARCH</li>
            </ul>
    </div>
    );
}

export default Footer;