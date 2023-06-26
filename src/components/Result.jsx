import React from "react";

const Result = ({score, onClickPlayAgain}) => {
    return(
        <div className="score-board">
            <div className="score">Your final score is { score }/5 correct answers!</div>
            <button className="playBtn" onClick={() => onClickPlayAgain()}>Play Again</button>
        </div>
    );
}

export default Result;