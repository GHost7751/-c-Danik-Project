import React from 'react';
import { Link } from 'react-router-dom';

const EquipmentP = () => {
    return (
        <div className='content container'>
        <div className='priceTitle'>
            <h2>Оборудование слива-налива нефтепродуктов</h2>
        </div>
        <div className='priceBody'>
            <div className='priceButt'>
                <Link to='/TankQ/EquipmentP/1' style={{ textDecoration: 'none' }}><li className='price_butt_one'>Ограничитель налива ОН-80 А</li></Link>
                <Link to='/TankQ/EquipmentP/2' style={{ textDecoration: 'none' }}><li className='price_butt_one'>Кран сифонный КС-50, КС-80</li></Link>
                <Link to='/TankQ/EquipmentP/3' style={{ textDecoration: 'none' }}><li className='price_butt_one'>Устройство сливное УС-80А</li></Link>
                <Link to='/TankQ/EquipmentP/4' style={{ textDecoration: 'none' }}><li className='price_butt_one'>Клапан ОК-80</li></Link>
                <Link to='/TankQ/EquipmentP/5' style={{ textDecoration: 'none' }}><li className='price_butt_one'>Муфта сливная МС-2Н</li></Link>
            </div>
        </div>
        <div>
             <Link to='/Price' style={{ textDecoration: 'none' }}><li className='price_butt_back'>Назад</li></Link>
        </div>
    </div>
    );
};

export default EquipmentP;
