import React, { useState } from 'react';
import { render } from 'react-dom';
import DayTimePicker from '@mooncake-dev/react-day-time-picker';

function TimeSlotValidator(slotTime) {
    const eveningTime = new Date(
        slotTime.getFullYear(),
        slotTime.getMonth(),
        slotTime.getDate(),
        12,
        0,
        0
    );
    const isValid = slotTime.getTime() > eveningTime.getTime();
    return isValid;
}

function DateTimePicker(props) {

    let timeSlotValidator;

    return (
    <DayTimePicker
        timeSlotSizeMinutes={30}
        timeSlotValidator={timeSlotValidator}
    />
);

function App() {
    const target = document.getElementById('root');
    render(<App/>, target);

    const [isScheduling, setIsScheduling] = useState(false);
    const [isScheduled, setIsScheduled] = useState(false);
    const [scheduleErr, setScheduleErr] = useState('');
    const handleScheduled = (dateTime, date) => {
        setIsScheduling(true);
        setScheduleErr('');

        function fakeRequest(date) {
            fakeRequest(date)
                .then(json => {
                    setScheduleErr('');
                    setIsScheduled(true);
                    console.log('fake response: ', json);
                })
                .catch(err => {
                    setScheduleErr(err);
                })
                .finally(() => {
                    setIsScheduling(false);
                });
        }
        }


    return (
        <DayTimePicker
            timeSlotSizeMinutes={15}
            isLoading={isScheduling}
            isDone={isScheduled}
            err={scheduleErr}
            onConfirm={handleScheduled}
        />
    )
    }

}

export default DateTimePicker;

