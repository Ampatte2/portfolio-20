import React from 'react';
import styled from 'styled-components';
import { Link as L, useHistory } from 'react-router-dom';
import { AnimatedBackground, BaseText, Button } from '../components';

interface IAboutProps {
}

export const About : React.FC<IAboutProps> = ({
    
}): React.ReactElement => {
    const history      = useHistory();
    const navToProject = () => {
        history.push('/');
    };
    return (
        <LandingDiv>
            <Button
                backgroundColor='green'
                onClick={navToProject}
            >
                About
            </Button>
        </LandingDiv>
    );
};

const LandingDiv = styled.div`
    background-color: yellow;
    width:100vw;
    height:100vh;
`;