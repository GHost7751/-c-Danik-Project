import React from 'react';
import { Link } from 'react-router-dom';

const TankEq = () => {
    return (
        <div className='content container'>
        <div className='priceTitle'>
            <h2>РЕЗЕРВУАРНОЕ ОБОРУДОВАНИЕ</h2>
        </div>
        <div className='priceBody'>
            <div className='priceButt'>
                <Link to='/TankQ/DuhKlap' style={{ textDecoration: 'none' }}><li className='price_butt_one'>Дыхательные клапаны</li></Link>
                <Link to='/TankQ/LukRez' style={{ textDecoration: 'none' }}><li className='price_butt_one'>Люки резервуаров</li></Link>
                <Link to='/TankQ/EquipmentP' style={{ textDecoration: 'none' }}><li className='price_butt_one'>Оборудование слива-налива нефтепродуктов</li></Link>
                <Link to='/TankQ/FireF' style={{ textDecoration: 'none' }}><li className='price_butt_one'>Предохранители огневые</li></Link>
                
            </div>
        </div>
        <div>
             <Link to='/Price' style={{ textDecoration: 'none' }}><li className='price_butt_back'>Назад</li></Link>
        </div>
    </div>
    );
};

export default TankEq;