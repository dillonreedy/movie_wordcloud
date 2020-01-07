import React from "react";
import ReactWordcloud from "react-wordcloud";
import CircularProgress from '@material-ui/core/CircularProgress';
// import { Grid } from '@material-ui/core';



const options = {
  colors: ["#36688d", "#f3cd05", "#f49f05", "#f18904", "#bda589"],
  enableTooltip: true,
  deterministic: true,
  fontFamily: "helvetica",
  fontSizes: [25, 30, 45, 60,  90],
  fontStyle: "normal",
  fontWeight: "normal",
  padding: 1,
  rotations: 0,
  scale: "sqrt",
  spiral: "archimedean",
  transitionDuration: 1000
};

function comp(props) {
  if (props.isLoading) return (<CircularProgress/>);

  return (<ReactWordcloud options={options} words={props.words} />);
}

function WordCloud(props) {


  return (
    <div>
      <div style={{ height: 500, width: 500, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        {comp(props)}
      </div>
    </div>
  );
}

export default WordCloud;