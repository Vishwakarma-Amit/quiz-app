import React, { useReducer } from 'react'
import Question from './Question'

import '../index.css'

const initialState = {
    currentQuestionIndex: 0,
    questions: [],
}

const reducer = (state, action) => {
    if (action.type === 'NEXT_QUESTION') {
        return { ...state, currentQuestionIndex: state.currentQuestionIndex + 1 }
    }
    return state
}

const Quiz = () => {
    const [state, dispatch] = useReducer(reducer, initialState)

    return (
        <div className="quiz">
            <div>
                <div className="score">
                </div>
                <Question questions={state.questions} />
                <div className="next-button" onClick={() => dispatch({ type: 'NEXT_QUESTION' })}> Next Question </div>
            </div>
        </div>
    )
}

export default Quiz
