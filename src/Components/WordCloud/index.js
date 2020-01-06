import React from "react";
import ReactWordcloud from "react-wordcloud";


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

function WordCloud(props) {
  return (
    <div>
      <div style={{ height: 800, width: 800 }}>
        <ReactWordcloud options={options} words={props.words} />
      </div>
    </div>
  );
}

export default WordCloud;