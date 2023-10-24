import React, { useState, useRef } from 'react';
import {TextField, Checkbox, FormGroup, FormControlLabel, Button } from '@mui/material/';
import {List, ListItem, ListItemButton, ListItemText, ListItemIcon } from '@mui/material/';
import emailjs from '@emailjs/browser';
import './Form.css'

const Form = () => {
  const form = useRef();
  const [name, setName] = useState("")
  const [tel, setTel] = useState("")
  const [email, setEmail] = useState("")
  const [location, setLocation] = useState("")
  const [grades, setGrades] = useState("")
  const [date, setDate] = useState("")
  const [message, setMessage] = useState("")
  const [recursos, setRecusos] = useState(["Proyector", "Pantallas digitales", "Bocinas", "Microfonos"])
  const [newRecurso, setNewRecurso] = useState("")


  const HandleSubmit = (e) => {
    e.preventDefault();

      emailjs.sendForm('service_prx1qkr', 'template_x8zmeal', form.current, '6HMNKbrBqDfm-dMBG')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

      console.log("date: ", date);
  }

  return(
    <form ref={form} onSubmit={HandleSubmit} className='formulario'>
      <h4>Solicite una visita a su institucion</h4>
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
        type='tel'
        id="telefono"
        label="Telefono"
        name="user_tel" 
        variant="outlined" 
        fullWidth
        margin='normal'
        value={tel}
        onChange={(e) => {
          setTel(e.target.value)}}
          />

      <TextField 
        type='email'
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
        id="location"
        label="Ubicacion"
        name="user_location" 
        variant="outlined" 
        fullWidth
        margin='normal'
        value={location}
        onChange={(e) => {
          setLocation(e.target.value)}}
        />
      <h4>Con cuales de estas areas cuenta su institucion</h4>
      <FormGroup>
        <FormControlLabel control={<Checkbox id='salonactividadesID' value='salonactividades'/>} label="Salón para actividades" />
        <FormControlLabel control={<Checkbox id='reunionesbajotechoID' value='reunionesbajotecho'/>} label="Reuniones bajo techo" />
        <FormControlLabel control={<Checkbox id='laboratoriosID' value='laboratorios'/>} label="¿Laboratorios? " />
      </FormGroup>

      <h4>Indique los recursos tecnologicos disponibles en su institucion</h4>
      <FormGroup>
      {recursos.map((recurso) => {
        return (
          <FormControlLabel control={<Checkbox id={recurso}/>} label={recurso} ></FormControlLabel>
        );
      })}
      </FormGroup>

      <h4>¿Qué grados estarían interesados en que visitemos? </h4>
      <TextField 
        id="grades"
        label="Grados"
        name="user_grades" 
        variant="outlined"
        fullWidth
        margin='normal'
        value={grades}
        onChange={(e) => {
          setGrades(e.target.value)}}
        />

      <TextField 
        type='date'
        id="date"
        label="Fecha"
        name="user_date" 
        variant="outlined"
        size='medium'
        margin='normal'
        InputLabelProps={{
          shrink: true,
        }}
        value={date}
        onChange={(e) => {
          setDate(e.target.value)}}
        />

      <h4>¿Por qué quieren que realicemos la visita? </h4>
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