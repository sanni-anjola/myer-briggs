import React from "react";
import personalities from '../../data/personalityType.json'
import ProgressBar from "../ProgressBar";
import {BreakDown, Content, PercentDisplay, Personality, Type, Wrapper} from './Result.styles'


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
            personalityType += personality[i][1];
        }
    }

    const personalityMeaning = [["Extroversion", "Introversion"], ["Sensing", "Intuition"], ["Thinking", "Feeling"], ["Judging", "Perceiving"]];
    const colors = [
        'var(--semicolonOrange2)',
        'var(--semicolonHotRed3)',
        'var(--semicolonBrightGreen1)',
        'var(--semicolonPaleYellow1)'
    ]

    return (

        <Wrapper>
            <h2>Your Personality type is</h2>
            <Content>
                <Personality>
                    <h1 style={{ color: 'black'}}>{personalityType}</h1>
                    <h3 style={{ color: 'var(--semicolonGrey1)' }}>{personalities[personalityType].title}</h3>
                    {personalities[personalityType].description.map((attr, index) => {
                        return (
                            <h4 key={index}>{attr}</h4>
                        );
                    })}
                </Personality>
                <BreakDown>
                    <h3>Amazing!</h3>
                    {personalityMeaning.map((arr, index) => {
                        let width1 = optionsCount[index][0] / 5 * 100;
                        let width2 = optionsCount[index][1] / 5 * 100;
                        return (
                            <div key={index}>
                                <Type>
                                    <h3>{arr[0]}</h3>
                                    <h3>{arr[1]}</h3>
                                </Type>
                                <PercentDisplay>
                                    <h4>{width1}%</h4>
                                    <ProgressBar width={width1+width2}
                                                 color={`linear-gradient(to right,
                                                  ${width1 > width2? colors[index]: '#E0E0DE'}, 
                                                  ${width1 > width2? colors[index]: '#E0E0DE'} ${width1}%, 
                                                  ${width1 > width2? '#E0E0DE': colors[index]} ${width1}%)`}/>
                                    <h4>{width2}%</h4>
                                </PercentDisplay>
                            </div>
                        );
                    })}
                </BreakDown>
            </Content>
        </Wrapper>
    );
}

export default Result;