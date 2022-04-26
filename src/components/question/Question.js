import './Question.css';
import { Data } from '../../const/data/Data';
import { useState, useEffect, useContext } from 'react';
import { AppContext } from '../layout/Layout';

const Question = () => {

    const { score, timer, setScore, setTimer } = useContext(AppContext);

    const randomGenerate = () => {
        const random = Math.floor(Math.random() * Data.length)
        console.log(`random : ${random}`)
        return random

    }

    const [index, setIndex] = useState(0);
    const [question, setQuestion] = useState(Data[randomGenerate()]);
    const [ans, setAns] = useState('');
    const [correct, setCorrect] = useState();

    const handleAnswer = (e, question) => {
        setAns(e.target.value)
        const option = `${e.target.value}_correct`;

        if (question.correct_answers[option] === 'true') {
            setCorrect(true)
            if (index < Data.length) {
                setIndex((init) => init + 1)
                setQuestion(Data[randomGenerate()])
                setScore((init) => init + 1)
                console.log(`index:${index}`)
            }
            else {
                return score
            }
        } else {
            setCorrect(false)
        }
    }

    return (
        <div className="question">
            <div className="question__qn">
                {question.question}
            </div>
            <div className="question__answer">
                <button className="question__answer_button" value='answer_a' onClick={(e) => handleAnswer(e, question)}>
                    A. {question.answers.answer_a}
                </button>
                <button className="question__answer_button" value='answer_b' onClick={(e) => handleAnswer(e, question)}>
                    B. {question.answers.answer_b}
                </button>
                <button className="question__answer_button" value='answer_c' onClick={(e) => handleAnswer(e, question)}>
                    C. {question.answers.answer_c}
                </button>
                <button className="question__answer_button" value='answer_d' onClick={(e) => handleAnswer(e, question)}>
                    D. {question.answers.answer_d}
                </button>
            </div>
            {correct === true && <div>Correct</div>}
            {correct === false && <div>Wrong</div>}
            {index === 7 && <div> Congratulations you scored {score} points. </div>}
        </div>
    )
}

export default Question;