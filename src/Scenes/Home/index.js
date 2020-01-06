import React from 'react';
import { Grid } from '@material-ui/core';
import WordCloud from '../../Components/WordCloud/index';
import SearchBar from '../../Components/SearchBar/index';
import SnoowrapService from '../../Services/SnoowrapService';

function Home() {
    const [textFieldValue, setTextFieldValue] = React.useState('');
    const [words, setWords] = React.useState([]);

    const handleChange = (e) => {
        setTextFieldValue(e.target.value);
    };

    const handleClick = (e) => {
        SnoowrapService.getSubredditPostTitles(textFieldValue).then(resp => {
            setWords(resp.data);
        });
    }

    return (  
    <div>
        <Grid   container 
                alignItems="center"
                justify="center"
                direction="column"
                style={{ minHeight: '100vh' }}
                >
            <SearchBar  textFieldValue={textFieldValue}
                        onChange={handleChange}
                        onClick={handleClick}
                        />
            <WordCloud words={words}/>
        </Grid>
    </div>
    );
}

export default Home;
  