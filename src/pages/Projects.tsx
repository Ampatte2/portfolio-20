import React, { useRef, useState } from 'react';
import { Link as L, useHistory } from 'react-router-dom';
import styled from 'styled-components';
import { Button, BaseText } from '../components';
import { ProjectsDisplay } from '../sections';
import { useMounted } from '../utils';
import Mixins from '../mixins';
import ReactLoading, { LoadingType } from 'react-loading';
import { icons } from '../assets/icons';

export const Projects = () => {
    const targetRef                 = useRef<HTMLDivElement>(null);
    const [isLoading, setIsLoading] = useState(true);
    const isMounted                 = useMounted();
    const history                   = useHistory();
    const navToProject              = () => {
        history.push('/about');
    };
    
    return (
        <ProjectsDiv ref={targetRef}>
            <BaseText
                type='h1'
                
            >
                Magic the Gathering Deck Builder
            </BaseText>
            <BaseText
                type='paragraph'
            >
                Host on Heroku
            </BaseText>
            {isLoading && <BaseText
                type='paragraph'
            >
                Please allow dynos a second to spin up
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

//<ProjectIframe src='https://mtg-builder-application.herokuapp.com/'/>

interface IProjectIframeContainerProps {
   isLoading : boolean;
}

const IframeContainer = styled.div`
    width: 70vw;
    height: 70vh;

`;

const LoadingBar = styled(ReactLoading)`
    ${Mixins.position('fixed')}
    z-index: 10;
`;

const ProjectsDiv = styled.div`
    width:100vw;
    height:100vh;
    ${Mixins.flex('column', 'center')}
`;



const ProjectIframe = styled.iframe<IProjectIframeContainerProps>`
    ${({ isLoading }) => isLoading ? 'z-index: -1': 'z-index: 1'};
    width: 100%;
    height: 100%;
    background-color:white;
    ${Mixins.scroll}
`;