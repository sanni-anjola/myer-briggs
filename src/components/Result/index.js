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
            personalityType += personality[i][1]
        }
    }

    console.log(personalityType)
    console.log(optionsCount)
    console.log(personalities[personalityType])

    const personalityMeaning = [["Extroversion", "Introversion"], ["Sensing", "Intuition"], ["Thinking", "Feeling"], ["Judging", "Perceiving"]];
    const colors = ['var(--semicolonOrange2)', 'var(--semicolonHotRed3)', 'var(--semicolonAquaBlue5)', 'var(--semicolonPaleYellow1)']

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
                        return (
                            <div key={index}>
                                <Type>
                                    <h3>{arr[0]}</h3>
                                    <h3>{arr[1]}</h3>
                                </Type>
                                <PercentDisplay>
                                    <h4>{optionsCount[index][0] / 5 * 100}%</h4>
                                    <ProgressBar width={optionsCount[index][0] / 5 * 100} color={colors[index]} />
                                    <h4>{optionsCount[index][1] / 5 * 100}%</h4>
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