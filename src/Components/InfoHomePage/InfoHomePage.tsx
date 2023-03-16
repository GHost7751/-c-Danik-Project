import React from 'react';
import { Link } from 'react-router-dom';
import './InfoHomePage.css'

const InfoHomePage = () => {
    return (
        <div className='InfoHomePage'>
            <div className='discripInfo'>
            <strong>Для 80% оплачиваемых нам счетов продукция отгружается из наличия!</strong>
            <hr />
            <em>
            Компания "Доминик" эффективно работает на рынке трубопроводной арматуры с 2002 года.
            <hr />
             За время работы клиентами Компании стали более 9 тысяч различных организаций. У нас многолетний опыт поставок трубопроводной арматуры с собственных складов и под заказ на промышленные предприятия всех отраслей промышленности.
            </em>
            <br />
            <Link to='/company'><button className='butInfo'>
                О Компании
            </button></Link>
            
            </div>
        </div>
    );
};

export default InfoHomePage;