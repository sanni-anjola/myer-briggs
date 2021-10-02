import React, { useState, useEffect } from "react";
import {OptionButton} from "../OptionButton";
import Button from "../Button";
import ProgressBar from "../ProgressBar";
import questions from "../../data/questions.json"

const Questionnaire = (props) => {


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
                            <div onClick={() => setSession(2)}>
                                <Button disabled={selection[currentQuestion].selected === 2} text="Submit"/>
                            </div>
                                )
                }
            </div>
        </div>
    );
}

export default Questionnaire;