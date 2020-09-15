import React, {useState, useLayoutEffect, useRef, useEffect} from 'react';
import styled from 'styled-components';
import { AnimatedBackground, AnimatedIcon, AnimatedDiv, AnimatedCircle, BaseText } from '../components';
import {flex} from '../globals/Flex';
import {GithubSquare} from '@styled-icons/fa-brands/GithubSquare';
import {ReactLogo} from '@styled-icons/fa-brands/ReactLogo';
import {Nodejs} from '@styled-icons/boxicons-logos/Nodejs';
import {Postgresql} from '@styled-icons/simple-icons/Postgresql';
import {Docker} from '@styled-icons/fa-brands/Docker';
import {Typescript} from '@styled-icons/simple-icons/Typescript';
import {Mongodb} from '@styled-icons/simple-icons/Mongodb';
import {Graphql} from '@styled-icons/simple-icons/Graphql';

const TITLE_ARRAY = ['Github', 'NodeJs', 'Postgresql', 'Docker', 'Typescript', 'MongoDB', 'GraphQL', 'React', 'Andrew Patterson'];


export const Landing = () => {
    const targetRef                   = useRef();
    const [index, setIndex]           = useState(0);
    const [isChecked, setChecked]     = useState(true);
    const [dimensions, setDimensions] = useState({radis: 250, leg: 250});
    
    useLayoutEffect(() => {
        const { height, width } = targetRef.current.getBoundingClientRect();
        const radius            = Math.min(height, width) / 2;
        const leg               = 0.707106781 * radius;
        setDimensions({radius: radius, leg: leg, height: height, width: width});
    },[]);

    useEffect(() => {
        const id = setInterval(() => {
            setIndex(state => state + 1);
        }, 1000);
        setTimeout( () => {
            setChecked(true);
            clearInterval(id);
        }, 10000);
    }, []);

    return (
        <LandingDiv>
            <OpenDiv
                isChecked={isChecked}
                ref={targetRef}>
                <TitleDiv isChecked={isChecked}>
                    {TITLE_ARRAY[index]}
                </TitleDiv>
                <AnimatedIcon
                    id="move1"
                    x={-dimensions.radius}
                    y={0}
                    icon={GithubSquare}/>
                <AnimatedIcon
                    id="move2"
                    x={-dimensions.leg}
                    y={-dimensions.leg}
                    delay={1}
                    icon={Nodejs}/>
                <AnimatedIcon
                    id="move3"
                    x={0}
                    y={-dimensions.radius}
                    delay={2}
                    icon={Postgresql}/>
                <AnimatedIcon
                    id="move4"
                    x={dimensions.leg}
                    y={-dimensions.leg}
                    delay={3}
                    icon={Docker}/>
                <AnimatedIcon
                    id="move5"
                    x={dimensions.radius}
                    y={0}
                    delay={4}
                    icon={Typescript}/>
                <AnimatedIcon
                    id="move6"
                    x={dimensions.leg}
                    y={dimensions.leg}
                    delay={5}
                    icon={Mongodb}/>
                <AnimatedIcon
                    id="move7"
                    x={0}
                    y={dimensions.radius}
                    delay={6}
                    icon={Graphql}/>
                <AnimatedIcon
                    id="move8"
                    x={-dimensions.leg}
                    y={dimensions.leg}
                    delay={7}
                    icon={ReactLogo}/>
            </OpenDiv>
            <AnimatedDiv
                id="main"
                animation="2s ease-out"
                xInitial={-100}
                yInitial={-100}
                xFinal={dimensions.width / 7}
                yFinal={20}>
                <BaseText
                    size="3.2rem"
                    shadow={2}
                    fontFamily="Helvetica"
                    color="white">
                    Andrew Patterson
                </BaseText>
            </AnimatedDiv>
            <AnimatedDiv 
                id="second"
                animation="2s ease-out" 
                xInitial={-100}
                yInitial={100}
                xFinal={dimensions.width / 6.5}
                yFinal={90}>
                <BaseText
                    size="2.5rem"
                    shadow={2}
                    color="white">
                    FullStack Web Developer
                </BaseText>
            </AnimatedDiv>
            <AnimatedCircle
                clipStart={0}
                clipEnd={75}
                id="circle"
                animation="2s ease-out forwards"
                xInitial={-100}
                yInitial={100}
                xFinal={dimensions.width / 6.5}
                yFinal={90}>
                Hello
            </AnimatedCircle>
            <AnimatedBackground/>
        </LandingDiv>
    );
};

const LandingDiv = styled.div`
    width:100%;
    height:100%;
`;

const OpenDiv  = styled.div`
    display: inline;
    width: 100%;
    height: 100%;
    top: 0;
    margin-top: 0;
    left: 0;
    margin-left: 0;
    z-index: 1;
    border-radius: 0;
    ${flex('center')};
    ${({theme, ...props}) => `
        background: ${theme.colors.primary};
        ${props.isChecked && `
            background: ${theme.colors.background};
            border-radius: 50%;
            width: 100%
            height: 0px;
            position: absolute;
            top: 100%;
            
        `}
`}
    transition: all 1.5s ease-in-out;

    
`;
const TitleDiv = styled.div`
    ${({theme}) => `
        background: ${theme.colors.background};
        font-size: ${theme.font.size.h3};
        color: ${theme.colors.primary};
    `};
    ${flex('center')};
    border-radius: 999px;
    width:200px;
    height: 100px;
    border: 1px solid transparent;
    z-index: 2;
    animation: spin 2s ease-in-out;
    animation-delay: 8s;
    @keyframes spin {
            0% {
                transform: scale(1);
            }
            40% {
                transform: rotate(0deg) scale(1.25);
            }
            100% {
                transform: rotate(360deg) scale(1.25);
            }
    };
`;