import React from "react";
import Card from "../Card";
import Button from "../Button";

const BeginTest = ({ setSession }) => {
    return (
        <div>
            <div style={{textAlign: 'center'}}>
                <h1 style={{color: 'black', marginBottom: '0'}}>Free Personality Test</h1>
            </div>
            <Card />
            <div style={{textAlign: 'right'}}
                 onClick={() => setSession(1)}
            >
            <Button text="Start"/>
            </div>
        </div>
    );
}

export default BeginTest;