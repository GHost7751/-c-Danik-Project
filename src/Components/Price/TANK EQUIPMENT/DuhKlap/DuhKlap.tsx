import React from 'react';
import { Link } from 'react-router-dom';

const TankEq = () => {
    return (
        <div className='content container'>
        <div className='priceTitle'>
            <h2>Дыхательные клапаны</h2>
        </div>
        <div className='priceBody'>
            <div className='priceButt'>
                <Link to='/TankQ/DuhKlap/1' style={{ textDecoration: 'none' }}><li className='price_butt_one'>КДМ-50</li></Link>
                <Link to='/TankQ/DuhKlap/2' style={{ textDecoration: 'none' }}><li className='price_butt_one'>КДМ-50М</li></Link>
                <Link to='/TankQ/DuhKlap/3' style={{ textDecoration: 'none' }}><li className='price_butt_one'>КДМ-150</li></Link>
                <Link to='/TankQ/DuhKlap/4' style={{ textDecoration: 'none' }}><li className='price_butt_one'>КДМ-200</li></Link>
                <Link to='/TankQ/DuhKlap/5' style={{ textDecoration: 'none' }}><li className='price_butt_one'>КДС-1500</li></Link>
                <Link to='/TankQ/DuhKlap/6' style={{ textDecoration: 'none' }}><li className='price_butt_one'>КДС-3000</li></Link>
                <Link to='/TankQ/DuhKlap/7' style={{ textDecoration: 'none' }}><li className='price_butt_one'>КДС-1500K</li></Link>
                <Link to='/TankQ/DuhKlap/8' style={{ textDecoration: 'none' }}><li className='price_butt_one'>КДС-1500M</li></Link>
                <Link to='/TankQ/DuhKlap/9' style={{ textDecoration: 'none' }}><li className='price_butt_one'>КДС-3000К</li></Link>
                <Link to='/TankQ/DuhKlap/10' style={{ textDecoration: 'none' }}><li className='price_butt_one'>НДКМ</li></Link>
                <Link to='/TankQ/DuhKlap/11' style={{ textDecoration: 'none' }}><li className='price_butt_one'>СМДК</li></Link>
                <Link to='/TankQ/DuhKlap/12' style={{ textDecoration: 'none' }}><li className='price_butt_one'>КДЗТ</li></Link>           
                
            </div>
        </div>
        <div>
             <Link to='/TankQ' style={{ textDecoration: 'none' }}><li className='price_butt_back'>Назад</li></Link>
        </div>
    </div>
    );
};

export default TankEq;