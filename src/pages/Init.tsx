import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Link as L, useHistory } from 'react-router-dom';
import { AnimatedBackground, BaseText, Button } from '../components';
import Mixins from '../mixins';
import { useTypeWriter } from '../utils/useTypeWriter';

interface IInit {
}
//     <Button
//     backgroundColor='white'
//     onClick={navToProject}
// >
//     Init
//             </Button>;

const INIT_MESSAGES = ['cd Andrew/dev', 'React.sh', 'React-Native.sh', 'GraphQL.sh'];

export const Init : React.FC<IInit> = ({
    
}): React.ReactElement => {
    let loadingInterval: undefined | number;
    const history                                 = useHistory();
    const [currentWordIndex, setCurrentWordIndex] = useState(0);
    const [loadingBarWidth, setLoadingBarWidth]   = useState(0);
    const navToProject                            = () => {
        history.push('/home');
    };
    const { wordArray, wordIndex }                = useTypeWriter(INIT_MESSAGES, 100);
    
    
    useEffect(() => {
        const incrementLoadingBar = () => {
            const nextLoadingBarWidth = loadingBarWidth + 20;
            if (nextLoadingBarWidth < 300) {
                setLoadingBarWidth(loadingBarWidth + 20);
            } else {
                clearInterval(loadingInterval);
                loadingInterval = undefined;
                setLoadingBarWidth(0);
            }
        };
        if (wordIndex < wordArray.length -1) {
            loadingInterval = setInterval(incrementLoadingBar, 20);
        }
        return () => clearInterval(loadingInterval);
    }, [wordIndex, loadingBarWidth]);


    return (
        <LandingDiv>
            <TextDiv>
                {wordArray.map(word => <InitText
                    type='h1'
                    color='#39ff14'
                >
                    {word}
                </InitText>)}
                <LoadingBar width={loadingBarWidth}/>
            </TextDiv>
            
        </LandingDiv>
    );
};

interface ILoadingBar {
    width : number; 
}
const LoadingBar = styled.div<ILoadingBar>`
    height: 5px;
    background-color: green;
    ${({ width }) => `width: ${width}px;`}
`;

const LandingDiv = styled.div`
    background-color: black;
    width:100vw;
    height:100vh;
    ${Mixins.flex('center')}
`;

const TextDiv  = styled.div`
    height: 500px;
    width: 300px;
    ${Mixins.flex('column', 'flex-start')}
`;
const InitText = styled(BaseText)`
    width: 100%;
    text-align: left;
`;