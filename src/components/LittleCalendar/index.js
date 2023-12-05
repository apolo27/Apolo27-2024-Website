import './LittleCalendar.css'
import {useState} from 'react'
import Calendar from 'react-calendar';


function LittleCalendar(props){

    return(
        <div>
            <Calendar onChange={props.setDate} value={props.value}/>
        </div>
    )
}

export default LittleCalendar