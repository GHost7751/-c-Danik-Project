import React from 'react';
import { Link } from 'react-router-dom';
import './indexPrice.css'


const PriceG = (): JSX.Element => {

    return (
        <div className='content container'>
            <div className='priceTitle'>
                <h2>Продукция</h2>
            </div>
            <div className='priceBody'>
                <div className='priceButt'>
                    <Link to='/Graphit' style={{ textDecoration: 'none' }}><li className='price_butt_one'>Трубопроводная арматура</li></Link>
                    <Link to='/Graphit' style={{ textDecoration: 'none' }}><li className='price_butt_one'>Насосное оборудование</li></Link>
                    <Link to='/TankQ' style={{ textDecoration: 'none' }}><li className='price_butt_one'>Резервуарное оборудование</li></Link>
                    <Link to='/StekloKvarc' style={{ textDecoration: 'none' }}><li className='price_butt_one'>Стекло кварцевое</li></Link>
                    <Link to='/StekloSmotrovoe' style={{ textDecoration: 'none' }}><li className='price_butt_one'>Стекло смотровое</li></Link>
                    <Link to='/Other' style={{ textDecoration: 'none' }}><li className='price_butt_one'>Прочее</li></Link>
                </div>
            </div>
        </div>
    );
};

export default PriceG;