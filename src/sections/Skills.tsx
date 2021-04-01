import React, { useCallback } from 'react';
import styled from 'styled-components';
import { BaseText } from '../components';
import { icons } from '../assets/icons';
import Mixins from '../mixins';

const FIRST_SKILLS_ARRAY  = ['React', 'React-Native', 'Svelte', 'Styled-Components', 'Redux'];
const SECOND_SKILLS_ARRAY = ['GraphQL', 'PostGresSQL', 'MySQL', 'MySQL', 'MongoDB', 'Mongoose'];
const THIRD_SKILLS_ARRAY  = ['Node.js', 'Python', 'Docker', 'Github', 'Confluence', 'Jira'];

export const Skills: React.FC = ({
    ...props
}): React.ReactElement => {
    const renderSkillText = useCallback((skills: string[]) => {
        const skillsArrayText = skills.map((skill) => {
            return <BaseText
                size='2.5vmin'
                margin='10px 0'
                shadow={1}
            >
                {skill}
            </BaseText>;
        });
        return skillsArrayText;
    }, []);
    return <SkillsDivContainer {...props}>
        <SectionRow>
            <StyledIcon as={icons.Web}/>
            <TextColumn>
                {renderSkillText(FIRST_SKILLS_ARRAY)}
            </TextColumn>
        </SectionRow>
        <SectionRow>
            <StyledIcon as={icons.Database}/>
            <TextColumn>
                {renderSkillText(SECOND_SKILLS_ARRAY)}
            </TextColumn>
        </SectionRow>
        <SectionRow>
            <StyledIcon as={icons.Server}/>
            <TextColumn>
                {renderSkillText(THIRD_SKILLS_ARRAY)}
            </TextColumn>
        </SectionRow>
    </SkillsDivContainer>;
};

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
    display:grid;
    grid-template-rows: 1fr 1fr;
    grid-template-columns: 1fr 1fr 1fr;
    grid-column-gap: 10px;
`;

const SkillsDivContainer = styled.div`
    display:grid;
    grid-template-rows: 1fr 1fr 1fr;
    width:60vw;
    ${Mixins.media(
        'tablet',
        `
        width:90vw;
    `,
    )}
`;