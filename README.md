This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm install`
This command will install all node_modules necessary for the web application to be able to start.

This command is required to be run first before executing npm start.

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

## Demonstrations
NOTE: This web application runs in tandem with the server application [reddit_posts_server](https://github.com/dillonreedy/reddit_posts_server)

### Demo of Successfully Generating Wordcloud
Below is a demonstration of a user inputting the name of a subreddit and then a word cloud being successfully generated.
![A demo of successfully generating a word cloud](https://github.com/dillonreedy/movie_wordcloud/blob/master/demo_gifs/sucess_wordcloud_creation.gif)


### Error feedback for when textfield is empty
Below is a demonstration of error feedback when the user attempts to input the empty string in to the textfield componenet.
![Error feedback for no input](https://github.com/dillonreedy/movie_wordcloud/blob/master/demo_gifs/noinput_error.gif)

### Error feedback when subreddit has no data
Below is a demonstration of error feedback for when the user attempts to input a subreddit that does not contain any data.
![Error feedback for no subreddit data](https://github.com/dillonreedy/movie_wordcloud/blob/master/demo_gifs/nodata_error.gif)
