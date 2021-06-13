import React, { useState } from 'react';
import "./StorkReserveren.css"
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


function StorkReserveren() {

    const Example = () => {
        const [startDate, setStartDate] = useState(new Date());


        return (
            <>
                <div className="datePickerHolder">
                    <DatePicker selected={startDate} onChange={(date) => setStartDate(date)}/>;)
                </div>

                <div className="logoHolder">
                    <h1>Maak hier uw reservering</h1>

                </div>
            </>);

    }
}

export default StorkReserveren;