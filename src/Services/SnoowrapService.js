import axios from 'axios';

const baseURL = 'http://localhost:3001/';

function getSubredditPostTitles(subreddit)
{
    const accessURL = `${baseURL}GetRedditTitles?subreddit=${subreddit}`;

    return axios.get(accessURL);
}

export default {
    getSubredditPostTitles
};