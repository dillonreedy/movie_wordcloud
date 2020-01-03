import React from 'react';
import { Grid } from '@material-ui/core';
import StyledButton from "./Button/index";

function ButtonGrid(props) {
    return (
        <Grid container
              wrap="wrap"
              direction="row"
              justify="space-evenly"
              alignItems="center">
            {
                props.buttons.map(function(button){
                    return (
                        <StyledButton onClick={props.onClick} 
                                      color={props.color} 
                                      key={button} 
                                      value={button}
                                      buttonText={button}
                        />
                    );
                })
            }
        </Grid>
    );
}

export default ButtonGrid;