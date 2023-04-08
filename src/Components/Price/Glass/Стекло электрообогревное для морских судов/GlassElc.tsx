import React from 'react';
import { Link } from 'react-router-dom';

const GlassElc = () => {
    return (
        <div className='content container'>
            <div>
                <h2>СТЕКЛО ЭЛЕКТРООБОГРЕВНОЕ ДЛЯ МОРСКИХ СУДОВ ГОСТ 30826-2001</h2>
                <br />
                <strong>Описание   - Стекло электрообогревное для морских судов ГОСТ 30826-2001:</strong>
                <br />
                <p>Стекло электрообогревное ТУ 5923-005-34299980-2004, ГОСТ 30826-2001 предназначено для остекления морского транспорта. Стекло состоит из двух листов закаленного силикатного стекла толщиной 15 мм и 4 мм. На внутренней поверхности стекла 4 мм нанесено светопрозрачное электропроводящее покрытие, которое обеспечивает нагрев стекла при подаче электрического напряжения. Листы стекла соединены между собой в триплекс посредством полимерной фото-отверждаемой композиции. Электрические выводы от обогреваемого стекла подпаяны к электрическим разъемам, установленным на конической подставке, приклеенной непосредственно к стеклу.</p>
                <br />
            </div>
            <div className='secTable'>
                <strong>В таблице приведены габариты на стекла электрообогревные (ТУ 5923-005-34299980-2004, ГОСТ 30826-2001):</strong>
                <br />
                <table >
                    <tbody>
                        <tr>
                            <td>
                                <p >Габариты стекла</p>

                                <p >(высота х ширина х толщина) мм),</p>

                                <p >радиус скругления угла</p>
                            </td>
                            <td>
                                <p >Мощность,</p>

                                <p >вт</p>
                            </td>
                            <td>
                                <p >Примечание</p>
                            </td>
                            <td>
                                <p >Сопротивление</p>

                                <p >элемента, ом</p>
                            </td>

                        </tr>
                        <tr>
                            <td>
                                <p>574-578х414-418х21</p>
                            </td>
                            <td>&nbsp;</td>
                            <td>
                                <p >127, 220 в</p>
                            </td>
                            <td>&nbsp;</td>

                        </tr>
                        <tr>
                            <td>
                                <p>724-728х514-518х21</p>
                            </td>
                            <td>
                                <p >&nbsp; &nbsp; &nbsp; 308+-50</p>
                            </td>
                            <td>
                                <p >220 в</p>
                            </td>
                            <td>
                                <p >157+-30</p>
                            </td>

                        </tr>
                        <tr>
                            <td>
                                <p>800х560х18 R=60мм</p>
                            </td>
                            <td>&nbsp;</td>
                            <td>
                                <p >220 в</p>
                            </td>
                            <td>&nbsp;</td>

                        </tr>
                        <tr>
                            <td>
                                <p>800х560х21 R=60мм</p>
                            </td>
                            <td>&nbsp;</td>
                            <td>
                                <p >220 в</p>
                            </td>
                            <td>&nbsp;</td>

                        </tr>
                        <tr>
                            <td>
                                <p>814-818х574-578х21</p>
                            </td>
                            <td>&nbsp;</td>
                            <td>
                                <p >220 в</p>
                            </td>
                            <td>&nbsp;</td>

                        </tr>
                        <tr>
                            <td>
                                <p>814-818х814-818х21</p>
                            </td>
                            <td>
                                <p >&nbsp; &nbsp; &nbsp; 560+-80</p>
                            </td>
                            <td>&nbsp;</td>
                            <td>
                                <p >86 &nbsp;+-15</p>
                            </td>

                        </tr>
                        <tr>
                            <td>
                                <p>910х910х21</p>
                            </td>
                            <td>&nbsp;</td>
                            <td>&nbsp;</td>
                            <td>&nbsp;</td>

                        </tr>
                        <tr>
                            <td>
                                <p>912х612х16 R=47мм</p>
                            </td>
                            <td>&nbsp;</td>
                            <td>
                                <p >380 в</p>
                            </td>
                            <td>&nbsp;</td>

                        </tr>
                        <tr>
                            <td>
                                <p>1200х764х16</p>
                            </td>
                            <td>&nbsp;</td>
                            <td>&nbsp;</td>
                            <td>&nbsp;</td>

                        </tr>
                        <tr>
                            <td>
                                <p>1420х1200х15</p>
                            </td>
                            <td>&nbsp;</td>
                            <td>&nbsp;</td>
                            <td>&nbsp;</td>

                        </tr>
                    </tbody>
                </table>
            </div>
            <div>
                <strong>Технические данные стекла электрообогревного (ТУ 5923-005-34299980-2004, ГОСТ 30826-2001):</strong>
                <br />
                <ul>
                    <li>Стекло имеет сертификат соответствия и электробезопасности по классам защиты по ГОСТ 30826-2001, свидетельство о признании Российского Морского Регистра Судоходства N 04.00195.120 от 28.12.2004;</li>
                    <li>Класс защиты - P4A;</li>
                    <li>Напряжение сети - 220 в;</li>
                    <li>Гарантийный срок работы нагревательного элемента - 2 года;</li>
                    <li>Назначенный ресурс стекла составляет 10 лет при соблюдении требований по монтажу, эксплуатации, транспортировке и хранению. </li>
                </ul>
            </div>
            <div>
             <Link to='/StekloSmotrovoe' style={{ textDecoration: 'none' }}><li className='price_butt_back'>Назад</li></Link>
        </div>
        </div>
    );
};

export default GlassElc;