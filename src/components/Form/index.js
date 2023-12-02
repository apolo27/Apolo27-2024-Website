import './Form.css'
import React, { useState, useRef } from 'react';
import {TextField, Checkbox, FormGroup, FormControlLabel, Button} from '@mui/material/';
import {Stepper, Step, StepLabel} from '@mui/material';
import emailjs from '@emailjs/browser';

const Form = (props) => {
  const t = props.t;
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
  const inputProps = {
    style: {
      borderRadius: "20px",
      fontWeight: "600"
    },
  };

  const inputLabelProps = {
    style: {
      fontWeight: "400",
      fontSize: "16px"
    },
  };

  return(
    <section className='section-formulario'>
      <form ref={form} onSubmit={HandleSubmit} className='formulario'>
        <h1>{t('Contactenos')}</h1>
        <h4>{t('Solicite')}</h4>
        <TextField 
          id="nombre"
          label={t('Nombre')}
          name="user_name"
          variant="outlined"
          fullWidth
          margin='normal'
          value={name}
          inputProps={inputProps}
          InputLabelProps={inputLabelProps}
          onChange={(e) => {
            setName(e.target.value)}}
            />

        <TextField 
          type="tel"
          id="telefono"
          label={t('Tel')}
          name="user_tel" 
          variant="outlined" 
          fullWidth
          margin='normal'
          value={tel}
          inputProps={inputProps}
          InputLabelProps={inputLabelProps}
          onChange={(e) => {
            setTel(e.target.value)}}
            />

        <TextField 
          type='email'
          id="email"
          label={t('Email')}
          name="user_email" 
          variant="outlined" 
          fullWidth
          margin='normal'
          value={email}
          inputProps={inputProps}
          InputLabelProps={inputLabelProps}
          onChange={(e) => {
            setEmail(e.target.value)}}
          />

        <TextField 
          id="location"
          label={t('Ubicacion')}
          name="user_location" 
          variant="outlined" 
          fullWidth
          margin='normal'
          value={location}
          inputProps={inputProps}
          InputLabelProps={inputLabelProps}
          onChange={(e) => {
            setLocation(e.target.value)}}
          />
        <h4>{t('Areas')}</h4>
        <FormGroup>
          <input type='hidden' value='no' name='salonactividades' disabled={salonActividadesChecked}></input>
          <FormControlLabel control={<Checkbox name="salonactividades" sx={{ '&.Mui-checked': {color: "green"}}} onChange={() => setSalonActividadesChecked(!salonActividadesChecked)} value={salonActividadesChecked ? "si" : "no"}/>}  label={t('Salon')} />
          
          <input type='hidden' value='no' name='reunionesbajotecho' disabled={bajoTechoChecked}></input>
          <FormControlLabel control={<Checkbox name="reunionesbajotecho" sx={{ '&.Mui-checked': {color: "green"}}} onChange={() => setBajoTechoChecked(!bajoTechoChecked)} value={bajoTechoChecked ? "si" : "no"} />}  label={t('Bajotecho')}/>
          
          <input type='hidden' value='no' name='laboratorios' disabled={labsChecked}></input>
          <FormControlLabel control={<Checkbox name="laboratorios" sx={{ '&.Mui-checked': {color: "green"}}} onChange={() => setLabsChecked(!labsChecked)}value={labsChecked ? "si" : "no"} />} label={t('Labs')} />
        </FormGroup>

        <h4>{t('Recursos')}</h4>

        <FormGroup>
          <input type='hidden' value='no' name='Proyector' disabled={recurso1}></input>
          <FormControlLabel control={<Checkbox name="Proyector" sx={{ '&.Mui-checked': {color: "green"}}} onChange={() => setRecurso1(!recurso1)} value={recurso1 ? "si" : "no"}/>}  label={t('Proyector')} />
          
          <input type='hidden' value='no' name='Pantallas' disabled={recurso2}></input>
          <FormControlLabel control={<Checkbox name="Pantallas" sx={{ '&.Mui-checked': {color: "green"}}} onChange={() => setRecurso2(!recurso2)} value={recurso2 ? "si" : "no"} />}  label={t('Pantallas')} />
          
          <input type='hidden' value='no' name='Bocinas' disabled={recurso3}></input>
          <FormControlLabel control={<Checkbox name="Bocinas" sx={{ '&.Mui-checked': {color: "green"}}} onChange={() => setRecurso3(!recurso3)}value={recurso3 ? "si" : "no"} />} label={t('Bocinas')} />

          <input type='hidden' value='no' name='Microfonos' disabled={recurso4}></input>
          <FormControlLabel control={<Checkbox name="Microfonos" sx={{ '&.Mui-checked': {color: "green"}}} onChange={() => setRecurso4(!recurso4)}value={recurso4 ? "si" : "no"} />} label={t('Microfonos')} />
        </FormGroup>

        <h4>{t('Grados')}</h4>
        <TextField 
          id="grades"
          label={t('GradosOption')}
          name="user_grades" 
          variant="outlined"
          fullWidth
          margin='normal'
          value={grades}
          inputProps={inputProps}
          InputLabelProps={inputLabelProps}
          onChange={(e) => {
            setGrades(e.target.value)}}
          />

        <TextField 
          type='date'
          id="date"
          name="user_date" 
          variant="outlined"
          size='medium'
          margin='normal'
          InputLabelProps={{
            shrink: true,
          }}
          value={date}
          inputProps={inputProps}
          InputLabelProps={inputLabelProps}
          onChange={(e) => {
            setDate(e.target.value)}}
          />

        <h4>{t('Por_que')}</h4>
        <TextField 
          id="mensaje"
          label={t('Message')}
          variant="outlined"
          name="message"
          fullWidth
          margin='normal'
          value={message}
          inputProps={inputProps}
          InputLabelProps={inputLabelProps}
          onChange={(e) => {
            setMessage(e.target.value)}}
          />

        <Button variant="contained" type='submit' value="Send">Enviar Mensaje</Button>
      </form>
    </section>
  )
}

export default Form