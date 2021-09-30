import React from "react";
import {OurButton,Wrapper, Content} from "./Button.styles";

const Button = ({text}) =>(
    <Wrapper>
        <Content>
            <OurButton> {text}</OurButton>
        </Content>
    </Wrapper>

);
export default Button;

