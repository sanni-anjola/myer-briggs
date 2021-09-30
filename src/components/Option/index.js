
import {
    CardWrapper,
    CardImage,
    CardTextWrapper,
    CardTextDate,
    CardTextTitle,
    CardTextBody,
    CardStatWrapper,
    CardStats,
    LinkText
} from "./Option.styles";
import Tilt from "react-parallax-tilt";
import type {OptionType} from "./OptionType";

export const Option = ({ imgUrl, optionValue,color , option}: OptionType) => {
    return (
        <Tilt>
            <CardWrapper>
                <CardImage background={imgUrl} />
                <CardTextWrapper>
                    {/*<CardTextDate>{date} days ago</CardTextDate>*/}
                    {/*<CardTextTitle>{title}</CardTextTitle>*/}
                    <CardTextBody>
                        {option}
                    </CardTextBody>
                </CardTextWrapper>
            </CardWrapper>
        </Tilt>
    );
};
