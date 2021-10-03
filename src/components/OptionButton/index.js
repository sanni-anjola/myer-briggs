import {Content, OptionText, Wrapper} from "./OptionButton.styles";

export const OptionButton = (props) => {
    const { selection, handleSelected } = props;


    return (

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
