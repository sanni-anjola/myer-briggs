import React from "react";
import personalities from '../../data/personalityType.json'
import ProgressBar from "../ProgressBar";


const Result = ({ selection }) => {

    const personality = [["E", "I"], ["S", "N"], ["T", "F"], ["J", "P"]];
    let personalityType = "";
    const optionsCount = [[0,0], [0,0], [0,0], [0,0]];
    const responses = selection.map(item => item.selected);

    for(let i = 0; i < 4; i++){
        let total = 0;
        for (let j = i; j < responses.length; j += 4){
            total += responses[j];
        }

        optionsCount[i][0] = total;
        optionsCount[i][1] = 5 - total;

        if( total >= 3){
            personalityType += personality[i][0];
        }else {
            personalityType += personality[i][1]
        }
    }

    console.log(personalityType)
    console.log(optionsCount)
    console.log(personalities[personalityType])

    const personalityMeaning = [["Extroversion", "Introversion"], ["Sensing", "Intuition"], ["Thinking", "Feeling"], ["Judging", "Perceiving"]];


    return (

        <div style={{backgroundColor: "black", color: "white"}}>
            <h1>Your Personality type is</h1>
            <div>
                <div>
                    <h1>{personalityType}</h1>
                    <h2>{personalities[personalityType].title}</h2>
                    {personalities[personalityType].description.map((e, i) => {
                        return (
                            <h4 key={i}>{e}</h4>
                        );
                    })}
                </div>
                <div>
                    <h3>Amazing!</h3>
                    {personalityMeaning.map((arr, index) => {
                        return (
                            <div>
                                <div>
                                    <h3>{arr[0]}</h3>
                                    <h3>{arr[1]}</h3>
                                </div>
                                <div>
                                    <h3>{optionsCount[index][0] / 5 * 100}%</h3>
                                    <ProgressBar width={optionsCount[index][0] / 5 * 100}/>
                                    <h3>{optionsCount[index][1] / 5 * 100}%</h3>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}

export default Result;