import React from 'react';
import './CPI.css'

const CPI = () => {
    return (
        <div className='cpi'>
            <h1 className='cpi_title'>Контактная информация:</h1>
            <div className='cpi_info'>
                <div className='cpi_info_descrip'>
                    <p>Адрес офиса и склада: <strong>127576 г. Москва, ул. Новгородская д. 1.</strong>
                    <br />
                        От метро Алтуфьево пешком 10 минут.
                        <br />
                        Выход – последний вагон из центра направо и затем налево.
                        <br />
                        От МКАД до офиса 2,4 км.</p>

                    <p>
                        <em>Офис</em> - помещение Г240.
                        <br />
                        <em>Склад стекло</em> -  помещение Г117.
                        <br />
                        <em>Склад арматура</em> -  помещение Б101.
                        <br />
                        <em>Внутренний телефон (на проходной)</em>: 112.
                        <br />
                        <em>Телефоны</em>: +7 (495) 231-36-71 (многоканальный), +7 (495) 772-36-36, +7 (499) 209-42-38
                        <br />
                        <em>E-mail</em>: info@techsteklo.ru
                    </p>

                    <strong>Внимание!</strong> Товар без оригинала доверенности не отгружается!
                    <br />
                    <strong>Внимание!</strong> Проезд фур и длинномеров на территорию запрещен!
                    <br />
                    Перегрузка товара погрузчиком производится за счет покупателя.
                    <br />
                    Время работы с 9.00 до 17.30 (в пятницу до 16.45).
                </div>
            </div>
        </div>
    );
};

export default CPI;