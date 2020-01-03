import React from "react";
import { Box, Button } from '@material-ui/core';
import styled from "styled-components";
import { StylesProvider } from "@material-ui/styles";

const StyledZeroButton = styled(Button)`
    width: 160px;
`;

function StyledButton(props)
{
    var ButtonTag = (props.value === "0") ? StyledZeroButton : Button;

    return (
        <StylesProvider injectFirst>
            <Box p={1}>
                <ButtonTag  variant="contained"
                            onClick={(e) => props.onClick(e, props.value)} 
                            color={props.color}>
                        {props.buttonText}
                </ButtonTag>
            </Box>
        </StylesProvider>
    );
}

export default StyledButton;