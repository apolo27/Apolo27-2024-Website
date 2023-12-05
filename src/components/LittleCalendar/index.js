import './LittleCalendar.css'
import {useState} from 'react'
import Calendar from 'react-calendar';


function LittleCalendar(){
    const [date, setDate] = useState(new Date());
    return(
        <div>
            <Calendar onChange={setDate} value={date}/>
        </div>
    )
}

export default LittleCalendar