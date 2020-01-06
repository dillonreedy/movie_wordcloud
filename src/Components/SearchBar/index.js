import React from 'react';
import { IconButton } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import TextField from '../TextField/index';
import { Box } from '@material-ui/core';

function SearchBar(props) {
    return (  
    <div>
        <Box display="flex" direction="row" width={400}>
            <TextField  label="Input subreddit name"
                        value={props.textFieldValue}
                        onChange={props.onChange}
                        error={false}
                        errorText=''
                        />
            <IconButton onClick={props.onClick}>
                <SearchIcon />
            </IconButton>
        </Box>
    </div>
    );
}

export default SearchBar;
  