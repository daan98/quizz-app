import React, { useState, useEffect } from "react";
import quizzService from "./service";
import QuestionBox from "./components/QuestionBox";
import Result from "./components/Result";

const App = () => {
    const [isDataNeeded, setIsDataNedded] = useState(true);
    const [questionBank, setQuestionBank] = useState([]);
    const [response, setResponse] = useState(0);
    const [score, setScore] = useState(0);

    const getQuestions = () => {
        quizzService().then(questions => {
            setQuestionBank(questions);
            setIsDataNedded(false);
        });
    };

    const computeAnswer = (answer, correctAnswer) => {
        if (answer === correctAnswer) {
            setScore(score + 1);
        }

        setResponse(response < 5 ? response + 1 : 5);
    };

    const restartGame = () => {
        setIsDataNedded(true);
        setScore(0);
        setResponse(0);
        // location.reload(); use it only when reloading the page do not affect user experience
    };

    useEffect(() => {    
        getQuestions();
    }, [isDataNeeded]);

    return(
        <div className="container">
            <div className="title">Quizz App</div>

            {
                questionBank.length > 0 &&
                response < 5 &&
                questionBank.map(({answers, question, questionId, correct}) => (
                    <QuestionBox
                        key={questionId}
                        options={answers}
                        question={question}
                        selected={answer => computeAnswer(answer, correct)}
                    />
                ))
            }

            {
                response === 5 && (
                    <Result
                        score={score}
                        onClickPlayAgain={restartGame}
                    />
                )
            }
        </div>
    );
}

export default App;