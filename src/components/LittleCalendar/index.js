//import "react-calendar/dist/Calendar.css";
import './LittleCalendar.css'
import {useState} from 'react'
import Calendar from 'react-calendar';


function LittleCalendar(props){

    return(
        <div>
            <Calendar value={props.value}/>
        </div>
    )
}

export default LittleCalendar