import React, {useState} from "react";

const QuestionBox = ({ question, options, selected }) => {
    
    const [answers, setAnswers] = useState(options);
    
    const onClickAnswer = (selectedAnswer) => {
        setAnswers([selectedAnswer]);
        selected(selectedAnswer);
    };

    return(
        <div className="questionBox">
            <div className="question">{ question }</div>
            { answers.map((text, index) => (
                <button
                    key={index}
                    className="answerBtn"
                    onClick={() => onClickAnswer(text)}
                >{ text }</button>
            ))}
        </div>
    );
};

export default QuestionBox;