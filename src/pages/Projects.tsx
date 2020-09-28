import React, { useState, useLayoutEffect, useRef, useEffect } from 'react';
import { Link as L } from 'react-router-dom';
import styled from 'styled-components';
import { AnimatedBackground, AnchorLink, AnimatedCircle, ClipTypes, BaseText } from '../components';
import { ProjectsDisplay } from '../sections';
import { useMounted } from '../utils';
import { flex } from '../globals/Flex';
import { icons } from '../assets/icons';

export const Projects = () => {
    const targetRef = useRef<HTMLDivElement>(null);
    const isMounted = useMounted();

    
    return (
        <ProjectsDiv ref={targetRef}>
            <Link to="/">
                <StyledIcon as={icons.ArrowBack}/>
            </Link>
            <AnimatedBackground/>
            <ProjectsDisplay animationDelay={1}/>
        </ProjectsDiv>
    );
};

const StyledIcon = styled.svg`
    width: 3vh;
    ${({
        theme,
    }): string => `
        color: ${theme.colors.background};
    `}
`;

const ProjectsDiv = styled.div`
    width:100%;
    height:100%;
`;

const Link = styled(L)`
    position: fixed;
    top: 20px;
    left: 20px;
    text-decoration: none;
    cursor: pointer;
    ${flex('center')}
    &:hover {
        opacity: 0.75;
    }
`;
