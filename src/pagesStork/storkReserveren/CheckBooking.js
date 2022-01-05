import React, {useContext} from 'react';
import {BookingContext} from "../../context/BookingContext";
import './CheckBooking.css';
import moment from "moment";
import { useHistory } from 'react-router-dom';


function CheckBooking() {
    const {booking, setBooking} = useContext(BookingContext)
    const history = useHistory();

    function resetBooking() {
        setBooking([]);
        history.push("/");
    }
    return (
        <div className="booking-check-page">
            <div className="bookings-check">
                <>
                    <h3>
                        {console.log(booking)}
                        Je hebt het volgende geboekt
                        {booking.map((bookings) => {
                            return <div key={bookings.id}>
                                <h2 key={bookings.id} className="reservation-overview">
                                    <p>datum: {(moment(bookings.dateInput).format().slice(0,-15))}</p>
                                    <p key={bookings.id}>starttijd: {bookings.startTime}</p>
                                    <p key={bookings.id}>starttijd: {bookings.endTime}</p>
                                    <p key={bookings.id}>tafel: {bookings.tafelId}</p>


                                </h2>
                                <button onClick={resetBooking}>verder-></button>
                            </div>
                        })}
                    </h3>

                </>
            </div>
        </div>
    );
}

export default CheckBooking;