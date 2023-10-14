import { useState } from 'react';
import {TextField, Button } from '@mui/material/';

const Form = () => {
  const [name, setName] = useState("")
  const [message, setMessage] = useState("")
  
  const [errors, setErrors] = useState({
    name: {
      error: false,
      message: "Deben ser al menos 3 caracteres",
    },
  })

  function ValidarNombre(nombre){
    if(nombre.length >= 3){
      return {
        name: { 
          error: false, 
          message: '',
        },
      }
    }else{
      return {name: {
        error: true, 
        message: 'Deben ser al menos 3 caracteres',
      },
    }
    }
  }

  const HandleSubmit = (e) => {
    e.preventDefault();
    console.log(
      "name: ",  name, "\n",
      "last name: ",message, "\n",
      );
  }

  return(
    <form onSubmit={HandleSubmit}>
    <h4>Hable con nosotros</h4>
      <TextField 
        id="nombre"
        label="Nombre"
        variant="outlined" 
        fullWidth
        margin='normal'
        value={name}
        onChange={(e) => {
          setName(e.target.value)}}
        onBlur={(e) => {
          setErrors(ValidarNombre(e.target.value));
        }}
        error = {errors.name.error}
        helperText={errors.name.error ? errors.name.message : ''}
        />

      <TextField 
        id="mensaje"
        label="Mensaje"
        variant="outlined" 
        fullWidth
        margin='normal'
        value={message}
        onChange={(e) => {
          setMessage(e.target.value)}}
        />
      <Button variant="contained" type='submit'>Enviar Mensaje</Button>
    </form>
  )
}

export default Form