import React from 'react';
import { Grid } from '@material-ui/core';
import WordCloud from '../../Components/WordCloud/index';
import SearchBar from '../../Components/SearchBar/index';
import SnoowrapService from '../../Services/SnoowrapService';

function Home() {
    const [textFieldValue, setTextFieldValue] = React.useState('');
    const [words, setWords] = React.useState([]);
    const [serviceError, setServiceError] = React.useState(false);
    const [serviceErrorMsg, setServiceErrorMsg] = React.useState('');
    const [loading, setLoading] = React.useState(false);

    const handleChange = (e) => {
        setTextFieldValue(e.target.value);
    };

    var setStateValues = function(props) {
        setWords(props.words);
        setServiceError(props.serviceError);
        setServiceErrorMsg(props.serviceErrorMsg);
        setLoading(props.loading);
    };

    const handleClick = (e) => {
        setLoading(true);
        SnoowrapService.getSubredditPostTitles(textFieldValue).then(resp => {
            setStateValues({ words: resp.data, serviceError: false, serviceErrorMsg: '', loading: false});
        }).catch((e) => {
            setStateValues({ words: [], serviceError: true, serviceErrorMsg: e.response.data, loading: false});
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
                        error={serviceError}
                        errorText={serviceErrorMsg}
                        />
            <WordCloud isLoading={loading} words={words}/>
        </Grid>
    </div>
    );
}

export default Home;
  