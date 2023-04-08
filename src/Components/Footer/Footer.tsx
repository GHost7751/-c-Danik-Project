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
                        <li>ТЕЛЕФОН : +37529312-59-52. +37533366-66-87. +37529910-24-35.</li>
                        <li>EMAIL</li>
                        <li>АДРЕС :  : ул Тельмана дом 44, каб 21-17.</li> 
                        
                    </ul>
                </div>
            </div>
        </div>
        </>
    );
};

export default Footer;