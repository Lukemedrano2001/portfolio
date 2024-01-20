import React from 'react';
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Snackbar } from '@mui/material';

import {
    Container,
    Wrapper,
    Title,
    Desc,
    ContactForm,
    ContactTitle,
    ContactInput,
    ContactInputMessage,
    ContactButton
} from './ContactStyled';




const ContactSection = () => {

  // Hooks
    const [open, setOpen] = React.useState(false);
    const form = useRef();

    const handleSubmit = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_vcc2yv5', 'template_p5p542g', form.current, '_zlzxhpitbU1yWB3p')
        .then((result) => {
            setOpen(true);
            form.current.reset();
        }, (error) => {
            console.log(error.text);
        });
    }

    return (
        <Container>
        <Wrapper>
            <Title>Contato</Title>
            <Desc>
            Sinta-se à vontade para entrar em contato comigo em caso de dúvidas e outros relacionados.
            </ Desc>
            <ContactForm ref={form} onSubmit={ handleSubmit }>
            <ContactTitle>Mande um e-mail 🚀</ ContactTitle>
            <ContactInput placeholder="Seu e-mail" name="from_email" />
            <ContactInput placeholder="Seu Nome" name="from_name" />
            <ContactInput placeholder="Assunto" name="subject" />
            <ContactInputMessage placeholder="Mensagem" rows="4" name="message" />
            <ContactButton type="submit" value="Enviar" />
            </ ContactForm>
            <Snackbar
            open={open}
            autoHideDuration={3000}
            onClose={() => setOpen(false)}
            message="E-mail enviado com sucesso!"
            severity="success"
            />
        </ Wrapper>
        </ Container>
    )
}

export default ContactSection