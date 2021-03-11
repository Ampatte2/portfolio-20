import React, { useRef } from 'react';
import { Link as L, useHistory } from 'react-router-dom';
import styled from 'styled-components';
import { Button } from '../components';
import { ProjectsDisplay } from '../sections';
import { useMounted } from '../utils';
import Mixins from '../mixins';
import { icons } from '../assets/icons';

export const Projects = () => {
    const targetRef    = useRef<HTMLDivElement>(null);
    const isMounted    = useMounted();
    const history      = useHistory();
    const navToProject = () => {
        history.push('/about');
    };
    
    return (
        <ProjectsDiv ref={targetRef}>
            <Button
                backgroundColor='red'
                onClick={navToProject}>
                Projects
            </Button>
        </ProjectsDiv>
    );
};

const ProjectsDiv = styled.div`
    width:100vw;
    height:100vh;
    background-color: blue;
`;