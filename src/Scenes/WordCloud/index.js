import React from 'react';
import { Grid, TextField } from '@material-ui/core';
import Autocomplete from '@material-ui/lab/Autocomplete';
import moviesNames from 'movies-names';


function WordCloud() {

    let moviesAll = moviesNames.all;
    let movieTitlesYears = moviesAll.map((a) => {
      return { 'title': a.title, 'year': a.year }
    });
    

    return (  
    <div>
        <Grid   container 
                alignItems="center"
                justify="center"
                style={{ minHeight: '100vh' }}
                >
                <Autocomplete
                    id="combo-box-demo"
                    options={movieTitlesYears}
                    getOptionLabel={option => option.title}
                    style={{ width: 300 }}
                    renderInput={params => (<TextField {...params} label="Combo box" variant="outlined" fullWidth />)}
                />
        </Grid>
    </div>
    );
}

export default WordCloud;
  