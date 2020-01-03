import React from 'react';
import { TextField } from '@material-ui/core';

function CalculatorTextField(props) {
    return (
        <TextField id="outlined-basic" 
                   label="Input Here" 
                   variant="outlined"
                   value={props.value}
                   onChange={props.onChange}
                   error={props.error}
                   helperText={props.errorText}
                   fullWidth
                   multiline/>
      );
}

export default CalculatorTextField;