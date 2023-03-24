import React, { useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import "./index.scss"
import { ThemeContext } from '../../../store/contexts/themeContext';
import { Link, NavLink } from 'react-router-dom';
import LoginModal from '../../common/LoginModal';

 Header.propTypes = {
    
};

function Header(props) {
    const listMenu = [
        {name:"home",path:""},
        {name:"movies",path:"movies"},
        {name:"tv series",path:"tv"},
        {name:"search",path:"search"},
    ]
    const [navbarDisplay, setNavbarDisplay] = useState("");

    const {themeMode , toggleThemeMode} = useContext(ThemeContext);
    console.log(themeMode)

    useEffect(() => {
        function handleScroll() {
            const position= window.pageYOffset;
            (position > 0) ? setNavbarDisplay("fixed-top") : setNavbarDisplay("") 
        }
        window.addEventListener('scroll', handleScroll)
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])


    return (
        <div className={`header d-flex justify-content-between px-4 py-3 ${navbarDisplay} ${themeMode.name} `}>
            <div className='left d-flex align-items-center'>
                <span className='logo'>
                    <span className='sun'>Sun</span>
                    <span style={{color:"red"}}>Star</span>
                </span>
                <span className='menu'>
                    <ul className='d-flex align-items-center'>
                        {listMenu.map((item,idx) =>
                            <li 
                                key={idx} 
                            >
                                <NavLink 
                                    activeClassName='active_menu'
                                    exact
                                    className="menu_item mx-3 p-2"
                                    to={`/${item.path}`}
                                >{item.name?.toUpperCase()}
                                </NavLink>
                            </li> 
                        )}
                        <li className='mx-3 p-2 mode-theme d-flex justify-content-center align-items-center'  onClick={toggleThemeMode} >
                            {themeMode.name === "dark" ? <i className="fa-solid fa-moon"></i> :<i className="fa-solid fa-sun"></i> }
                        </li>
                    </ul>
                </span>
            </div>
            <div className='right'>
                <LoginModal />  
            </div>
        </div>
    );
}

export default Header;