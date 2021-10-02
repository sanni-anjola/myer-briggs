import React from "react";
import personalities from '../../data/personalityType.json'


const Result = ({ selection }) => {

    const personality = [["E", "I"], ["S", "N"], ["T", "F"], ["J", "P"]];

    return (

        <div>Result {JSON.stringify(selection)}</div>
    );
}

export default Result;