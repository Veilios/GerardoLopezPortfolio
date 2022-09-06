import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { useFormik } from 'formik';

import email from "../../assests/envelope.png";
import phone from "../../assests/telephone.png";
import pin from "../../assests/pin.png";
import "./Contact.scss";


const validate = values => {
    const errors = {};
    if (!values.user_name) {
        errors.user_name = 'Required *';
    } else if (values.user_name.length > 15) {
        errors.user_name = 'Must be 15 characters or less';
    }

    if (!values.user_email) {
        errors.user_email = 'Required *';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.user_email)) {
        errors.user_email = 'Invalid email address';
    }

    if (!values.user_message) {
        errors.user_message = 'Required *';
    } else if (values.user_message.length > 250) {
        errors.user_message = 'Must be 250 characters or less'
    }

    return errors;
};


const Contact = () => {
    const [sent, setSent] = useState(false);
    const form = useRef();

    const formik = useFormik({
        initialValues: {
            user_name: '',
            user_email: '',
            user_subject: '',
            user_message: ''
        },
        validate,
        onSubmit: values => {
            emailjs
                .sendForm(
                    process.env.REACT_APP_SERVICE_ID,
                    process.env.REACT_APP_TEMPLATE_ID,
                    form.current,
                    process.env.REACT_APP_PUBLIC_KEY
                )
                .then(
                    (result) => {
                        console.log(result.text);
                        setSent(true);
                    },
                    (error) => {
                        console.log(error.text);
                    }
                );
        }
    });

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

                {sent ? (
                    <div className='c-thanks'>
                        <h2>Gracias!</h2>
                        <p>Estare en contacto pronto!</p>
                    </div>
                ) : (
                    <form ref={form} onSubmit={formik.handleSubmit}>
                        <div className='label'>
                            <label>Nombre </label>
                            {formik.touched.user_name && formik.errors.user_name ? <div className='error'>{formik.errors.user_name}</div> : null}
                        </div>
                        <input type="text" id="user_name" name="user_name" onChange={formik.handleChange} value={formik.values.user_name} onBlur={formik.handleBlur} />

                        <div className='label'>
                            <label>Correo </label>
                            {formik.touched.user_email && formik.errors.user_email ? <div className='error'>{formik.errors.user_email}</div> : null}
                        </div>
                        <input type="email" id="user_email" name="user_email" onChange={formik.handleChange} value={formik.values.user_email} onBlur={formik.handleBlur} />

                        <div className='label'>
                            <label>Mensaje </label>
                            {formik.touched.user_message && formik.errors.user_message ? <div className='error'>{formik.errors.user_message}</div> : null}
                        </div>
                        <textarea id="user_message" name="user_message" onChange={formik.handleChange} value={formik.values.user_message} onBlur={formik.handleBlur} />

                        <input className='submit' type='submit' value="Enviar" />
                    </form>
                )}
            </div>
        </div>
    );
};


export default Contact;
