import React from "react";
import {OurCard, OurCards} from "./Card.styles";

const Card = () => {
    return (
        <OurCards>
            <OurCard>
                <div style={{height: '20vh', backgroundColor: 'var(--semicolonHotRed4)'}}/>
                    <div style={{height: '25vh', backgroundColor:'#FFF2F5'}}>
                        <h2>Complete the Test</h2>
                        <p>Be yourself and answer honestly to find out your personality type</p>
                    </div>
            </OurCard>

            <OurCard>
                <div style={{height: '20vh', backgroundColor: 'var(--semicolonAquaBlue3)'}}/>
                <div style={{height: '25vh', backgroundColor:'var(--semicolonAquaBlue5)'}}>
                    <h2>View Results</h2>
                    <p>Find out how many areas of your life are influenced by your personality</p>
                </div>
            </OurCard>
        </OurCards>
    );
}

export default Card;