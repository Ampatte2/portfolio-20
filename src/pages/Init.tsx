import React from 'react';
import styled from 'styled-components';
import { Link as L, useHistory } from 'react-router-dom';
import { AnimatedBackground, BaseText, Button } from '../components';

interface IInit {
}

export const Init : React.FC<IInit> = ({
    
}): React.ReactElement => {
    const history      = useHistory();
    const navToProject = () => {
        history.push('/home');
    };
    return (
        <LandingDiv>
            <Button
                backgroundColor='white'
                onClick={navToProject}
            >
                Init
            </Button>
        </LandingDiv>
    );
};

const LandingDiv = styled.div`
    background-color: purple;
    width:100vw;
    height:100vh;
`;