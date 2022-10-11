import React, { useEffect, useState } from "react";
import { HeaderContent } from "semantic-ui-react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './main.css';

const LensesList = () => {
   
    const lenses = [{ name: 'Biofinity', price: '500 ₴', desc: 'Лінзи Biofinity використовуються як для денного, так і для пролонгованого носіння (до 6 діб). Термін заміни – 1 місяць.' },
    { name: 'Biofinity toric', price: '800 ₴', desc: 'Biofinity XR Toric - це силікон-гідрогелеві контактні лінзи, вироблені CooperVision для корекції астигматизму.' },
    { name: 'Airoptics Hydraglyde', price: '500 ₴', desc: 'Air Optix plus HydraGlyde - удосконалені лінзи компанії Alcon. Сучасна силікон-гідрогелева основа лінзи утворює захисний шар на поверхні лінзи, а також забезпечує достатню чистоту та зволоження.' },
    { name: 'Airoptics Hydraglyde Astigmatism', price: '895 ₴', desc: 'Торичні контактні лінзи Air Optix plus Hydraglyde for Astigmatism Ці місячні контактні лінзи виготовляються з силікон-гідрогелевого матеріалу і призначені для корекції астигматизму з доданим значенням циліндра і осі.' },
    { name: 'Pure Vision 2', price: '500 ₴', desc: 'PureVision 2 – контактні лінзи для зору щомісячної заміни Силікон-гідрогелеві контактні лінзи PureVision2 HD від виробника Bausch&Lomb використовують матеріал з високим відсотком проникнення кисню, який запобігає висиханню рогівки.' },
    { name: 'SoftLens 38', price: '750 ₴', desc: 'Soflens 38 від Bausch + Lomb – контактні лінзи для зору тримісячної заміни Гідрогелеві контактні лінзи SofLens 38 – це унікальна технологія бренду Bausch & Lomb.' },
    { name: 'Myday Coopervision', price: '940 ₴', desc: 'MyDay daily disposable є одноденними силікон-гідрогелевими контактними лінзами виробництва CooperVision. Забезпечують оптимальну проникність кисню, природну змочуваність і пропонують користувачам здорове та легке використання. Ця упаковка містить 30 лінз' },
    { name: 'Biomedics 1 day extra ', price: '850 ₴', desc: 'Biomedics 1 Day Extra - це одноденні контактні лінзи, призначені для максимально природного почуття комфорту для Ваших очей на протязі всього дня. Ці щоденні лінзи характеризуються дуже тонкими краями, завдяки яким не подразнюєтьсчя око і лінзи дуже добре переносяться. Упаковка містить 30 штук.' },
    { name: 'Dailies total 1', price: '1050 ₴', desc: 'Dailies Total1 - одноденні силікон-гідрогелеві контактні лінзи від виробника Alcon, які мають змінний вміст води. Технологія виробництва комбінує в собі класичний гідрогелевий матеріал, який містить високу кількість води, з силікон-гідрогелем, який забезпечує необхідну проникність кисню до рогівки.' },
    { name: 'Acuvue TruEye 1 day', price: '700 ₴', desc: 'Недаремно одноденні контактні лінзи 1-Day Acuvue TruEye отримали престижну нагороду TOP OPTA 2010. Крім комфорту, новий матеріал Narafilcon А забезпечує надзвичайно високий коефіцієнт пропускання кисню, що досягає 118 Dk/t.' }]
    
    return (
        <div className="lenses-list d-flex justify-content-center flex-wrap py-4">
            {lenses.map((x, i) =>
                <div className='d-flex justify-content-center align-items-center mr-2 lense-animation'>
                    <div className=" blue-glass-filter text-white d-flex align-items-center lense-container my-2 mr-2 rounded position-relative">
                        <div className="price rounded-right">{x.price}</div>
                        <img className="lense-img-container rounded" src={require(`../../assets/images/item${i + 1}.jpg`)}></img>
                        <div className="d-flex flex-column justify-content-around p-2 w-100 text-center">
                            <strong className="mb-2">{x.name}</strong>
                        </div>
                        <div className="lense-description">
                            <p>{x.desc}</p>
                        </div>
                    </div> </div>)}
        </div>
    );
};

export default LensesList;