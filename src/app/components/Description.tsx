import React, { useEffect, useState } from "react";
import { HeaderContent } from "semantic-ui-react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './header.css';
import { Fade } from "react-awesome-reveal";

const Description = () => {
    return (
        <Fade cascade direction={'up'} fraction={0.2} triggerOnce={true}>
            <div className=" p-4">
                <div className="d-flex flex-column justify-content-center align-items-center description rounded m-4 ">
                    <div className="d-flex flex-column justify-content-center align-items-center blue-glass-filter rounded p-4">
                        <Fade cascade triggerOnce={true}>
                            <div className="d-flex flex-column justify-content-center align-items-center my-2">
                                <div className="blue-text pink-back  p-2 rounded mb-2">
                                    <h3>Biofinity</h3>
                                </div>
                                <div className="text-white">
                                    <p>Biofinity щомісячні контактні лінзи
                                        Biofinity - це силікон-гідрогелеві контактні лінзи з щомісячним графіком заміни від виробника CooperVision. Їх спеціальний матеріал поєднує в
                                        собі високий вміст води з чудовою проникністю кисню. Ці контактні лінзи постачаються в упаковках по 3 лінзи.
                                        Coopervision aquaform технологія значок Biofinity є особливими технологією Aquaform® Technology.
                                        Ця інноваційна технологія унікальним чином поєднує матеріали та замикає воду в лінзі.
                                        Aquaform® забезпечує високу проникність кисню, зберігаючи лінзи вологими, м’якими і гнучкими.
                                        Coopervision комфорт значок Збалансоване поєднання якісного матеріалу,
                                        вдосконаленого дизайну та чудових оптичних властивостей дають високодихаючі лінзи, які будуть відчуватись комфортно протягом дня.
                                        Coopervision тривале носіння значок Щомісячні контактні лінзи Biofinity призначені для щоденного носіння,
                                        але також підходять для нерегулярних випадків та спання і тривалого носіння.
                                        Їх можна носити безперервно протягом 30 днів та 29 ночей. Однак цей спосіб носіння завжди повинен спочатку схвалити лікар-окуліст.</p>
                                </div>
                            </div>
                        </Fade>
                        <Fade cascade triggerOnce={true}>
                            <div className="d-flex flex-column justify-content-center align-items-center my-2">
                                <div className="blue-text pink-back p-2 rounded mb-2">
                                    <h3>PureVision 2</h3>
                                </div>
                                <div className="text-white">
                                    <p>
                                        Більш чіткий зір
                                        Новинкою на ринку є контактні лінзи PureVision 2, що випускаються фірмою Bausch and Lomb. Інноваційниою перевагою цих силікон-гідрогелевих лінз є, насамперед,
                                        поліпшені оптичні властивості, які оцінять в першу чергу користувачі з недоліком контрастної чутливості, що може проявлятися нечітким зором в умовах слабкого освітлення. Тому PureVision 2 рекомендуються насамперед для водіїв і спортсменів.
                                        Зручність
                                        PureVision 2 HD - одні з найбільш тонких контактних лінз, доступних на ринку. Завдяки технології ComfortMoist, поверхня лінзи рясно зволожена, що забезпечує високу комфортність протягом усього дня. Незважаючи на виняткову тонкість, лінзи дуже зручні
                                        у користуванні.
                                        Режим носіння
                                        PureVision 2 призначені як для звичайного носіння зі зняттям на ніч, так і для тривалого користування, коли їх можна не знімати з очей протягом 30 днів і 29 ночей.
                                        Однак про цей спосіб носіння слід проконсультуватися з фахівцем по зору.

                                        Примітка: коробка з контактними лінзами PureVision 2 має два дизайни - один з надписом "HD" (у нижньому правому кутку) та інший без надпису "HD".
                                        Обидва варіанти упаковки мають всередині абсолютно ідентичні лінзи, різниця полягає виключно у дизайні упаковки.</p>
                                </div>
                            </div>
                        </Fade>
                        <Fade cascade triggerOnce={true}>
                            <div className="d-flex flex-column justify-content-center align-items-center my-2">
                                <div className="blue-text pink-back p-2 rounded mb-2">
                                    <h3>Air Optics</h3>
                                </div>
                                <div className="text-white">
                                    <p>
                                    Контактні лінзи одномісячної заміни перевершують усі аналоги завдяки унікальній технології SmartShield, що очищає поверхню лінзи, 
                                    та зволоженого матеріалу HydraGlyde, що дозволяє відчути максимальний рівень комфорту. Термін заміни - 1 місяць. Радіус кривизни – 8,6. Діаметр – 14,2.</p>
                                </div>
                            </div>
                        </Fade>
                    </div>
                </div>
            </div>
        </Fade>
    );
};

export default Description;