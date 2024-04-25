import React from "react";
import iconReaction from "../assets/images/icon-reaction.svg";
import iconMemory from "../assets/images/icon-memory.svg";
import iconVerbal from "../assets/images/icon-verbal.svg";
import iconVisual from "../assets/images/icon-visual.svg";
import Data from "../Data";

function Card() {
  return (
    <div className="inner-container">
      <div className="item left-side">
        <p className="message">Your Result</p>
        <div className="result">
          <h1>
            76<span className="score">of 100</span>
          </h1>
        </div>
        <h2>Great</h2>
        <p className="long-message">
          You scored higher than 65% of the people who have taken these tests.
        </p>
      </div>
      <div className="item right-side">
        <h3>Summary</h3>
        <div className="nested-grid-container">
          <div className=" subject reaction">
            <div className="left">
            <img src={iconReaction} alt="icon-reaction" />
            <h4>Reaction</h4>
            </div>
            <h4>
              80<span> / 100</span>
            </h4>
          </div>
          <div className=" subject memory">
            <div className="left">
            <img src={iconMemory} alt="icon-memory" />
            <h4>Memory</h4>
            </div>
            <h4>
              92<span> / 100</span>
            </h4>
          </div>
          <div className=" subject verbal">
            <div className="left">
              <img src={iconVerbal} alt="icon-verbal" />
              <h4>Verbal</h4>
            </div>
            <h4>
              61<span> / 100</span>
            </h4>
          </div>
          <div className=" subject visual">
            <div className="left">
              <img src={iconVisual} alt="icon-visual" />
              <h4>Visual</h4>
            </div>
            <h4>
              72<span> / 100</span>
            </h4>
          </div>
          <button>Continue</button>
        </div>
         

      </div>
    </div>
  );
}
export default Card;
