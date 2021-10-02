import {useEffect, useRef, useState} from "react";

import questions from '../../data/questions.json'
import {Content, OptionText, Wrapper} from "./OptionButton.styles";

export const OptionButton = (props) => {
    const { selection, question, handleSelected } = props;


    return (
       // <Wrapper>
       //     {props.question.map((ques, index) => {
       //         return (
       //             <div key={props.number + index} onClick={onOptionSelect} >
       //                 <Content  style={{backgroundColor: bgColor}}>
       //                     <OptionText>
       //                         { ques }
       //                     </OptionText>
       //                 </Content>
       //             </div>
       //         );
       //     })}
       //
       //   </Wrapper>
        // var(--semicolonGrey5)
        // '#D8E7FF'
        <Wrapper>
            <div onClick={handleSelected[0]}>
                <Content
                    style={{backgroundColor: `${selection.selected=== 1 ? '#D8E7FF' : 'var(--semicolonGrey5)'}`}}>
                    <OptionText>
                        { props.question[0] }
                    </OptionText>
                </Content>
            </div>
            <div onClick={handleSelected[1]}>
                <Content
                    style={{backgroundColor: `${selection.selected=== 0 ? '#D8E7FF' : 'var(--semicolonGrey5)'}`}}>
                    <OptionText>
                        { props.question[1] }
                    </OptionText>
                </Content>
            </div>

        </Wrapper>
    );
};
