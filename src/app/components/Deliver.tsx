import React, { useEffect, useState } from "react";
import { HeaderContent } from "semantic-ui-react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './header.css';
import { ArrowRight, CreditCard, MessageCircle, Monitor, Package } from "react-feather";
import { Fade } from "react-awesome-reveal";

const Deliver = () => {
    return (
        <Fade duration={1500} direction={'up'} fraction={0.5} triggerOnce={true}>
            <div className="d-flex flex-column justify-content-center align-items-center p-4 m-4">
                <div className="d-flex flex-column justify-content-center align-items-center p-4">
                    <h3>Як замовити лінзи?</h3>
                    <div className="d-flex align-items-center mt-2" style={{ gap: '5vw' }}>
                        <div className="d-flex flex-column justify-content-center align-items-center" style={{ gap: '1vw' }}>
                            <div>
                                <Monitor size={80} />
                            </div>
                            <div>
                                <p>Обрати товар на сайті та заповнити форму </p>
                            </div>
                        </div>
                        <ArrowRight size={40} />
                        <div className="d-flex flex-column justify-content-center align-items-center" style={{ gap: '1vw' }}>
                            <div>
                                <MessageCircle size={80} />
                            </div>
                            <div >
                                <p>Менеджер зв'язується з вами для підтвердження замовлення</p>
                            </div>
                        </div>
                        <ArrowRight size={40} />
                        <div className="d-flex flex-column justify-content-center align-items-center" style={{ gap: '1vw' }}>
                            <div>
                                <Package size={80} />
                            </div>
                            <div >
                                <p>Товар відправляється поштою до вказного відділення</p>
                            </div>
                        </div>
                        <ArrowRight size={40} />
                        <div className="d-flex flex-column justify-content-center align-items-center" style={{ gap: '1vw' }}>
                            <div>
                                <CreditCard size={80} />
                            </div>
                            <div >
                                <p>Ви оплачуєте товар після отримання</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fade>
    );
};

export default Deliver;