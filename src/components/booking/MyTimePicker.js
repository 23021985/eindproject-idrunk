import React from 'react';
import Select from 'react-select'


function MyTimePicker({label, options, onChange}) {

    return(
        <Select
            className="myTimePicker"
            options={options}
            onChange={onChange}
            label={label}/>
    )
}

export default MyTimePicker;