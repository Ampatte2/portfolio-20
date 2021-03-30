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

const INIT_MESSAGES = ['cd Andrew/dev', 'cd /typescript', './strongly-typed.sh', 'cd ..', './web-mobile-swipe.sh', 'Portfolio now running...'];

export const Init : React.FC<IInit> = ({
    
}): React.ReactElement => {
    let loadingInterval: undefined | number;
    const history                                 = useHistory();
    const [currentWordIndex, setCurrentWordIndex] = useState(0);
    const [loadingBarWidth, setLoadingBarWidth]   = useState(0);
    const navToProject                            = () => {
        history.push('/home');
    };
    const { wordArray, wordIndex }                = useTypeWriter(INIT_MESSAGES, 100, navToProject);
    
    
    
    useEffect(() => {
        const incrementLoadingBar = () => {
            setLoadingBarWidth(currentBar => {
                const newLoadingBarWidth = currentBar + 20;
                if (newLoadingBarWidth < 300) {
                    loadingInterval = setTimeout(incrementLoadingBar, 20);
                    return newLoadingBarWidth;
                } else {
                    clearTimeout(loadingInterval);
                    loadingInterval = undefined;
                    return 0;
                }
            });
        };
        console.log(wordIndex, currentWordIndex);
        if (wordIndex === currentWordIndex) {
            setCurrentWordIndex(current => current + 1);
            incrementLoadingBar();
        }
    }, [wordIndex, currentWordIndex]);


    return (
        <LandingDiv>
            <TextDiv>
                {wordArray.map(word => <InitText
                    size='h3'
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
    font-family: Ubuntu Mono;
    width: 100%;
    text-align: left;
`;