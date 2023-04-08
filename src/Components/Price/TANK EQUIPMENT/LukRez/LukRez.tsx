import React from 'react';
import { Link } from 'react-router-dom';

const TankEq = () => {
    return (
        <div className='content container'>
        <div className='priceTitle'>
            <h2>Люки резервуаров</h2>
        </div>
        <div className='priceBody'>
            <div className='priceButt'>
                <Link to='/TankQ/LukRez/1' style={{ textDecoration: 'none' }}><li className='price_butt_one'>Люк замерный</li></Link>
                <Link to='/TankQ/LukRez/2' style={{ textDecoration: 'none' }}><li className='price_butt_one'>Люк-лаз</li></Link>
                <Link to='/TankQ/LukRez/3' style={{ textDecoration: 'none' }}><li className='price_butt_one'>Люк световой</li></Link>
                
            </div>
        </div>
        <div>
             <Link to='/TankQ' style={{ textDecoration: 'none' }}><li className='price_butt_back'>Назад</li></Link>
        </div>
    </div>
    );
};

export default TankEq;