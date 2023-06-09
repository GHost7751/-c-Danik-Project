import React from 'react';
import { Link } from 'react-router-dom';
import '../../../Price/indexPrice.css'

const GlassTubeSL = () => {
    return (
        <div className='content container'>
            <div className='secTitle'>
                <figure>
                    <img src={process.env.PUBLIC_URL + 'assets/price/glass/glass1.jpg'} alt='222' className='company_img' />
                </figure>
                <div>
                    <h1>СТЕКЛЯННАЯ ТРУБКА ИЗ СТЕКЛА СЛ 97-1</h1>
                    <br />
                    <p>Описание   стеклянной трубки (марка стекла СЛ 97-1):</p>
                    <br />
                    <p>
                        Стеклянные трубки из стекла СЛ 97-1 используются для изготовления колб газоразрядных ламп неоновой рекламы и электровакуумных приборов (например дуговых натриевых ламп) . Стекло марки СЛ 97-1 – это прозрачное не тонированное натрий силикатное стекло. Это стекло сплавляется с платинитом и относится к платинитовой группе электровакуумных стекол. Из стекла СЛ 97–1 изготавливаются стеклянные трубки в соответствии с ТУ 16-91 ЖТДИ.670300.015.
                    </p>
                </div>
            </div>
            <div className='secTable'>
                <p>Стеклянная трубка - цена и основные типоразмеры (марка стекла СЛ 97-1):</p>
                <br />
            </div>
            <table>
                <tbody>
                    <tr>
                        <th>Размер (диаметр х толщина стенки х длина),  мм</th>
                        <th>Масса, кг</th>
                    </tr>
                    <tr>
                        <td>Трубка стеклянная 6х1х1000-1200</td>
                        <td>0,04</td>
                    </tr>
                    <tr>
                        <td>Трубка стеклянная 9х1х1000-1100</td>
                        <td>0,06</td>
                    </tr>
                    <tr>
                        <td>Трубка стеклянная 12х1х1000-1200</td>
                        <td>0,08</td>
                    </tr>
                    <tr>
                        <td>Трубка стеклянная 15х1х1000-1200</td>
                        <td>0,09</td>
                    </tr>
                    <tr>
                        <td>Трубка стеклянная 16х1,5х1000-1200</td>
                        <td>0,15</td>
                    </tr>
                </tbody>
            </table>
            <br />

            <div className='secTable'>
                <p>Физические характеристики стекла марки СЛ 97-1:</p>
                <br />
            </div>
            <table>
                <tbody>
                    <tr>
                        <th>Параметр</th>
                        <th>Значение</th>
                    </tr>
                    <tr>
                        <td>Температура размягчения при вязкости μ = 1010 Па٠с, °C</td>
                        <td>550 ± 10</td>
                    </tr>
                    <tr>
                        <td>Температура размягчения при вязкости μ = 106,7 Па٠с, °C</td>
                        <td>675 ± 10</td>
                    </tr>
                    <tr>
                        <td>Рабочая температура, °C</td>
                        <td> ≈ 900    </td>
                    </tr>
                    <tr>
                        <td>Вязкость при рабочей температуре, Па٠с</td>
                        <td>103,0 – 103,5</td>
                    </tr>
                </tbody>
            </table>
            <div>
             <Link to='/StekloSmotrovoe' style={{ textDecoration: 'none' }}><li className='price_butt_back'>Назад</li></Link>
        </div>
        </div>

    );
};

export default GlassTubeSL;