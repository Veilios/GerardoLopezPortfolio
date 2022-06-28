import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

import email from "../../assests/envelope.png";
import phone from "../../assests/telephone.png";
import pin from "../../assests/pin.png";
import "./Contact.scss";

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        <div className='contact'>
            <div className='c-top'>
                <h2>Trabajemos Juntos</h2>
                <p>¿Viste algo que te gusta o tienes algún comentario? Hablemos.</p>
            </div>

            <div className='c-bottom'>
                <div className='c-info'>
                    <div className='c-info-item'>
                        <a className='c-item-link' href='https://www.google.com.mx/maps/place/Arandas,+Jal./@20.701286,-102.3605551,14z/data=!3m1!4b1!4m5!3m4!1s0x84294c7724fa8125:0x1710ec70ada1486!8m2!3d20.705519!4d-102.346916'>
                            <img src={pin} alt="location icon" />
                            <p>Arandas, Jalisco</p>
                        </a>
                    </div>

                    <div className='c-info-item'>
                        <a className='c-item-link' href="tel:348-149-4268">
                            <img src={phone} alt="phone icon" />
                            <p>348-149-4268</p>
                        </a>
                    </div>

                    <div className='c-info-item'>
                        <a className='c-item-link' href="https://mail.google.com/mail/?view=cm&fs=1&to=gerardolopez@gmail.com">
                            <img src={email} alt="email icon" />
                            <p>gerardolopez@gmail.com</p>
                        </a>
                    </div>
                </div>

                <form ref={form} onSubmit={sendEmail}>
                    <label>Nombre</label>
                    <input type="text" name="user_name" />
                    <label>Correo *</label>
                    <input type="email" name="user_email" />
                    <label>Mensaje</label>
                    <textarea name="message" />
                    <input className='submit' type="submit" value="Send" />
                </form>
            </div>
        </div>
    );
};


export default Contact;
