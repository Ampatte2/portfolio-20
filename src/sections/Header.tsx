import React from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import { BaseText, HeaderRow as H } from '../components';
import { flex } from '../globals/Flex';
import { icons } from '../assets/icons';

interface HeaderProps {
    animationDelay: number;
}

export const Header: React.FC<HeaderProps> = ({
    animationDelay,
}): React.ReactElement => {
    const history = useHistory();

    const navToProject = () => {
        history.push('/projects');
    };

    return <HeaderDiv animationDelay={animationDelay}> 
        
        <BaseText
            size="5vmin"
            shadow={1}
            color="background"
            bold>
            Andrew Patterson FullStack Web Developer
        </BaseText>
        <BaseText
            size="3vmin"
            shadow={2}
            color="background"
            margin="20px 0 0 0">
            Intuitive UI/UX, Code Reviews, and Typescript
        </BaseText>
        <HeaderRow
            display={'center'}
            margin="10px 0 0 0"
            padding="10px"
            onClick={navToProject}
        >
            <BaseText
                size="3vmin"
                shadow={2}
                color="background"
            >
                Checkout my deployed projects on 
            </BaseText>
            <BaseText
                size="3vmin"
                shadow={2}
                color="primary"
                margin="0 0 0 5px"
            >
                Heroku and Github
            </BaseText>
            <ProjectsIcon
                as={icons.ArrowForward}
                animationDelay={animationDelay}
            />
        </HeaderRow>
    </HeaderDiv>;
};

interface HeaderDivProps{
    animationDelay?: number;
}

const HeaderDiv = styled.div<HeaderDivProps>`
    position: absolute;
    overflow:hidden;
    left:50%;
    width:100%;
    top:20%;
    ${flex('center')}
    flex-direction: column;
    transform: translate(-50%, -50%);
    animation: headerAnimation 2s ease-in-out forwards;
    animation-delay: ${props => props.animationDelay}s;
    opacity:0;
    @keyframes headerAnimation {
            0% {
               
            }
            100% {
                opacity: 1;
            }
    };
`;

interface ProjectsIconProps {
    animationDelay: number;
}

const ProjectsIcon = styled.svg<ProjectsIconProps>`
    width: 3vh;
    ${({
        theme,
    }): string => `
        color: ${theme.colors.primary};
    `}
    animation: LinkSpin 1s ease-in-out forwards;
    animation-delay: ${props => props.animationDelay + 2}s;
    opacity:0;
    @keyframes LinkSpin {
            0% {
                
                transform: rotate(10deg);
            }
            40% {
                transform: rotate(-10deg);
            }
            100% {
                transform: rotate(0deg);
                opacity:1;
            }
    };
`;

const HeaderRow = styled(H)`
    cursor: pointer;

`;
