import React from 'react';
import './Footer.css';

const Footer = ():JSX.Element => {
    return (
        <>
        <div className='footer'>
            <div className='footer_logo'>
                <div className='footer_logo_text'>
                МЫ РАБОТАЕМ
                <br />
                 ДЛЯ ВАС
                </div>
                <div className='footer_logo_contact'>
                    <ul>
                        <li>ТЕЛЕФОН</li>
                        <li>EMAIL</li>
                        <li>АДРЕС</li>
                    </ul>
                </div>
            </div>
        </div>
        </>
    );
};

export default Footer;