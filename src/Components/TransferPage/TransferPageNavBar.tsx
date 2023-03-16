import React from 'react';
import { Link } from 'react-router-dom';
import './TransferPage.css'

const TransferPageNavBar = () => {
    return (
        <div className='navBarTransfer'>
            <div className='nav_buttonTrans'>
               <Link to='/transferOne' style={{ textDecoration: 'none' }}><li className='nav_butt_oneTransfer'>Отправка грузов Покупателю</li></Link>
               <Link to='/transferTwo' style={{ textDecoration: 'none' }}><li className='nav_butt_oneTransfer'>Условия поставки при Самовывозе</li></Link>
               <Link to='/transferThree' style={{ textDecoration: 'none' }}><li className='nav_butt_oneTransfer'>Условия работы с поставщиками</li></Link>
            </div>
        </div>
    );
};

export default TransferPageNavBar;