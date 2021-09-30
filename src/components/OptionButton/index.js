
import {Content, OptionText, Wrapper} from "./OptionButton.styles";

export const OptionButton = ({option, colour}) => {
    return (
       <Wrapper>
           <Content>
               <OptionText>
                   {option}
               </OptionText>
            </Content>
         </Wrapper>
    );
};
