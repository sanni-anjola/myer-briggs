/*
import React, {useState} from 'react';

//styles
import {GlobalStyle} from "./GlobalStyle";

//component
import Header from "./components/Header/Header";
import Home from "./components/Home";
import {BrowserRouter, Redirect, Route} from "react-router-dom";
import BeginTest from "./components/BeginTest";
import Result from "./components/Result";
import questions from "./data/questions.json";
import Questionnaire from "./components/Questionnaire";

function App() {

    const initialArray = []
    questions.forEach((item, index) => initialArray.push({page: index, selected: 2}))
    const [selection, setSelection] = useState(initialArray);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    // const [session, setSession] = useState(0);

    // [{page: 0, selected: 0}, {page: 1, selected: 1}]

    const nextQuestionChange = () => {
        if(currentQuestion < questions.length - 1){
            setCurrentQuestion(currentQuestion + 1);
        }
        // if(currentQuestion > questions.length - 2)
        //     setSession(2);

    }

    const previousQuestionChange = () => {
        if(currentQuestion > 0){
            setCurrentQuestion(currentQuestion - 1);
        }
    }


    const handleLeftSelected = () => {
        console.log(selection)
        const tempState = [...selection];

        tempState[currentQuestion] = {...selection[currentQuestion], selected: 1};

        setSelection([...tempState]);
        console.log(selection)
    }

    const handleRightSelected = () => {
        console.log(selection)
        const tempState = [...selection];

        tempState[currentQuestion] = {...selection[currentQuestion], selected: 0};

        setSelection([...tempState]);
        console.log(selection)
    }

    return (
        <div className="App">
            <GlobalStyle/>
            <BrowserRouter>
                <Header />
                <Route exact path="/">
                    <BeginTest
                        // setSession={setSession}
                    />
                </Route>
                <Route path="/question">
                    {/!*{session === 1 ? (*!/}
                    <Questionnaire prev={previousQuestionChange}
                                   next={nextQuestionChange}
                                   question={questions[currentQuestion]}
                                   handleSelected={[handleLeftSelected, handleRightSelected]}
                                   currentQuestion={ currentQuestion }
                                   selection={selection}
                        // setSession={setSession}
                    />
                    {/!*) : <Redirect to="/" />}*!/}
                </Route>
                <Route path="/result">
                    {/!*{session === 2 ? (*!/}
                    <Result selection={selection}/>
                    {/!*) : <Redirect to="/"/>}*!/}
                </Route>
            </BrowserRouter>

        </div>
    );
}

export default App;
*/



import {useHistory, useLocation} from "react-router-dom";

i/*mport React from "react";
import {Link, useLocation} from "react-router-dom";
import Card from "../Card";
import Button from "../Button";

const BeginTest = ({ setSession }) => {
    const location = useLocation();
    return (
        <div>
            <div style={{textAlign: 'center'}}>
                <h1 style={{color: 'black', marginBottom: '0'}}>Free Personality Test</h1>
            </div>
            <Card />
            <div style={{textAlign: 'right'}}
                // onClick={setSession(1)}
                 onClick={() => location.state = 1}
            >
                <Link to="/question"><Button text="Start"/></Link>
            </div>
        </div>
    );
}

export default BeginTest;*/




/*
import React, { useState, useEffect } from "react";
import {OptionButton} from "../OptionButton";
import Button from "../Button";
import ProgressBar from "../ProgressBar";
import questions from "../../data/questions.json"
import {Link, useHistory, useLocation} from "react-router-dom";

const Questionnaire = (props) => {

    const location = useLocation();
    let history = useHistory();
    console.log(history)
    if(location.state === undefined || location.state == null || location.state === ''){
        history.push("/");
    }

    const {prev, next, question,handleSelected, currentQuestion, selection, setSession} = props;


    const width = Math.floor(((currentQuestion + 1) / questions.length) * 100)



    return (
        <div style={{width: '90%', margin: '0 auto'}}>
            <OptionButton question={question} handleSelected={handleSelected} selection={selection[currentQuestion]}/>

            <ProgressBar width={width}/>
            <div>
                <p style={{width: '40px', color: 'black', marginLeft: 'auto'}}>{`${currentQuestion + 1}/20`}</p>
            </div>

            <div style={{display: "flex", justifyContent: "space-between"}}>
                <div onClick={prev} style={{visibility: `${currentQuestion === 0 ? 'hidden' : 'visible'}`}}>
                    <Button text="Prev" />
                </div>
                {
                    currentQuestion < 19 ?
                        (<div onClick={next}>
                                <Button disabled={selection[currentQuestion].selected === 2}
                                        text="Next"/>
                            </div>
                        ) : (
                            <div>
                                <Link to="/result">
                                    <Button disabled={selection[currentQuestion].selected === 2} text="Submit"/>
                                </Link>
                            </div>
                        )
                }
            </div>
        </div>
    );
}

export default Questionnaire;
*/

/*
const location = useLocation();
let history = useHistory();

if(location.state === undefined || location.state == null || location.state === ''){
    history.push("/");
}*/
