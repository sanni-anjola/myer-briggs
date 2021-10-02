import React, {useState} from 'react';

//styles
import {GlobalStyle} from "./GlobalStyle";

//component
import Header from "./components/Header/Header";
import BeginTest from "./components/BeginTest";
import Result from "./components/Result";
import questions from "./data/questions.json";
import Questionnaire from "./components/Questionnaire";

function App() {

    const initialArray = []
    questions.forEach((item, index) => initialArray.push({page: index, selected: 2}))
    const [selection, setSelection] = useState(initialArray);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [session, setSession] = useState(0);

    // [{page: 0, selected: 0}, {page: 1, selected: 1}]

    const nextQuestionChange = () => {
        if(currentQuestion < questions.length - 1){
            setCurrentQuestion(currentQuestion + 1);
        }


    }

    const previousQuestionChange = () => {
        if(currentQuestion > 0){
            setCurrentQuestion(currentQuestion - 1);
        }
    }


    const handleLeftSelected = () => {
        const tempState = [...selection];

            tempState[currentQuestion] = {...selection[currentQuestion], selected: 1};

        setSelection([...tempState]);
    }

    const handleRightSelected = () => {
        const tempState = [...selection];

        tempState[currentQuestion] = {...selection[currentQuestion], selected: 0};

        setSelection([...tempState]);
    }

    return (
    <div className="App">
        <GlobalStyle/>
            <Header />
        {session === 0 && (
                <BeginTest
                    setSession={setSession}
                />
        )}
                {session === 1 && (
                <Questionnaire prev={previousQuestionChange}
                      next={nextQuestionChange}
                      question={questions[currentQuestion]}
                      handleSelected={[handleLeftSelected, handleRightSelected]}
                               currentQuestion={ currentQuestion }
                selection={selection}
                setSession={setSession}
                />)}

                {session === 2 && (
                <Result selection={selection}/>
                )}

    </div>
  );
}

export default App;
