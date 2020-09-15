import React from 'react'
import styled, { keyframes } from 'styled-components';
import {top, bot, mid } from '../assets/images';

export const AnimatedBackground = () => {
    return (
        <>
        <Wrapper>
            <WrapperInner index={15} opacity={0.5}>
                <Wave img={top} time="3s" size="50% 100px"/>
            </WrapperInner>
            <WrapperInner index={10} opacity={0.75}>
                <Wave img={mid} time="10s" size="50% 120px" />
            </WrapperInner>
            <WrapperInner index={5}>
                <Wave img={bot} time="15s" size="50% 100px"/>
            </WrapperInner>
        </Wrapper>
        
        </>
    )
}

const frames = keyframes`
    0% {
        transform: translateX(0) translateZ(0) scaleY(1)
    }
    50% {
        transform: translateX(-25%) translateZ(0) scaleY(0.55)
    }
    100% {
        transform: translateX(-50%) translateZ(0) scaleY(1)
    }
`

const Wrapper = styled.div`
    overflow: hidden;
    position: absolute;
    z-index:-1;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
    margin: auto;
`
const WrapperInner = styled.div`
    position: absolute;
    width: 100%;
    overflow: hidden;
    height: 100%;
    bottom: -1px;
    background-image: ${({theme}) =>`
        linear-gradient(to top, ${theme.colors.primary} 5%, ${theme.colors.secondary} 95%);
    `}
    z-index: ${props=> props.index};
    opacity: ${props=> props.opacity ? props.opacity : 1};
`
const Wave = styled.div`
    position: absolute;
    left: 0;
    width: 200%;
    height: 100%;
    background-repeat: repeat no-repeat;
    background-position: 0 bottom;
    transform-origin: center bottom;
    background-image: url('${props=>props.img}');
    background-size: ${props=> props.size};
    animation-name: ${frames};
    animation-duration:${props=> props.time};
    animation-iteration-count: infinite;
    animation-timing-function: linear;
`