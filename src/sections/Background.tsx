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
                Self taught and industry trained developer ready to tackle any problem
            </BaseText>
        </TextColumn>
    </BackgroundDivContainer>;
};

const StyledImage = styled.img`
    width: 300px;
    height: 300px;
    border-radius: 999px;
`;

const TextColumn = styled.div`
    ${Mixins.flex('column', 'left')}
    width: calc(100% - 300px);
    margin-left: 20px;
`;

const BackgroundDivContainer = styled.div`
    ${Mixins.flex('row', 'space-between')}
    width:60vw;
    ${Mixins.media(
        'tablet',
        `
        width: 80vw;
    `,
    )}
    ${Mixins.media(
        'phone',
        `

        ${Mixins.flex('column', 'center')}
    `,
    )}
`;