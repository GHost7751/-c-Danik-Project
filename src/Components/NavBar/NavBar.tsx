import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css'

const NavBar = () => {
    return (
        <div className='navbar'>
            <div className='nav_title'>
            СнабКомплектКомпани
            </div>
            <div className='nav_button'>
                   <Link to='/' style={{ textDecoration: 'none' }}><li className='nav_butt_one'>Главная</li></Link>
                   <Link to='/company' style={{ textDecoration: 'none' }}><li className='nav_butt_one'>О Компании</li></Link>
                   <Link to='/Price' style={{ textDecoration: 'none' }}><li className='nav_butt_one'>Продукция</li></Link>
                   <Link to='/transfer' style={{ textDecoration: 'none' }}><li className='nav_butt_one'>Доставка</li></Link>
                   <Link to='/document' style={{ textDecoration: 'none' }}><li className='nav_butt_one'>Документы</li></Link>
                   <Link to='/contact' style={{ textDecoration: 'none' }}><li className='nav_butt_one'>Контакты</li></Link>
            </div>
        </div>
    );
};

export default NavBar;