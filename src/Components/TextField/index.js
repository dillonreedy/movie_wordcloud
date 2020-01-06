import React from 'react';
import { TextField } from '@material-ui/core';

function CalculatorTextField(props) {
    return (
        <TextField id="outlined-basic" 
                   label={props.label} 
                   variant="outlined"
                   value={props.value}
                   onChange={props.onChange}
                   error={props.error}
                   helperText={props.errorText}
                   fullWidth/>
      );
}

export default CalculatorTextField;