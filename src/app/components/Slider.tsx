import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel } from "react-bootstrap";
import './main.css';

const Slider = () => {

    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex: any, e: any) => {
        setIndex(selectedIndex);
    };


    return (
        <div className="rounded description d-flex flex-wrap justify-content-center m-4" style={{background: '#F5F5F5'}}>
            <div className="slider-desc">
                {index === 2 && <p className="p-4">Biofinity щомісячні контактні лінзи
                    Biofinity - це силікон-гідрогелеві контактні лінзи з щомісячним графіком заміни від виробника CooperVision. Їх спеціальний матеріал поєднує в
                    собі високий вміст води з чудовою проникністю кисню. Ці контактні лінзи постачаються в упаковках по 3 лінзи.
                    Coopervision aquaform технологія значок Biofinity є особливими технологією Aquaform® Technology.
                    Ця інноваційна технологія унікальним чином поєднує матеріали та замикає воду в лінзі.
                    Aquaform® забезпечує високу проникність кисню, зберігаючи лінзи вологими, м’якими і гнучкими.
                    Coopervision комфорт значок Збалансоване поєднання якісного матеріалу,
                    вдосконаленого дизайну та чудових оптичних властивостей дають високодихаючі лінзи, які будуть відчуватись комфортно протягом дня.
                    Coopervision тривале носіння значок Щомісячні контактні лінзи Biofinity призначені для щоденного носіння,
                    але також підходять для нерегулярних випадків та спання і тривалого носіння.
                    Їх можна носити безперервно протягом 30 днів та 29 ночей. Однак цей спосіб носіння завжди повинен спочатку схвалити лікар-окуліст.</p>}
                {index === 1 && <p className="p-4">Більш чіткий зір
                    Новинкою на ринку є контактні лінзи PureVision 2, що випускаються фірмою Bausch and Lomb. Інноваційниою перевагою цих силікон-гідрогелевих лінз є, насамперед,
                    поліпшені оптичні властивості, які оцінять в першу чергу користувачі з недоліком контрастної чутливості, що може проявлятися нечітким зором в умовах слабкого освітлення. Тому PureVision 2 рекомендуються насамперед для водіїв і спортсменів.
                    Зручність
                    PureVision 2 HD - одні з найбільш тонких контактних лінз, доступних на ринку. Завдяки технології ComfortMoist, поверхня лінзи рясно зволожена, що забезпечує високу комфортність протягом усього дня. Незважаючи на виняткову тонкість, лінзи дуже зручні
                    у користуванні.
                    Режим носіння
                    PureVision 2 призначені як для звичайного носіння зі зняттям на ніч, так і для тривалого користування, коли їх можна не знімати з очей протягом 30 днів і 29 ночей.
                    Однак про цей спосіб носіння слід проконсультуватися з фахівцем по зору.

                    Примітка: коробка з контактними лінзами PureVision 2 має два дизайни - один з надписом "HD" (у нижньому правому кутку) та інший без надпису "HD".
                    Обидва варіанти упаковки мають всередині абсолютно ідентичні лінзи, різниця полягає виключно у дизайні упаковки.</p>}
                {index === 0 && <p className="p-4">Контактні лінзи одномісячної заміни перевершують усі аналоги завдяки унікальній технології SmartShield, що очищає поверхню лінзи,
                    та зволоженого матеріалу HydraGlyde, що дозволяє відчути максимальний рівень комфорту. Термін заміни - 1 місяць. Радіус кривизни – 8,6. Діаметр – 14,2.</p>}
            </div>
            <div className="d-flex justify-content-center p-4 slider-desc">
                <div className="slider-container ">
                    <Carousel onSelect={handleSelect} interval={null}>
                        <Carousel.Item id='1'>
                            <img
                                className="d-block w-50 carousel-img"
                                src={require('../../assets/images/slider1.jpg')}
                                alt="First slide"
                            />
                            <Carousel.Caption className="blue-text  mb-4">
                                <h3>Air Optics</h3>
                                {/* <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item id='2'>
                            <img
                                className="d-block w-50 carousel-img"
                                src={require('../../assets/images/slider2.jpg')}
                                alt="Second slide"
                            />

                            <Carousel.Caption className=" blue-text  mb-4">
                                <h3>Pure vision</h3>
                                {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item id='3'>
                            <img
                                className="d-block w-50 carousel-img"
                                src={require('../../assets/images/slider3.jpg')}
                                alt="Third slide"
                            />

                            <Carousel.Caption className=" blue-text mb-4">
                                <h3>Biofinity</h3>
                                {/* <p>
                                    Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                                </p> */}
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                </div>
            </div>
        </div>
    );
};

export default Slider;