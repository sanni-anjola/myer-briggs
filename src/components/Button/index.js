import React from "react";
import {OurButton,Wrapper, Content} from "./Button.styles";

const Button = ({ text, disabled }) =>(

    <Wrapper>
        <Content>
            <OurButton style={{display:`${disabled ? 'none' : ''}`}}>{ text }</OurButton>
        </Content>
    </Wrapper>

);
export default Button;

