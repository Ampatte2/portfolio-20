import React, { useRef, useState } from 'react';
import { Link as L, useHistory } from 'react-router-dom';
import styled from 'styled-components';
import { Button, BaseText, FlipCard, Navigation } from '../components';
import { Paths } from '../transitions';
import { useMounted, useSwipeNavigation } from '../utils';
import Mixins from '../mixins';
import ReactLoading from 'react-loading';

export const Projects = () => {
    const [left, right]             = useSwipeNavigation(Paths.About, Paths.Contact);
    const [isLoading, setIsLoading] = useState(true);
    
    return (
        <ProjectsDiv>
            <Navigation
                navigationLeft={left}
                navigationRight={right}
                navigationLeftText='About'
                navigationRightText='Contact'
            />
            {isLoading && <BaseText
                type='paragraph'
            >
                Loading Please Wait
            </BaseText>}
            <IframeContainer>
                <ProjectIframe
                    isLoading={isLoading}
                    src='https://mtg-builder-application.herokuapp.com/'
                    onLoad={() => setIsLoading(false)}/>
            </IframeContainer>
            {isLoading && <LoadingBar
                type='bars'
                color='black'/>}
        </ProjectsDiv>
    );
};

interface IProjectIframeContainerProps {
   isLoading : boolean;
}

const IframeContainer = styled.div`
    width: calc(100vw - 80px);
    height: 85vh;
    ${Mixins.media('tablet', ' overflow-x: hidden;')}
`;

const LoadingBar = styled(ReactLoading)`
    ${Mixins.position('fixed')}
    z-index: 8;
`;

const ProjectsDiv = styled.div`
    width: 100vw;
    height:100vh;
    ${Mixins.flex('column', 'center')}
`;

const ProjectIframe = styled.iframe<IProjectIframeContainerProps>`
    ${({ isLoading }) => isLoading ? 'z-index: -1': 'z-index: 1'};
    width: 100%;
    height: 100%;
    scrollbar-face-color: red;
    background-color: white;
    margin: 0;
    padding: 0;
    border: none;
    box-shadow: 1px 1px 3px 3px rgba(0, 0, 255, .2);
    ${Mixins.scroll}
`;