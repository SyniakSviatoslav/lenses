import React, { useEffect, useRef, useState } from "react";
import { HeaderContent } from "semantic-ui-react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './header.css';
import './main.css';
import { Button, Modal, ModalBody, ModalFooter, ModalHeader, ModalTitle } from "react-bootstrap";
import emailjs, { init, sendForm } from "emailjs-com";

const Header = () => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    init("user_xxxxxxxxxxxxxxxxxxx");
    const form = useRef<any>();

    const handleSubmit = (e: any) => {
        e.preventDefault();
        emailjs.sendForm("service_acvsl8h", "template_7mf99ww", form.current, "6A9lXEogpzsJ4WbRm").then(
            (result) => {
                alert("Message Sent Successfully");
                console.log(result.text);
            },
            (error) => {
                console.log(error.text);
            }
        );
    };

    useEffect(() => {
        let timeout;

        function myFunction() {
            timeout = setTimeout(handleShow, 35000);
        }
        myFunction()

    }, []);



    return (
        <header>
            <div style={{background: 'white'}}>
            <HeaderContent>
                <div className="d-flex justify-content-around align-items-center">
                    <h5 className="text-dark">Lenses Ukraine</h5>
                    <Button onClick={handleShow} className='order-btn'>Замовити</Button>
                </div>
            </HeaderContent>
            <Modal show={show} onHide={handleClose}>
                <form onSubmit={handleSubmit} ref={form}>
                    <ModalHeader closeButton>
                        {/* <ModalTitle>Modal heading</ModalTitle> */}
                    </ModalHeader>
                    <ModalBody>
                        <div className="container">
                            <h3 className="text-center">Залиште свої контакти для замовлення</h3>
                            <div className="form-row d-flex flex-column justify-content-center align-items-center">
                                <div className="form-group col-md-6">
                                    <label htmlFor="name">Ім'я</label>
                                    <input type="text" className="form-control" name="name" />
                                </div>
                                <div className="form-group col-md-6">
                                    <label htmlFor="phone">Номер телефону</label>
                                    <input type="number" className="form-control" name="phone" />
                                </div>
                            </div>

                        </div>
                    </ModalBody>
                    <ModalFooter className="d-flex justify-content-center align-items-center">
                        <button type="submit" className="btn btn-primary order-btn">
                            Замовити
                        </button>
                    </ModalFooter>
                </form>
            </Modal>
            </div>
        </header>
    );
};

export default Header;