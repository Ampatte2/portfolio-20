import React from 'react';
import styled, { keyframes } from 'styled-components';

//https://codepen.io/flexdinesh/pen/GxNazP

interface IParallaxStarsProps {
     backgroundColor?: string;
}

const getRandomInteger = () => {
    const randomInteger = Math.floor(Math.random() * 5);
    return randomInteger;
};

const getRandomColor = () => {
    const randomNumber = getRandomInteger();
    let randomColor    = '#663399';
    switch (randomNumber) {
    case 1:
        randomColor = '#22277A';
        break;
    case 2:
        randomColor = '#663399';
        break;
    case 3:
        randomColor = '#D3D3D3';
        break;
    case 4:
        randomColor = '#82E0AA';
        break;
    case 5:
        randomColor = '#85C1E9';
        break;
    default:
        break;
    }
    return randomColor;
};
const getRandomIntegerTwoThousand = () => {
    const randomIntegerTwoThousand = Math.floor(Math.random() * 2000);
    return randomIntegerTwoThousand;
};

const boxShadowArrayReducer = (accumulator: string, currentValue: string): string => {
    return `${accumulator}, ${currentValue}`;
};

const generateBoxShadows = (amount: number): string => {
    const boxShadowArray: string[] = [];
    for (let index = 0; index < amount; index++ ) {
        const boxShadowString = `${getRandomIntegerTwoThousand()}px ${getRandomIntegerTwoThousand()}px ${getRandomColor()}`;
        boxShadowArray.push(boxShadowString);
    }
    const boxShadowString = boxShadowArray.reduce(boxShadowArrayReducer);
    return boxShadowString;
};

export const ParallaxStars : React.FC<IParallaxStarsProps> = ({
    
}): React.ReactElement => {
    
    return (
        <Parallax>
            <FirstStars boxShadows={generateBoxShadows(700)} />
            <SecondStars boxShadows={generateBoxShadows(200)} />
            <ThirdStars boxShadows={generateBoxShadows(100)} />
        </Parallax>
    );
};

const animateStars = keyframes`
    from {
        transform: translateY(-1000px);
    }
    to {
        transform: translateY(0px);
    }
`;

const Parallax = styled.div`
    position: fixed;
    z-index: -1;
    width: 100vw;
    height: 100vh;
`;
interface IStarProps {
  boxShadows : string
}
const FirstStars  = styled.div<IStarProps>`
  width: 2px;
  height: 2px;
  border-radius: 50%;
  background: transparent;
  ${({ boxShadows }) => `box-shadow: ${boxShadows};`}
  animation: ${animateStars} 50s linear infinite;

  &:after {
    content: " ";
    position: absolute;
    top: 2000px;
    width: 2px;
    height: 2px;
    border-radius: 50%;
    background: transparent;
    box-shadow: ${({ boxShadows }) => `box-shadow: ${boxShadows};`};
  }
`;
const SecondStars = styled.div<IStarProps>`
  width: 3px;
  height: 3px;
  border-radius: 50%;
  background: transparent;
  ${({ boxShadows }) => `box-shadow: ${boxShadows};`}
  animation: ${animateStars} 40s linear infinite;

  &:after {
    content: " ";
    position: absolute;
    top: 2000px;
    width: 3px;
    height: 3px;
    border-radius: 50%;
    background: transparent;
    box-shadow: ${({ boxShadows }) => `box-shadow: ${boxShadows};`}
  }
`;
const ThirdStars  = styled.div<IStarProps>`
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background: transparent;
    ${({ boxShadows }) => `box-shadow: ${boxShadows};`}
    animation: ${animateStars} 50s linear infinite;
  
    &:after {
      content: " ";
      position: absolute;
      top: 2000px;
      width: 4px;
      height: 4px;
      border-radius: 50%;
      background: transparent;
      box-shadow: ${({ boxShadows }) => `box-shadow: ${boxShadows};`};
    }
`;