import React, { useState, useLayoutEffect, useRef, useEffect } from 'react';
import styled from 'styled-components';
import { AnimatedBackground, AnimatedDiv, AnimatedCircle, ClipTypes, BaseText } from '../components';
import { LandingIntro } from './index';
import { useMounted } from '../utils';

export interface DimensionsProps {
    radius: number;
    leg: number;
    height: number;
    width: number;
}

export const Landing = () => {
    const targetRef                   = useRef<HTMLDivElement>(null);
    const isMounted                   = useMounted();
    const [index, setIndex]           = useState(0);
    const [isChecked, setChecked]     = useState(false);
    const [dimensions, setDimensions] = useState<DimensionsProps>({ radius: 250, leg: 250, height: 250, width: 250 });

    useLayoutEffect(() => {
        if (targetRef.current){
            const { height, width } = targetRef.current.getBoundingClientRect();
            const radius            = Math.min(height, width) / 2;
            const leg               = 0.707106781 * radius;
            if(isMounted){
                setDimensions({ radius: radius, leg: leg, height: height, width: width });
            }
        }
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
        <LandingDiv ref={targetRef}>
            <LandingIntro dimensions={dimensions} index={index} isChecked={isChecked}/>
            <AnimatedDiv
                id="main"
                animation="2s ease-out"
                xInitial={-100}
                yInitial={-100}
                xFinal={dimensions.width / 7}
                yFinal={30}
                animationDelay={11}>
                <BaseText
                    size="3.2rem"
                    shadow={2}
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
                yFinal={100}
                animationDelay={11}>
                <BaseText
                    size="2.5rem"
                    shadow={2}
                    color="white">
                    FullStack Web Developer
                </BaseText>
            </AnimatedDiv>
            <AnimatedCircle
                clipStart="43% 0% at 50% 50%"
                clipEnd="43% 30% at 50% 50%"
                id="circle"
                animation="2s ease-out forwards"
                xInitial={-100}
                yInitial={100}
                xFinal={dimensions.width / 6.5}
                yFinal={-400}
                width='300px'
                height='200px'
                type={ClipTypes.ELLIPSE}
                animationDelay={12}
                backgroundColor="secondary">
                <BaseText>
                    Github
                </BaseText>
            </AnimatedCircle>
            <AnimatedBackground/>
        </LandingDiv>
    );
};

const LandingDiv = styled.div`
    width:100%;
    height:100%;
`;

