import React from 'react';
import { Link } from 'react-router-dom';

const GlassOne = () => {
    return (
        <div className='content container'>
        <div className='priceTitle'>
            <h2>Стекло смотровое</h2>
        </div>
        <div className='priceBody'>
            <div className='priceButt'>
                <Link to='/StekloSmotrovoe/Steklo-C37-2' style={{ textDecoration: 'none' }}><li className='price_butt_one'>Трубка из стекла С37-2</li></Link>
                <Link to='/StekloSmotrovoe/Steklo-SL97' style={{ textDecoration: 'none' }}><li className='price_butt_one'>Стеклянная трубка СЛ 97-1</li></Link>
                <Link to='/StekloSmotrovoe/Steklo-DIN' style={{ textDecoration: 'none' }}><li className='price_butt_one'>Стекло DIN 7080</li></Link>
                <Link to='/StekloSmotrovoe/Steklo-Durens' style={{ textDecoration: 'none' }}><li className='price_butt_one'>Стекло Дюренса гладкое</li></Link>
                <Link to='/StekloSmotrovoe/Steklo-TypeB' style={{ textDecoration: 'none' }}><li className='price_butt_one'>Стекло закаленное тип Б круглое</li></Link>
                <Link to='/StekloSmotrovoe/Steklo-TypeB2' style={{ textDecoration: 'none' }}><li className='price_butt_one'>Стекло закаленное тип Б прямоугольное</li></Link>
                <Link to='/StekloSmotrovoe/Steklo-Klingera' style={{ textDecoration: 'none' }}><li className='price_butt_one'>Стекло Клингера рифленое</li></Link>
                <Link to='/StekloSmotrovoe/Steklo-SIZ' style={{ textDecoration: 'none' }}><li className='price_butt_one'>Стекло СИЗ круглое</li></Link>
                <Link to='/StekloSmotrovoe/Steklo-TypeA' style={{ textDecoration: 'none' }}><li className='price_butt_one'>Стекло смотровое незакаленное тип А</li></Link>
                <Link to='/StekloSmotrovoe/Steklo-ELC' style={{ textDecoration: 'none' }}><li className='price_butt_one'>Стекло электрообогревное для морских судов</li></Link>
                <Link to='/StekloSmotrovoe/Steklo-sudoEL' style={{ textDecoration: 'none' }}><li className='price_butt_one'>Судовой иллюминатор</li></Link>
               
       
                
            </div>
        </div>
        <div>
             <Link to='/Price' style={{ textDecoration: 'none' }}><li className='price_butt_back'>Назад</li></Link>
        </div>
    </div>
    );
};

export default GlassOne;