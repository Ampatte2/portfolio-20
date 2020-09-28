import React from 'react';
import styled from 'styled-components';
import { OverlayImg, Button, AnchorLink, BaseText as B } from '../components';
import { media } from '../utils';
import { icons } from '../assets/icons';
import { flex } from '../globals/Flex';

interface SkillsDisplayProps {
    animationDelay?: number;
}

export const SkillsDisplay: React.FC<SkillsDisplayProps> = ({
    ...props
}): React.ReactElement => {
    return <SkillsDiv {...props}>
        <Column>
            <StyledIcon as={icons.DesignServices}/>
            <BaseText
                size="3vmin"
                shadow={2}
                color="white"
            >
                React
            </BaseText>
            <BaseText
                size="3vmin"
                shadow={2}
                color="white"
            >
                Angular
            </BaseText>
            <BaseText
                size="3vmin"
                shadow={2}
                color="white"
            >
                Svelte
            </BaseText>
            <BaseText
                size="3vmin"
                shadow={2}
                color="white"
            >
                Vue
            </BaseText>
        </Column>
        <Column>
            <StyledIcon as={icons.Database}/>
            <BaseText
                size="3vmin"
                shadow={2}
                color="white"
            >
                Mongoose
            </BaseText>
            <BaseText
                size="3vmin"
                shadow={2}
                color="white"
            >
                MongoDB
            </BaseText>
            <BaseText
                size="3vmin"
                shadow={2}
                color="white"
            >
                MySQL
            </BaseText>
            <BaseText
                size="3vmin"
                shadow={2}
                color="white"
            >
                PostGresSQL
            </BaseText>
        </Column>
        <Column>
            <StyledIcon as={icons.Server}/>
            <BaseText
                size="3vmin"
                shadow={2}
                color="white"
            >
                Node.js
            </BaseText>
            <BaseText
                size="3vmin"
                shadow={2}
                color="white"
            >
                GraphQL
            </BaseText>
            <BaseText
                size="3vmin"
                shadow={2}
                color="white"
            >
                Node.js
            </BaseText>
            <BaseText
                size="3vmin"
                shadow={2}
                color="white"
            >
                Docker
            </BaseText>
        </Column>
    </SkillsDiv>;
};

const StyledIcon = styled.svg`
    width: 7vmin;
    margin:0 0 20px 0;
    ${({
        theme,
    }): string => `
        color: ${theme.colors.primary};
    `}
`;

const Column    = styled.div`
${flex('center')}
    flex-direction:column;
    
`;
const BaseText  = styled(B)`
    margin-top:10px;
`;
const SkillsDiv = styled.div<SkillsDisplayProps>`
    position: absolute;
    display:grid;
    grid-template-columns: 1fr 1fr 1fr;
    left:50%;
    top:50%;
    transform: translate(-50%, -40%);
    width:60vw;
    height:60vh;
    ${({
        animationDelay,
    }): string => `
        clip-path: ellipse(0%);
        animation: projectsAnimation 4s ease-out forwards;
        animation-delay: ${animationDelay}s;
        opacity:0;
        @keyframes projectsAnimation {
                    0% {
                        clip-path: ellipse(100% 0% at 50% 50%);
                    }
                    100%{
                        opacity:1;
                        clip-path: ellipse(100% 100% at 50% 50%);
                    }
                } `
};
    ${media(
        'tablet',
        `
        width:90vw;
    `,
    )}
`;