import React from 'react';
import { Link } from 'react-router-dom';

const GlassC37 = () => {
    return (
        <div className='content container'>
            <div>
                <h2>
                    ТРУБКА ИЗ СТЕКЛА МАРКИ С37-2 (CORNING 7070)
                </h2>
                <br />
                <strong>Описание   трубки из стекла (марка стекла С37-2):</strong>
                <br />
                <p>Трубка из стекла марки С37-2 - боросиликатное стекло. Импортный аналог - стекло corning 7070 (корнинг 7070). Это стекло сплавляется с вольфрамом и относится к вольфрамовой группе электровакуумных стекол. Стекло используется для изготовления электровакуумных приборов и неоновой рекламы. Благодаря наилучшим из всех стекол диэлектрическим свойствам - стекло corning 7070 (корнинг 7070) используется для изготовления SMP (subminiature push-on) соединителей. Соединители SMP применяются в сложных многофункциональных СВЧ- модулях с высокой плотностью компоновки аэронавигационного и аэрокосмического назначения, в активных фазированных решетках, радарах и других изделиях специального назначения. Трубки из стекла С37–2 изготавливаются в соответствии с ТУ 11-ТХ0.735.073ТУ-84, а капилляры и штабики в соответствии с ТУ 11-ТХ0.735.051ТУ-89. Стекло в массе окрашено в желтый цвет. </p>
                <br />

            </div>
            <div className='secTable'>
                <strong>Размеры  трубки из стекла С37-2 (corning 7070):</strong>
                <br />
                <table >
                    <tbody>
                        <tr>
                            <td >
                                <p ><strong>Марка/размер (диаметр х толщина стенки х длина), &nbsp;мм</strong></p>
                            </td>
                            <td >
                                <p ><strong>Масса, кг</strong></p>
                            </td>

                        </tr>
                        <tr>
                            <td >
                                <p>Трубка 17х(3-4)х1100</p>
                            </td>
                            <td >
                                <p >0,31</p>
                            </td>

                        </tr>
                        <tr>
                            <td >
                                <p>Трубка 18х(3-4)х1100</p>
                            </td>
                            <td >
                                <p >0,32</p>
                            </td>

                        </tr>
                        <tr>
                            <td >
                                <p>Трубка 19х(3-4)х1100</p>
                            </td>
                            <td >
                                <p >0,36</p>
                            </td>

                        </tr>
                        <tr>
                            <td >
                                <p>Трубка 20х(3-4)х1100</p>
                            </td>
                            <td >
                                <p >0,39</p>
                            </td>

                        </tr>
                    </tbody>
                </table>
                <br />
                <p>Физические характеристики стекла С37-2 (corning 7070):</p>
                <br />
                <table >
                    <tbody>
                        <tr>
                            <td >
                                <p><strong>&nbsp; Физические свойства</strong></p>
                            </td>
                            <td >
                                <p><strong>Размерность</strong></p>
                            </td>
                            <td >
                                <p><strong>Значение</strong></p>
                            </td>
                        </tr>
                        <tr>
                            <td >
                                <p >Максимальная рабочая температура:</p>
                            </td>
                            <td >
                                <p>°С</p>
                            </td>
                            <td >
                                <p>590</p>
                            </td>
                        </tr>
                        <tr>
                            <td >
                                <p >Термостойкость</p>
                            </td>
                            <td >
                                <p>°С</p>
                            </td>
                            <td >
                                <p>600</p>
                            </td>
                        </tr>
                        <tr>
                            <td >
                                <p >Диэлектрическая проницаемость</p>
                            </td>
                            <td >
                                <p>ε</p>
                            </td>
                            <td >
                                <p>4</p>
                            </td>
                        </tr>
                        <tr>
                            <td >
                                <p >Тангенс диэлектрических потерь</p>
                            </td>
                            <td >
                                <p>tgδ*10<sup>-4</sup></p>
                            </td>
                            <td >
                                <p>6</p>
                            </td>
                        </tr>
                        <tr>
                            <td >
                                <p >Удельное электросопротивление</p>
                            </td>
                            <td >
                                <p>ом*см</p>
                            </td>
                            <td >
                                <p>25°С, &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 10<sup>17 </sup></p>

                                <p><sup>&nbsp;&nbsp;</sup>250°С, &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;10<sup>11 </sup></p>

                                <p>350°С, &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;10<sup>7</sup></p>
                            </td>
                        </tr>
                        <tr>
                            <td >
                                <p >Коэффициент расширения</p>
                            </td>
                            <td >
                                <p>α*10<sup>-2</sup></p>
                            </td>
                            <td >
                                <p>37</p>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <br />

            </div>
            <div>
             <Link to='/StekloSmotrovoe' style={{ textDecoration: 'none' }}><li className='price_butt_back'>Назад</li></Link>
        </div>
        </div>
    );
};

export default GlassC37;