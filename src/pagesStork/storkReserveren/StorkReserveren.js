import React, { useState, useContext} from 'react';
import "./StorkReserveren.css"
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import moment from "moment";
import MyTimePicker from "../../components/booking/MyTimePicker";
import SelectComponent from '../../components/booking/SelectComponent'
import {useForm, Controller} from "react-hook-form";
import axios from "axios";
import {useHistory} from 'react-router-dom'
import {BookingContext} from "../../context/BookingContext";
import {AuthContext} from "../../context/AuthContext";
import * as field from "react-timeslot-calendar";


const StorkReserveren = () => {

    const [loading, toggleLoading] = useState(false);
    const [error, setError] = useState('');
    const {booking, setBooking} = useContext(BookingContext);
    const [bookingAdded, setBookingAdded] = useState(false);
    const [checkBooking, setCheckBooking] = useState(false);
    const [startDate, setStartDate] = useState(new Date());
    const [startTime, setStartTime] = useState([]);
    const [endTime, setEndTime] = useState([]);
    const [time, setTime] = useState();
    const {handleSubmit, formState: {errors}, register, watch, control} = useForm();
    const history = useHistory();
    const {user} = useContext(AuthContext);
    const [availableSeats, setAvailableSeats] = useState([])


    const optionalStartTime = [
        { value: '12:00:00', label: '⌚12:00' },
        { value: '12:30:00', label: '⌚12:30' },
        { value: '13:00:00', label: '⌚13:00' },
        { value: '13:30:00', label: '⌚13:30' },
        { value: '14:00:00', label: '⌚14:00' },
        { value: '14:30:00', label: '⌚14:30' },
        { value: '15:00:00', label: '⌚15:00' },
        { value: '15:30:00', label: '⌚15:30' },
        { value: '16:00:00', label: '⌚16:00' },
        { value: '16:30:00', label: '⌚16:30' },
        { value: '17:00:00', label: '⌚17:00' },
        { value: '17:30:00', label: '⌚17:30' },
        { value: '18:00:00', label: '⌚18:00' },
        { value: '18:30:00', label: '⌚18:30' },
        { value: '19:00:00', label: '⌚19:00' },
        { value: '19:30:00', label: '⌚19:30' },
        { value: '20:00:00', label: '⌚20:00' },
        { value: '20:30:00', label: '⌚20:30' },
    ]

    const optionalEndTime = [
        { value: '12:30:00', label: '⌚12:30' },
        { value: '13:00:00', label: '⌚13:00' },
        { value: '13:30:00', label: '⌚13:30' },
        { value: '14:00:00', label: '⌚14:00' },
        { value: '14:30:00', label: '⌚14:30' },
        { value: '15:00:00', label: '⌚15:00' },
        { value: '15:30:00', label: '⌚15:30' },
        { value: '16:00:00', label: '⌚16:00' },
        { value: '16:30:00', label: '⌚16:30' },
        { value: '17:00:00', label: '⌚17:00' },
        { value: '17:30:00', label: '⌚17:30' },
        { value: '18:00:00', label: '⌚18:00' },
        { value: '18:30:00', label: '⌚18:30' },
        { value: '19:00:00', label: '⌚19:00' },
        { value: '19:30:00', label: '⌚19:30' },
        { value: '20:00:00', label: '⌚20:00' },
        { value: '20:30:00', label: '⌚20:30' },
        { value: '21:00:00', label: '⌚21:00' },
        { value: '21:30:00', label: '⌚21:30' },
    ]

    const optionalSeats = [
        {value: 1, label: 'Tafel 1, 2 personen,', isDisabled: false, id: 1},
        {value: 2, label: 'Tafel 2, 2 personen,', isDisabled: false, id: 2},
        {value: 3, label: 'Tafel 3, 2 personen,', isDisabled: false, id: 3},
        {value: 4, label: 'Tafel 4, 4 personen,', isDisabled: false, id: 4},
        {value: 5, label: 'Tafel 5, 4 personen,', isDisabled: false, id: 5},
        {value: 6, label: 'Tafel 6, 4 personen,', isDisabled: false, id: 6},
        {value: 7, label: 'Tafel 7, 4 personen,', isDisabled: false, id: 7},
        {value: 8, label: 'Tafel 8, 6 personen,', isDisabled: false, id: 8},
    ]

    // function onChangeInputStartTime(value) {
    //     setStartTime({optionalStartTime})
    //
    //     console.log(optionalStartTime.value)
    // }
    //
    // function onChangeInputEndTime(value) {
    //     setEndTime({optionalEndTime})
    //
    //     // console.log(value.value)
    // }

    // function onChangeInputTable(value) {
    //     setAvailableSeats({optionalSeats})
    //
    //     // console.log(value.value)
    // }


    let [madeBookings, setMadeBookings] = useState([]);
    const token = localStorage.getItem('token');
    let today = moment().startOf("hour").format().slice(0, -6);
    // console.log(today)
    let [dateSearch, setDateSearch] = useState(today)

    function handleDateSelect(data) {

        setDateSearch(() => dateSearch = moment(data).format().slice(0, -6))

        fetchBookings(dateSearch)
    }

    async function fetchBookings(dateSearch) {
        // console.log(dateSearch)
        try {
            const result = await axios.get(`http://localhost:8084/bookings/?date=${dateSearch}`, {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                }
            });

            setMadeBookings(madeBookings = result.data);

            let bookedSeats = (madeBookings.reduce((acc, booking) => acc + booking.amount, 0));

            setAvailableSeats(7 - bookedSeats)

        } catch (e) {
            console.error(e);
        }
    }

    function onSubmit(data) {
        console.log(data)
        // console.log(data.startTime.value)

        //voeg de boeking toe aan de array met boekingen
        setBooking([
            ...booking,
            data,
        ]);
        console.log(booking)

        setBookingAdded(true);


    // async function onSubmit(data) {
    //     console.log(data)
    //     setBooking([
    //         ...booking,
    //         data,
    //     ]);
    //
    //     setBookingAdded(true);
    //     console.log(booking)
        setTimeout(() => {
            // finalizeBooking();
        }, 2000);
    }

    async function finalizeBooking(data) {
        console.log(moment(booking[0].dateinput).format().slice([0], -[14])+booking[0].starttime);
        console.log(moment(booking[0].dateinput).format().slice([0], -[14])+booking[0].endtime);
            console.log(booking[0])

        setError('');
        toggleLoading(true);
        try {

            const result = await axios.post('http://localhost:8084/bookings', {
                // date: moment(booking[0].dateinput).toISOString(),
                //
                // date: (moment(booking[0].dateinput).format().slice([0], -[6])),
                // startTime: booking[0].starttime,
                // startTime: (moment(booking[0].dateInput).format().slice([0], -[14])+booking[0].startTime.value), //startTime is undefined
                // endTime: (moment(booking[0].dateinput).format().slice([0], -[14])+booking[0].endTime.value),
                // username: user.username,
                // tafelId: booking[0].tafelId,

                date: (moment(booking[0].dateinput).format().slice(0, -[6])),
                startTime: (moment(booking[0].dateinput).format().slice([0], -[14])+booking[0].starttime),
                endTime: (moment(booking[0].dateinput).format().slice([0], -[14])+booking[0].endtime),
                tafelId: booking[0].tafelId,
                username: user.username,


            });
            console.log(result);
            // // als deze console.log wordt uitgevoerd is alles goedgegaan, want we zijn niet naar het catch blok gesprongen
            // // in de console zie je de gebruikelijke respons en daarin ook 'status: 201'
            console.log(moment(booking[0].dateinput).toString());
            // console.log(data)

    //         setTimeout(() => {
    //         }, 2000);
    //     } catch (e) {
    //         console.error(e);
    //         setError(`De booking is mislukt. Probeer het opnieuw (${e.message})`);
    //     }
    //     toggleLoading(false);
    //     console.log(booking)
    //     console.log('dit moet naar de backend: ', booking);
    //     console.log(moment(booking[0].dateinput).toISOString())
    //
    //     history.push('/checkbooking')
    //     setCheckBooking(true);
    // }
            setTimeout(() => {
                history.push('/CheckBooking')
            }, 500);
        } catch (e) {
            console.error(e);
            setError(`De booking is mislukt. Probeer het opnieuw (${e.message})`);
        }
        toggleLoading(false);

        setCheckBooking(true);

    }
    console.log('dit moet naar de backend: ', booking);


    return (
        <>
            <div className="main-reservation-container">
                {bookingAdded
                    ? <>
                        <h3 className="successfull-booking">Succesvol geboekt!</h3>
                        <button type="button" onClick={finalizeBooking}>Verder</button>
                    </>
                    : <>
                        <h1>Reservering maken</h1>
                        <h3>Selecteer hier een datum</h3>
                        <div className="calender-container">

                        </div>
                        <form className="booking-form" onSubmit={handleSubmit(onSubmit)}>

                            <Controller
                                control={control}
                                name='dateinput'
                                render={({field}) => (
                                    <DatePicker
                                        placeholderText='Kies hier een datum'
                                        onChange={(date) => field.onChange(date)}
                                        onSelect={handleDateSelect}
                                        selected={field.value}
                                        dateFormat="dd/MM/yyyy"
                                        minDate={new Date()}
                                        required={true}
                                    />
                                )}
                            />

                                <h3>Selecteer een begin en eindtijd</h3>

                                {/*<Controller*/}
                                {/*    control={control}*/}
                                {/*    name='startTime'*/}
                                {/*    render={({field}) => (*/}
                                        <SelectComponent
                                            options={optionalStartTime}
                                            placeholder="kies uw starttijd"
                                            register={register("starttime")}
                                        />
                                {/*    )}*/}
                                {/*/>*/}

                                {/*<Controller*/}
                                {/*    control={control}*/}
                                {/*    name='endTime'*/}
                                {/*    render={({field}) => (*/}
                                        <SelectComponent
                                            options={optionalEndTime}
                                            placeholder="kies uw eindtijd"
                                        register={register("endtime")}/>
                                    )}
                                {/*/>*/}

                            <h3>Selecteer uw tafel hier</h3>
                            <SelectComponent
                                className="select-tafel-component"
                                options={optionalSeats}
                                // onChange={(optionalSeats) => field.onChange(optionalSeats)}
                                // onSelect={onChangeInputTable}
                                placeholder="Kies hier uw tafel"
                                selected={field.value}
                                register={register("tafelId")}
                            />

                            <button type="submit" disabled={availableSeats === 0}
                                    className="booking-select-button"> bevestigen
                            </button>

                        </form>
                    </>
                }
            </div>
        </>
    )
}

export default StorkReserveren;
