import React from 'react';
import Select from 'react-select'


function MyTimePicker({label, options, onChange, value, register}) {

    return(
        <Select
            className="myTimePicker"
            options={options}
            value={value}
            onChange={onChange}
            label={label}
            register={register}/>
    )
}

export default MyTimePicker;