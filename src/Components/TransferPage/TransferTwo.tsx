import React from 'react';
import { Link } from 'react-router-dom';
import TransferImg from './TransferGallery';

const TransferTwo = () => {
    return (
        <div className='content container'>
        <div className='transfer'>
            <div className='transfer_title'>
                Условия поставки при Самовывозе:
            </div>
            <div className='transfer_body'>
                <br />
                Срок действия счета 5 дней. Согласование возможности оплаты просроченного счета обязательно. По истечении срока действия счета Поставщик может изменить условия поставки товара (в том числе цены товара) без предварительного уведомления покупателя.
                <br />
                <strong> Въезд на территорию офиса и склада легковых и грузовых машин бесплатный.</strong>
                <br />
                <strong>Адрес офиса и склада: 127576 г.Москва, ул. Новгородская д.1. (м. Алтуфьево)</strong>
                <br />
                <hr />
                Для вывоза товара Покупатель должен приехать в нашу компанию за час до окончания рабочего времени:
                <br />
                понедельник - четверг с  9.00 до 17.00;
                <br />
                пятница с 9.00 до 16.30;
                <br />
                предпраздничный день  с 9.00 до 15.00.
                <br />
                <strong> Внимание!</strong> Проезд фур и длинномеров на территорию склада запрещен администрацией офисного комплекса до 19.30.  При необходимости въезда на территорию комплекса большегрузных машин необходимо согласовывать данный вопрос с менеджером по продажам и транспортным отделом.
                <hr />
                Перегрузка товара погрузчиком производится за счет покупателя.
                <br />
                При необходимости мы можем изготовить деревянные (фанерные) ящики и для отправки трубопроводной арматуры. Стоимость ящиков оговаривается с менеджером по продажам отдельно.
                <br />
                При использовании для сборки и упаковки товара паллет - каждое паллетоместо оплачивается Покупателем в размере 200 руб.
                <br />
                Товар отгружается только при наличии доверенности с оригинальной печатью и паспорта, согласно ст. 185, 187 ГК РФ. При отсутствии оригинала доверенности товар не отпускается. Просьбы отгрузить товар по факсимильной доверенности Поставщиком не рассматриваются.
                <br />
                <strong>Условия упаковки хрупкого товара.</strong>
                <br />
                Технические стекла (трубки кварцевые) мы упаковываем в деревянные ящики или в гофрокороба из многопрофильного картона, а в качестве наполнителя используем пенопласт, бумагу крафт и пузырчатую пленку.
                <br />
                <br />
                <strong> Стандартные размеры гофрокоробов:</strong>
                <hr />
                1100мм х 100мм х 100мм
                <hr />
                1100мм х 150мм х 150мм
                <hr />
                1600мм х 100мм х 100мм
                <hr />
                1600мм х 150мм х 150мм
                <hr />
                <br />
                <strong>  Высота стандартного ящика - 15 сантиметров. Длина ящика определяется длиной трубок и может быть от одного до трех метров. Стоимость ящика зависит только от его ширины:</strong>
                <hr />
                Ящик шириной 0,1 - 0,15 метра
                <hr />
                Ящик шириной 0,2 - 0,45 метра
                <hr />
                Ящик шириной 0,5 - 0,60 метра
                <hr />
                Требуемое количество ящиков оговаривается с менеджером по продажам.
                Для труб диаметром более 9 см стоимость ящика оговаривается отдельно.
                <hr />
                <br />
                <TransferImg />
                <br />
                <div className='nav_button'>
                    <Link to='/transfer' style={{ textDecoration: 'none' }}><li className='nav_butt_oneTransfer'>Назад</li></Link>
                </div>
            </div>
        </div>
        </div>
    );
};

export default TransferTwo;