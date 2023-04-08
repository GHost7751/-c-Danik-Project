import React from 'react';
import { Link } from 'react-router-dom';

const FireFuses = () => {
    return (
        <div className='content container'>
        <div className='priceTitle'>
            <h2>Предохранители огневые</h2>
        </div>
        <div className='priceBody'>
            <div className='priceButt'>
                <Link to='/TankQ/FireF/1' style={{ textDecoration: 'none' }}><li className='price_butt_one'>Пламяпреградитель</li></Link>
                <Link to='/TankQ/FireF/2' style={{ textDecoration: 'none' }}><li className='price_butt_one'>Огнепреградитель ОП-350</li></Link>
                <Link to='/TankQ/FireF/3' style={{ textDecoration: 'none' }}><li className='price_butt_one'>Огнепреградитель ОП-250</li></Link>
                <Link to='/TankQ/FireF/4' style={{ textDecoration: 'none' }}><li className='price_butt_one'>Огнепреградитель ОП-150</li></Link>
                <Link to='/TankQ/FireF/5' style={{ textDecoration: 'none' }}><li className='price_butt_one'>Огнепреградитель ОП-80</li></Link>
                <Link to='/TankQ/FireF/6' style={{ textDecoration: 'none' }}><li className='price_butt_one'>Предохранитель огневой жидкостный</li></Link>
                <Link to='/TankQ/FireF/7' style={{ textDecoration: 'none' }}><li className='price_butt_one'>Огнепреградитель ОП-500</li></Link>
                <Link to='/TankQ/FireF/8' style={{ textDecoration: 'none' }}><li className='price_butt_one'>Огнепреградитель ОП-200</li></Link>
                <Link to='/TankQ/FireF/9' style={{ textDecoration: 'none' }}><li className='price_butt_one'>Огнепреградитель ОП-300</li></Link>
                <Link to='/TankQ/FireF/10' style={{ textDecoration: 'none' }}><li className='price_butt_one'>Огнепреградитель ОП-100</li></Link>
                <Link to='/TankQ/FireF/11' style={{ textDecoration: 'none' }}><li className='price_butt_one'>Огнепреградитель ОП-50</li></Link>
                <Link to='/TankQ/FireF/12' style={{ textDecoration: 'none' }}><li className='price_butt_one'>Предохранитель огневой коммуникационный</li></Link>
            </div>
        </div>
        <div>
             <Link to='/Price' style={{ textDecoration: 'none' }}><li className='price_butt_back'>Назад</li></Link>
        </div>
    </div>
    );
};

export default FireFuses;