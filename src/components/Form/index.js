import React, { useState, useRef } from 'react';
import {TextField, Button } from '@mui/material/';
import emailjs from '@emailjs/browser';

const Form = () => {
  const form = useRef();
  const [name, setName] = useState("")
  const [message, setMessage] = useState("")
  const [email, setEmail] = useState("")

  const HandleSubmit = (e) => {
    e.preventDefault();

      emailjs.sendForm('service_prx1qkr', 'template_x8zmeal', form.current, '6HMNKbrBqDfm-dMBG')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  }

  return(
    <form ref={form} onSubmit={HandleSubmit}>
    <h4>Hable con nosotros</h4>
      <TextField 
        id="nombre"
        label="Nombre"
        name="user_name"
        variant="outlined"
        fullWidth
        margin='normal'
        value={name}
        onChange={(e) => {
          setName(e.target.value)}}
        />

      <TextField 
        id="email"
        label="Email"
        name="user_email" 
        variant="outlined" 
        fullWidth
        margin='normal'
        value={email}
        onChange={(e) => {
          setEmail(e.target.value)}}
        />

      <TextField 
        id="mensaje"
        label="Mensaje"
        variant="outlined"
        name="message"
        fullWidth
        margin='normal'
        value={message}
        onChange={(e) => {
          setMessage(e.target.value)}}
        />

      <Button variant="contained" type='submit' value="Send">Enviar Mensaje</Button>
    </form>
  )
}

export default Form