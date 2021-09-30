import React from "react";


import {Content, OptionText, PersonalityImg, Text, Wrapper, CardContainer, Separator} from "./Options.styles";
import {Option} from "../Option";

import {TMDBLogoImg} from "../Header/Header.styles";
import type {OptionType} from "../Option/OptionType";
import type {OptionsType} from "./OptionsType";

const Options = ({optionA, optionB}: OptionsType)=>(
    // <Wrapper>
        <Content>

            <CardContainer>
                <Option option= {optionA} />
                <Separator />
                <Option optionB = {optionB}/>
            </CardContainer>
            {/*<Text >*/}
            {/*/!*<p>{optionText}</p>*!/*/}
            {/*</Text>*/}
        </Content>
    // </Wrapper>
);

export default Options;
