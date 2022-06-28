import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

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
            <div className='c-info'>
                <div className='c-info-item'>
                    <img />
                    <p>348-546-2346</p>
                </div>
                
                <div className='c-info-item'>
                    <img />
                    <p>gerardolopez@gmail.com</p>
                </div>
            </div>

            <form ref={form} onSubmit={sendEmail}>
                <label>Name</label>
                <input type="text" name="user_name" />
                <label>Email</label>
                <input type="email" name="user_email" />
                <label>Message</label>
                <textarea name="message" />
                <input type="submit" value="Send" />
            </form>
        </div>
    );
};


export default Contact;
