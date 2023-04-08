import React from 'react';
import './Paronite.css'
import { Link } from 'react-router-dom';

const Paronite = () => {
    return (
        <div className='content container'>
            <div className='paroniteHeader'>
                <figcaption>
                    <img src={process.env.PUBLIC_URL + 'assets/Other/2.jpg'} alt='222' className='company_img' />
                </figcaption>
                <div className='paroniteHeaderTitle'>
                    <h1>ПРОКЛАДКИ ПАРОНИТОВЫЕ ДЛЯ УКАЗАТЕЛЕЙ УРОВНЯ ЖИДКОСТИ</h1>
                    <br />
                    <p><strong>Описание   прокладок паронитовых:</strong>
                        <br />
                        Паронитовые прокладки применяются в качестве уплотнительного элемента для герметизации фланцевых соединений в системах холодного и горячего водоснабжения, паровых и газовых системах, нефтепроводах, системах подачи кислорода и пр. В указателях уровня жидкости – паронитовая прокладка используется для герметизации соединения водоуказательное стекло – чугунная (стальная) рамка. Паронит – это листовой материал, изготовленный путем прессования резиновой смеси с добавлением асбестового волокна и специализированных добавок. Паронитовые прокладки применяются в трубопроводах с различными, в том числе и агрессивными средами в диапазонах температур от -50°С до +450°С. Для уплотнения соединений в указателях уровня используется паронит типа ПОН-Б ГОСТ 15180-86 (смотрите описание различных видов паронита ниже в разделе Классификация паронитовых прокладок).</p>
                </div>
            </div>
            <div className='paroniteSec1'>
                <h2>КУПИТЬ паронитовые прокладки в Москве в Компании Доминик за два шага:</h2>
                <br />
                <p>
                    1) Выберите способ доставки (курьерская доставка или транспортная компания);
                    <br />
                    2) Пришлите нам реквизиты вашей фирмы для выставления счета и заявку (какая требуется продукция, количество, прочие детали) на адрес info@techsteklo.ru или сообщите нам о своей потребности по телефонам:  +7 (495) 231-36-71;  +7 (495) 772-36-36.
                </p>
            </div>
            <div className='PriceBody'>
                <h2>Цены на паронитовые прокладки различных размеров:</h2>
                <table>
                    <tbody>
                        <tr>
                            <th>Размер прокладки с прорезью</th>
                            <th>Размер прорези, мм</th>
                        </tr>
                        <tr>
                            <td>140х34х1,5</td>
                            <td>122х18</td>
                        </tr>
                        <tr>
                            <td>160х34х1,5</td>
                            <td>142х18</td>
                        </tr>
                        <tr>
                            <td>190х34х1,5</td>
                            <td>172х18</td>
                        </tr>
                        <tr>
                            <td>220х34х1,5</td>
                            <td>202х18</td>
                        </tr>
                        <tr>
                            <td>250х34х1,5</td>
                            <td>232х18</td>
                        </tr>
                        <tr>
                            <td>280х34х1,5</td>
                            <td>262х18</td>
                        </tr>
                        <tr>
                            <td>320х34х1,5</td>
                            <td>302х18</td>
                        </tr>
                        <tr>
                            <td>340х34х1,5</td>
                            <td>322х18</td>
                        </tr>
                        <tr>
                            <td>370х34х1,5</td>
                            <td>352х18</td>
                        </tr>
                        <tr>
                            <td>400х34х1,5</td>
                            <td>382х18</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className='paroniteSec2'>
                <br />
                <h2>Условия эксплуатации паронитовых прокладок:</h2>
                <br />
                <p>
                    Температура рабочей среды: от -50 до 450°С;
                    <br />
                    Температура окружающей среды: -60 до +50°С;
                    <br />
                    Рабочая среда: вода, жидкие среды, нефтепродукты, аммиак;
                    <br />
                    Климатическое исполнение и категория размещения по ГОСТ 15150-69:  У3, Т3, УХЛ4;
                    <br />
                </p>

                <h2>Технические данные прокладок паронитовых:</h2>
                <br />
                <p>
                    Все прокладки изготавливаются из листов толщиной от 0,4 мм до 6 мм.
                    <br />
                    Плотность паронита составляет г/см3 : 1,8-2,0;
                    <br />
                    Поверхность паронита и прокладок из него должна быть ровной без разрывов, складок, задиров и надломов, вздутий, раковин и посторонних включений;
                    <br />
                    Допускается незначительная ворсистость и незначительная непрокрашенность асбеста на поверхности и по кромкам;
                    <br />
                    Прокладки вырубают из листов паронита, при этом паронит не должен расслаиваться и крошиться.
                    <br />
                </p>
                <br />
                <h2>Регламентирующие документы:</h2>
                <br />
                <p>
                    ГОСТ 15180-86. Прокладки плоские эластичные. Основные параметры и размеры;
                    <br />
                    ГОСТ 481-80 Паронит и прокладки из него. Технические условия (с Изменениями N 1-5, с Поправкой);
                    <br />
                </p>

                <h2>
                    Производители паронитовых прокладок:
                </h2>
                <br />
                <p>
                    Место производства: Россия, Китай;
                </p>
                <br />
                <h2>
                    Типы паронитовых прокладок:
                </h2>
                <br />
                <p>
                    <strong> Область применения уплотнительных элементов определяется в зависимости от вида паронита (согласно ГОСТ 481-80):</strong>
                    <br />

                    <strong>ПОН</strong> – паронит общего назначения. Используемые среды: пресная перегретая вода, пар, растворы солей, аммиак, жидкий кислород, азот, нефтепродукты.
                    <br />
                    <strong>ПОН-А</strong> – предназначен для парообразной, жидкой среды, в том числе для аммиакосодержащих соединений а также для конструкций, транспортирующих аммиачные соединения.
                    <br />
                    <strong>ПОН-Б</strong> – возможно перемещение азотсодержащих веществ, кислорода в жидком виде, этилового спирта.
                    <br />
                    <strong> ПОН-В</strong> – паронитовые уплотнители применяются для герметизации конструкций, качающих нефтепродукты, антифриз, тосол, воздухо-топливные составы.
                    <br />
                    <strong>ПМБ, ПМБ-1</strong> – паронит маслобензостойкий. Данный паронит выдерживает давление до 15МПа. Применяется в работе с такими средами, как масла, нефтепродукты. Прокладки из ПМБ-1 не являются коррозионно-активным при работе с алюминиевыми анодированными сплавами, латунью и оцинкованной сталью с хромовым пассивированием. Сохраняют работоспособность в условиях тропического климата без применения фунгицида при изготовлении паронитов.
                    <br />
                    <strong> ПК</strong> – паронит кислостойкий. Используемая среда: кислоты, щелочи, окислители, органические растворители. Данный вид паронита используется для неподвижных гладких соединений; фланцев типа «шип-паз» и «выступ-впадина»; спирально навитых прокладок в роли мягкого наполнителя.
                    <br />
                    <strong>ПА</strong> - паронит армированный сеткой. Данный вид паронита подходит для неподвижных гладких соединений, давление которых не превышает 4 Мпа (40 кгс/см²); фланцевых соединений типа «шип-паз» и «выступ-впадина». Имеет повышенную механическую прочность, но для химических агрессивных сред не подходит.
                    <br />
                    <strong>ПЭ</strong> - паронит электролизерный. Используемая среда: щелочи концентрацией 300-400 г/дм3, водород, кислород. Данный вид паронита используется при уплотнении ячеек, которые собираются в батарею в электролизерах, для обеспечения электрической изоляции ячеек друг от друга.
                </p>
                <br />
            </div>

            <div className='paroniteSec3'>
                <h2>
                    Основные размеры паронитовых прокладок для водоуказательных стекол:
                </h2>
                <br />
                <figcaption>
                    <img src={process.env.PUBLIC_URL + 'assets/Other/3.jpg'} alt='222' className='paroniteImg' />
                </figcaption>
                <table>
                    <tbody>
                        <tr>
                            <th>Длина прокладки, L, мм</th>
                            <th>Ширина прокладки, B, мм</th>
                            <th>Длина паза, l, мм</th>
                            <th>Ширина паза, b, мм</th>
                            <th>Толщина прокладки, мм</th>
                        </tr>
                        <tr>
                            <td>115</td>
                            <td>34</td>
                            <td>98</td>
                            <td>18</td>
                            <td>1,5</td>
                        </tr>
                        <tr>
                            <td>140</td>
                            <td>28</td>
                            <td>122</td>
                            <td>18</td>
                            <td>1,5</td>
                        </tr>
                        <tr>
                            <td>140</td>
                            <td>34</td>
                            <td>122</td>
                            <td>18</td>
                            <td>1,5</td>
                        </tr>
                        <tr>
                            <td>160</td>
                            <td>28</td>
                            <td>142</td>
                            <td>18</td>
                            <td>1,5</td>
                        </tr>
                        <tr>
                            <td>160</td>
                            <td>34</td>
                            <td>142</td>
                            <td>18</td>
                            <td>1,5</td>
                        </tr>
                        <tr>
                            <td>190</td>
                            <td>28</td>
                            <td>174</td>
                            <td>18</td>
                            <td>1,5</td>
                        </tr>
                        <tr>
                            <td>220</td>
                            <td>28</td>
                            <td>202</td>
                            <td>18</td>
                            <td>1,5</td>
                        </tr>
                        <tr>
                            <td>220</td>
                            <td>34</td>
                            <td>202</td>
                            <td>18</td>
                            <td>1,5</td>
                        </tr>
                        <tr>
                            <td>250</td>
                            <td>28</td>
                            <td>232</td>
                            <td>18</td>
                            <td>1,5</td>
                        </tr>
                        <tr>
                            <td>250</td>
                            <td>34</td>
                            <td>232</td>
                            <td>18</td>
                            <td>1,5</td>
                        </tr>
                        <tr>
                            <td>280</td>
                            <td>28</td>
                            <td>262</td>
                            <td>18</td>
                            <td>1,5</td>
                        </tr>
                        <tr>
                            <td>280</td>
                            <td>34</td>
                            <td>262</td>
                            <td>18</td>
                            <td>1,5</td>
                        </tr>
                        <tr>
                            <td>320</td>
                            <td>34</td>
                            <td>302</td>
                            <td>18</td>
                            <td>1,5</td>
                        </tr>
                        <tr>
                            <td>340</td>
                            <td>28</td>
                            <td>322</td>
                            <td>18</td>
                            <td>1,5</td>
                        </tr>
                        <tr>
                            <td>340</td>
                            <td>34</td>
                            <td>322</td>
                            <td>18</td>
                            <td>1,5</td>
                        </tr>
                    </tbody>
                </table>
                <br />
                <h2>Схемы установки паронитовой прокладки указателя уровня жидкости:</h2>
                <br />
                <strong>Установка паронитовой прокладки указателя уровня жидкости с водоуказательным стеклом:</strong>
                <br />
                <figcaption>
                    <img src={process.env.PUBLIC_URL + 'assets/Other/4.jpg'} alt='222' className='paroniteImg' />
                </figcaption>
                <br />
                <p>
                    1. Прокладка; 2. Пластина слюдяная (слюда по ГОСТ 13752-86); 3. Гайка; 4. Стекло гладкое ГОСТ 1663-81; 5. Стекло рифленое ГОСТ 1663-81;
                    <br />
                    Прокладки паронитовые (1) устанавливаются как со смотровой, так и с противоположной ей поверхности стекла, перед поставкой рекомендуется протереть уплотнение сухим графитом или тальком.
                    <br />
                    Шероховатость уплотнительных поверхностей деталей под прокладки должна быть по Ra ≤ 12,5 мкм;
                    <br />
                    Размеры стекол (4 или 5), должны быть равны соответст­ву­ющим размерам прокладки (1). Размеры пластин слюдяных (2), должны быть равны соответст­ву­ющим размерам прокладки (1);
                    <br />
                    Затяжку гаек (3) производить динамометрическим ключом. Расчетное удельное дав­ление на прокладку при начальной затяжке шпилек или во время работы должно быть не менее  qmin = 100 кгс/см2 и не более qmax = 1500 кгс/см2.
                    <br />
                </p>
                <h2>Установка паронитовой прокладки указателя уровня жидкости со слюдяными пластинами:</h2>
                <br />
                <figcaption>
                    <img src={process.env.PUBLIC_URL + 'assets/Other/5.jpg'} alt='222' className='paroniteImg' />
                </figcaption>
                <br />
                <p>
                    1. Прокладка; 2. Пластины слюдяные (слюда по ГОСТ 13752-86); 3. Гайка.
<br />
                    Перед установкой паронитовой  прокладки (1), посадочное место очистить от пыли, грязи, исполь­зован­ного прокладочного материала;
                    <br />
                    Шероховатость уплотнительных поверхностей деталей под прокладки должна быть по Ra ≤ 12,5 мкм;
                    <br />
                    Общая толщина пакета слюдяных пластин (2) в каждой смотровой щели должна быть равна 1±0,1 мм (7÷8 шт.);
                    <br />
                    Размеры слюдяных пластин (2) должны быть равны соответст­ву­ющим размерам прокладки (1) с пред. откл. ±1 мм.
                    <br />
                    При замене прокладки (1) необходимо также осуществить замену использованных слюдяных пластин (2) на новые.
                    <br />
                    Затяжка гаек (3) производится динамометрическим ключом моментом затяжки М. Расчетное удельное дав­ление на прокладку при начальной затяжке шпилек или во время работы должно быть не менее  qmin = 100 кгс/см2 и не более qmax = 1500 кгс/см2.
                    <br />
                </p>
            </div>
            <div>
                <Link to='/Other' style={{ textDecoration: 'none' }}><li className='price_butt_back'>Назад</li></Link>
            </div>

        </div>
    );
};

export default Paronite;