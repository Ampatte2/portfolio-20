import React from 'react';
import styled from 'styled-components';
import Mixins from '../mixins';

interface IHoverable {
    hoverable? : boolean;
    animationId?: string;
    animationTime?: string;
    animationDelay?: string;
    rotationType?: string;
}

interface IFlipContainerProps extends IHoverable {
    width?: string;
    height?: string;
    margin?: string;
}

interface IFlipCardProps extends IFlipContainerProps {
    frontElement? : React.ReactElement;
    frontCardColor?: string;
    backElement?: React.ReactElement;
    backCardColor?: string;
}

export const FlipCard : React.FC<IFlipCardProps> = ({
    frontElement,
    backElement,
    width='300px',
    height='200px',
    animationId='flipcard',
    animationDelay,
    animationTime,
    frontCardColor = 'grey',
    backCardColor = 'secondary',
    margin,
    rotationType = 'rotateY'
}): React.ReactElement => (
    <FlipCardContainer
        width={width}
        height={height}
        animationId={animationId}
        animationTime={animationTime}
        animationDelay={animationDelay}
        margin={margin}
        rotationType={rotationType}>
        <FlipCardInnerContainer 
            animationId={animationId}
            animationTime={animationTime}
            animationDelay={animationDelay}
            rotationType={rotationType}>
            <FlipCardFrontContainer
                backgroundColor={frontCardColor}
            >
                {frontElement}
            </FlipCardFrontContainer>
            <FlipCardBackContainer
                backgroundColor={backCardColor}
                rotationType={rotationType}
            >
                {backElement}
            </FlipCardBackContainer>
        </FlipCardInnerContainer>
    </FlipCardContainer>
);

const FlipCardContainer      = styled.div<IFlipContainerProps>`
    ${({ width, height, hoverable, animationTime, animationDelay, animationId, margin, rotationType }) => `
        width: ${width};
        height: ${height};
        margin: ${margin};
        ${hoverable ? `&:hover {
            transition: transform 0.8s;
            transform-style: preserve-3d;
            transform: ${rotationType}(180deg);
        };
        ` : ''}
        ${animationTime ? `
        animation: ${animationId} ${animationTime} linear forwards;
        animation-delay: ${animationDelay};
        @keyframes ${animationId} {
                0% {
                    transform: ${rotationType}(0deg);
                    transform-style: preserve-3d;
                }
                100%{
                    transform: ${rotationType}(180deg);
                    transform-style: preserve-3d;
                }
            };
        `: ''}
    `}
    background-color: transparent;
    perspective: 1000px;
    
`;
const FlipCardInnerContainer = styled.div<IHoverable>`
    ${({ hoverable, animationTime, animationDelay, animationId, rotationType }) => `
        ${hoverable ? `&:hover {
            transition: transform 0.8s;
            transform-style: preserve-3d;
            transform: ${rotationType}(180deg);
        };` : ''}
        ${animationTime ? `
        animation: ${animationId}inner ${animationTime} linear forwards;
        animation-delay: ${animationDelay};
        @keyframes ${animationId} {
                0% {
                    transform: ${rotationType}(0deg);
                    transform-style: preserve-3d;
                }
                100%{
                    transform: ${rotationType}(180deg);
                    transform-style: preserve-3d;
                }
            };
        `: ''}
    `}
    position: relative;
    width: 100%;
    height: 100%;
    text-align: center;
`;

interface ICardContainer {
    backgroundColor : string;
    rotationType?: string;
}

const FlipCardFrontContainer = styled.div<ICardContainer>`
    position: absolute;
    width: 100%;
    height: 100%;
    ${Mixins.flex('center')}
    ${({ backgroundColor, theme }) => `
        background-color: ${theme.colors[backgroundColor] || backgroundColor};
    `}
    backface-visibility: hidden;
    border-radius: 10px;
`;
const FlipCardBackContainer  = styled.div<ICardContainer>`
    position: absolute;
    width: 100%;
    height: 100%;
    ${Mixins.flex('center')}
    ${({ backgroundColor, theme, rotationType }) => `
        background-color: ${theme.colors[backgroundColor] || backgroundColor};
        backface-visibility: hidden;
        transform: ${rotationType}(180deg);
    `}
    border-radius: 10px;
`;