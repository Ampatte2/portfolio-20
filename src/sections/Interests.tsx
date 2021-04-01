import React, { useCallback } from 'react';
import styled from 'styled-components';
import { BaseText } from '../components';
import { icons } from '../assets/icons';
import Mixins from '../mixins';

const HIKING_LINES     = ['I am in love with exploration', 'I have hiked the tallest mountains in Phoenix', 'Hiked the tallest mountain in Arizona'];
const CARD_GAMES_LINES = ['A long time hobby of mine is competing in card games', 'My personal favorite game to play is Magic the Gathering', 'I love the social aspect'];
const ARDUINO_LINES    = ['The combination of physical creation with coding', 'This harkens back to why I fell in love with development', 'The only limit to what I can create is my knowledge'];

export const Interests: React.FC = ({
    ...props
}): React.ReactElement => {
    const renderLines = useCallback((lines: string[]) => {
        const skillsArrayText = lines.map((line) => {
            return <BaseText
                size='2.5vmin'
                margin='10px 0'
                shadow={1}
            >
                {line}
            </BaseText>;
        });
        return skillsArrayText;
    }, []);
    return <SkillsDivContainer {...props}>
        <SectionRow>
            <BaseText
                size='h1'
                shadow={1}
            >
                Hiking
            </BaseText>
            <TextColumn>
                {renderLines(HIKING_LINES)}
            </TextColumn>
        </SectionRow>
        <SectionRow>
            <BaseText
                size='h1'
                shadow={1}
            >
                Card Games
            </BaseText>
            <TextColumn>
                {renderLines(CARD_GAMES_LINES)}
            </TextColumn>
        </SectionRow>
        <SectionRow>
            <BaseText
                size='h1'
                shadow={1}
            >
                Arduino
            </BaseText>
            <TextColumn>
                {renderLines(ARDUINO_LINES)}
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
    width: 100%;
    ${Mixins.flex('row', 'space-between')}
`;
const TextColumn = styled.div`
    ${Mixins.flex('column')}
`;

const SkillsDivContainer = styled.div`
    display:grid;
    grid-template-rows: 1fr 1fr 1fr;
    width:40vw;
    ${Mixins.media(
        'tablet',
        `
        width:90vw;
    `,
    )}
`;