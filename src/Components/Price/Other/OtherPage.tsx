import React from 'react';
import { Link } from 'react-router-dom';
import '../indexPrice.css'

const OtherPage = () => {
    return (
        <div className='content container'>
            <div className='priceTitle'>
                <h2>Прочее</h2>
            </div>
            <div className='priceBody'>
                <div className='priceButt'>
                    <Link to='/Other/1' style={{ textDecoration: 'none' }}><li className='price_butt_one'>Прокладки графитовые</li></Link>
                    <Link to='/Other/2' style={{ textDecoration: 'none' }}><li className='price_butt_one'>Прокладки паронитовые</li></Link>
                    <Link to='/Other/3' style={{ textDecoration: 'none' }}><li className='price_butt_one'>СЛЮДА СМОГ</li></Link>
                    
                </div>
            </div>
            <div>
                 <Link to='/Price' style={{ textDecoration: 'none' }}><li className='price_butt_back'>Назад</li></Link>
            </div>
        </div>
    );
};

export default OtherPage;