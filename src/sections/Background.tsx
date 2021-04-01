import React, { useCallback } from 'react';
import styled from 'styled-components';
import { BaseText } from '../components';
import { icons } from '../assets/icons';
import Mixins from '../mixins';

const FIRST_SKILLS_ARRAY  = ['React', 'React-Native', 'Svelte', 'Styled-Components', 'Redux'];
const SECOND_SKILLS_ARRAY = ['GraphQL', 'PostGresSQL', 'MySQL', 'MySQL', 'MongoDB', 'Mongoose'];
const THIRD_SKILLS_ARRAY  = ['Node.js', 'Python', 'Docker', 'Github', 'Confluence', 'Jira'];

export const Background: React.FC = ({
    ...props
}): React.ReactElement => {
    const renderSkillText = useCallback((skills: string[]) => {
        const skillsArrayText = skills.map((skill) => {
            return <BaseText
                size='2.5vmin'
                margin='10px 0'
                shadow={1}
                lineHeight={0}
            >
                {skill}
            </BaseText>;
        });
        return skillsArrayText;
    }, []);
    return <BackgroundDivContainer {...props}>
        <StyledImage src='archery.png' />
        <TextColumn>
            <BaseText
                size='h1'
                margin='10px 0'
                shadow={1}
                bold
                lineHeight={0}
            >
                Andrew Patterson
            </BaseText>
            <BaseText
                size='h3'
                margin='10px 0'
                shadow={1}
                bold
                lineHeight={0}
            >
                Passionate Front-End Developer
            </BaseText>
            <BaseText
                size='h5'
                shadow={1}
                lineHeight={0}
            >
                Psychology Student who found his passion in developing UI/UX
            </BaseText>
            <BaseText
                size='h5'
                shadow={1}
                lineHeight={0}
            >
                The combination of self taught and industry trained bred a developer ready to tackle any problem
            </BaseText>
        </TextColumn>
    </BackgroundDivContainer>;
};

const StyledImage = styled.img`
    width: 300px;
    height: 300px;
    border-radius: 999px;
`;

const StyledIcon = styled.svg`
    width: 50px;
    margin: auto;
    ${({
        theme,
    }): string => `
        color: ${theme.colors.primary};
    `}
`;

const SectionRow = styled.div`
    display: grid;
    align-items: center;
    margin: 10px 0;
    grid-template-columns: 1fr 3fr;
`;
const TextColumn = styled.div`
    ${Mixins.flex('column', 'left')}
    width: 30vw;
`;

const BackgroundDivContainer = styled.div`
    ${Mixins.flex('row', 'space-between')}
    width:50vw;
    ${Mixins.media(
        'tablet',
        `
        width:90vw;
    `,
    )}
`;