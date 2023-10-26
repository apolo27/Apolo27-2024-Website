import React, { useState, useRef } from 'react';
import {TextField, Checkbox, FormGroup, FormControlLabel, Button} from '@mui/material/';
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

  const [salonActividadesChecked, setSalonActividadesChecked] = useState(false)
  const [bajoTechoChecked, setBajoTechoChecked] = useState(false)
  const [labsChecked, setLabsChecked] = useState(false)

  const [recurso1, setRecurso1] = useState(false)
  const [recurso2, setRecurso2] = useState(false)
  const [recurso3, setRecurso3] = useState(false)
  const [recurso4, setRecurso4] = useState(false)

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
        <input type='hidden' value='no' name='salonactividades' disabled={salonActividadesChecked}></input>
        <FormControlLabel control={<Checkbox name="salonactividades" onChange={() => setSalonActividadesChecked(!salonActividadesChecked)} value={salonActividadesChecked ? "si" : "no"}/>}  label="Salón para actividades" />
        
        <input type='hidden' value='no' name='reunionesbajotecho' disabled={bajoTechoChecked}></input>
        <FormControlLabel control={<Checkbox name="reunionesbajotecho" onChange={() => setBajoTechoChecked(!bajoTechoChecked)} value={bajoTechoChecked ? "si" : "no"} />}  label="Reuniones bajo techo" />
        
        <input type='hidden' value='no' name='laboratorios' disabled={labsChecked}></input>
        <FormControlLabel control={<Checkbox name="laboratorios" onChange={() => setLabsChecked(!labsChecked)}value={labsChecked ? "si" : "no"} />} label="Laboratorios" />
      </FormGroup>

      <h4>Indique los recursos tecnologicos disponibles en su institucion</h4>

      <FormGroup>
        <input type='hidden' value='no' name='Proyector' disabled={recurso1}></input>
        <FormControlLabel control={<Checkbox name="Proyector" onChange={() => setRecurso1(!recurso1)} value={recurso1 ? "si" : "no"}/>}  label="Proyector" />
        
        <input type='hidden' value='no' name='Pantallas' disabled={recurso2}></input>
        <FormControlLabel control={<Checkbox name="Pantallas" onChange={() => setRecurso2(!recurso2)} value={recurso2 ? "si" : "no"} />}  label="Pantallas" />
        
        <input type='hidden' value='no' name='Bocinas' disabled={recurso3}></input>
        <FormControlLabel control={<Checkbox name="Bocinas" onChange={() => setRecurso3(!recurso3)}value={recurso3 ? "si" : "no"} />} label="Bocinas" />

        <input type='hidden' value='no' name='Microfonos' disabled={recurso4}></input>
        <FormControlLabel control={<Checkbox name="Microfonos" onChange={() => setRecurso4(!recurso4)}value={recurso4 ? "si" : "no"} />} label="Microfonos" />
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