import React, { useState } from 'react';
import "./StorkReserveren.css"
import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";
import DateTimePicker from "../../components/dateTimePicker";
import DayTimePicker from "@mooncake-dev/react-day-time-picker";


function StorkReserveren() {


        const [startDate, setStartDate] = useState(new Date());



        return (
            <>


                <div className="containerLogoFoto">
                    <h1>Maak hier uw reservering</h1>

                    <div className="logoHolder"></div>
                    <br/>

                    <div className="datePickerHolder">
                    <DateTimePicker
                        timeSlotSizeMinutes={15}
                        isLoading={isScheduling}
                        isDone={isScheduled}
                        err={scheduleErr}
                        onConfirm={handleScheduled}
                    />
                    </div>
                        {/*<div className="datePickerHolder">*/}
                        {/*    <DatePicker*/}
                        {/*        selected={startDate}*/}
                        {/*        onChange={(date) => setStartDate(date)}*/}
                        {/*        dateFormat="dd/MM/yyyy"*/}
                        {/*        minDate={new Date()}*/}

                        {/*    />;)*/}
                        {/*    {console.log(new Date())}*/}
                        {/*</div>*/}



                    </div>

            </>);


}

export default StorkReserveren;