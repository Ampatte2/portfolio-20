import React from 'react';
import { AnimatedDiv, BaseText } from '../components';
import { DimensionsProps } from '../pages';

interface HeaderProps {
    animationDelay: number;
    dimensions: DimensionsProps
}

export const Header: React.FC<HeaderProps> = ({
    animationDelay,
    dimensions,
}): React.ReactElement => {
    return <>
        <AnimatedDiv
            id="main"
            animation="2s ease-out"
            xInitial={-100}
            yInitial={dimensions.height * 0.04}
            xFinal={dimensions.width * 0.05}
            yFinal={dimensions.height * 0.04}
            animationDelay={animationDelay}
            backgroundColor="transparent">
            <BaseText
                size="5vmin"
                shadow={1}
                color="white"
                bold>
                Andrew Patterson
            </BaseText>
        </AnimatedDiv>
        <AnimatedDiv 
            id="second"
            animation="2s ease-out" 
            xInitial={-100}
            yInitial={dimensions.height * 0.10}
            xFinal={dimensions.width * 0.075}
            yFinal={dimensions.height * 0.10}
            animationDelay={animationDelay}
            backgroundColor="transparent">
            <BaseText
                size="4.5vmin"
                shadow={1}
                color="white">
                FullStack Web Developer
            </BaseText>
        </AnimatedDiv>
    </>;
};