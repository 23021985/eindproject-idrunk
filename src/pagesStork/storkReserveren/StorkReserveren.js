import React, { useState, } from 'react';
import "./StorkReserveren.css"
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import moment from "moment";
import MyTimePicker from "../../components/booking/MyTimePicker";
import {useForm} from "react-hook-form";


const StorkReserveren = () => {

        const [startDate, setStartDate] = useState(new Date());
        const [startTime, setStartTime] = useState();
        const {register, handleSubmit, formState:{errors}, watch} = useForm();
        const onSubmit = data => console.log(data);
        const [time, setTime] = useState();

    // hier komt een axios request naar de backend die beschikbare tijdsloten ophaalt uit de api
//     // waarschijnlijk .map functie door de array itereren
    const options=[
        { value: '1200 - 1300', label: '⌚12:00 - ⌚13:00' },
        { value: '1230 - 1330', label: '⌚12:30 - ⌚13:30' },
        { value: '1300 - 1400', label: '⌚13:00 - ⌚14:00' },
        { value: '1430 - 1530', label: '⌚14:30 - ⌚15:30' },
        { value: '1500 - 1600', label: '⌚15:00 - ⌚16:00' },
        { value: '1530 - 1630', label: '⌚15:30 - ⌚16:30' },
        { value: '1600 - 1700', label: '⌚16:00 - ⌚17:00' },
        { value: '1630 - 1730', label: '⌚16:30 - ⌚17:30' },
        { value: '1700 - 1800', label: '⌚17:00 - ⌚18:00' },
        { value: '1730 - 1830', label: '⌚17:30 - ⌚18:30' },
        { value: '1800 - 1900', label: '⌚18:00 - ⌚19:00' },
        { value: '1830 - 1930', label: '⌚18:30 - ⌚19:30' },
        { value: '1900 - 2000', label: '⌚19:00 - ⌚20:00' },
        { value: '1930 - 2030', label: '⌚19:30 - ⌚20:30' },
        { value: '2000 - 2100', label: '⌚20:00 - ⌚21:00' },
        { value: '2030 - 2130', label: '⌚20:30 - ⌚21:30' },
        { value: '2100 - 2200', label: '⌚21:00 - ⌚22:00' },
    ]


    //hier komt uit de backend de beschikbare tafels


    function onChangeInput(value){
        console.log(value.value)
    }

        return (

            <>
                <form className="formReserveren" onSubmit={handleSubmit(onSubmit)}>
                    <div className="containerLogoFoto">
                            <h1>Maak hier uw reservering</h1>

                                <div className="logoHolder"></div>
                                    <br/>


                                        {/*wanneer wil je komen?*/}
                                        <div>
                                            <DatePicker
                                                selected={startDate}
                                                onChange={(date) => setStartDate(date)}/>
                                                {console.log(startDate)}
                                                {console.log(moment(startDate).format("LL"))}
                                        </div>
                                    <br/>
                                <div>
                            {/*hoe laat wil je komen?*/}
                            <MyTimePicker
                                options={options}
                                onChange={onChangeInput}/>
                        </div>
                    </div>


                    <button type="submit">Bier</button>
                </form>
            </>);

}
export default StorkReserveren;