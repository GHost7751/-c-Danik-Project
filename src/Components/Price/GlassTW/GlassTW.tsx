import React from 'react';
import { Link } from 'react-router-dom';

const GlassTW = () => {
    return (
        <div className='content container'>
        <div className='priceTitle'>
            <h2>Стекло кварцевое</h2>
        </div>
        <div className='priceBody'>
            <div className='priceButt'>
                <Link to='/StekloKvarc/NakonKvarc' style={{ textDecoration: 'none' }}><li className='price_butt_one'>Наконечник кварцевый</li></Link>
                <Link to='/StekloKvarc/StekloKvarc2' style={{ textDecoration: 'none' }}><li className='price_butt_one'>Стекло кварцевое прямоугольное</li></Link>
                <Link to='/StekloKvarc/StekloKvarc' style={{ textDecoration: 'none' }}><li className='price_butt_one'>Стекло кварцевое смотровое</li></Link>
                <Link to='/StekloKvarc/SterjenKvarc' style={{ textDecoration: 'none' }}><li className='price_butt_one'>Стержень кварцевый</li></Link>
                <Link to='/StekloKvarc/TrubkaKvarc' style={{ textDecoration: 'none' }}><li className='price_butt_one'>Трубка кварцевая</li></Link>
                
            </div>
        </div>
        <div>
             <Link to='/Price' style={{ textDecoration: 'none' }}><li className='price_butt_back'>Назад</li></Link>
        </div>
    </div>
    );
};

export default GlassTW;