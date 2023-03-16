import Carousel from 'react-bootstrap/Carousel';
import './Carousel.css'

const CarouselFadeExample = () =>  {
    return (
        <div className='carouselFT'>
        <Carousel fade>
            <Carousel.Item>
                <img
                    className="d-block w-100 "
                    src={process.env.PUBLIC_URL + '/assets/001.0a19ef9499a77d244b47349b060c602c.webp'}
                    alt="First slide"
                   
                />
                <Carousel.Caption>
                    <h3>Арматура для агрессивных средств</h3>
                    <p>Футерованные диаграфрагмовые клапаны для химических средств.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={process.env.PUBLIC_URL + '/assets/002.0a19ef9499a77d244b47349b060c602c.webp'}
                    alt="Second slide"
                />

                <Carousel.Caption>
                    <h3>Водоуказательное оборудование</h3>
                    <p>Трубки из прочного кварцевого стекла. Запорные устройства. Водоуказательные рамки. </p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={process.env.PUBLIC_URL + '/assets/003.0a19ef9499a77d244b47349b060c602c.webp'}
                    alt="Third slide"
                />

                <Carousel.Caption>
                    <h3>Регулирующая и предохранительная арматура</h3>
                    <p>
                        Регулирующие клапаны. Предохранительные клапаны. Регуляторы давления.
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={process.env.PUBLIC_URL + '/assets/004.0a19ef9499a77d244b47349b060c602c.webp'}
                    alt="Third slide"
                />

                <Carousel.Caption>
                    <h3>Техническое стекло</h3>
                    <p>
                        Водоуказательные рифленые стекла. Трубы Водоуказательные из кварцевого стекла.
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
        </div>
    );
}

export default CarouselFadeExample;