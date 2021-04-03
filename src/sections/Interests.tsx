import React, { useCallback } from 'react';
import styled from 'styled-components';
import { BaseText } from '../components';
import { icons } from '../assets/icons';
import Mixins from '../mixins';

export const Interests: React.FC = ({
    ...props
}): React.ReactElement => (
    <SkillsDivContainer {...props}>
        <SectionRow>
            <BaseText
                size='h1'
                shadow={1}
            >
                Group Ordering
            </BaseText>
            <TextColumn>
                <BaseText
                    size='h4'
                    margin='15px 0'
                    shadow={1}
                >
                    User feature to be able to order as a group
                </BaseText>
                <DescriptionListItem>Developed in React Native</DescriptionListItem>
                <DescriptionListItem>Worked with backend engineers to create a solution using existing infrastructure</DescriptionListItem>
                <DescriptionListItem>Real time updates for group members</DescriptionListItem>
            </TextColumn>
        </SectionRow>
        <SectionRow>
            <TextColumn>
                <BaseText
                    size='h1'
                    shadow={1}
                >
                    Kitchen Management Mode
                </BaseText>
            </TextColumn>
            <TextColumn>
                <BaseText
                    size='h4'
                    margin='15px 0'
                    shadow={1}
                >
                    Vendor feature to effortlessly view and process orders
                </BaseText>
                <DescriptionListItem>Developed in React</DescriptionListItem>
                <DescriptionListItem>Vendors are able to start preparing orders or complete them</DescriptionListItem>
                <DescriptionListItem>Can see the details of each order and what specific instructions are needed</DescriptionListItem>
            </TextColumn>
        </SectionRow>
        <SectionRow>
            <TextColumn>
                <BaseText
                    size='h1'
                    shadow={1}
                >
                    Distributed Systems Debugging
                </BaseText>
            </TextColumn>
            <TextColumn>
                <BaseText
                    size='h4'
                    margin='15px 0'
                    shadow={1}
                >
                    Debugged Auth Service for mobile application
                </BaseText>
                <DescriptionListItem>Node.js server MongoDB database GraphQL service layer</DescriptionListItem>
                <DescriptionListItem>Setup OAuth, Database, and Verification Service locally</DescriptionListItem>
                <DescriptionListItem>Used Postman to make requests</DescriptionListItem>
            </TextColumn>
        </SectionRow>
        <SectionRow>
            <TextColumn>
                <BaseText
                    size='h1'
                    shadow={1}
                >
                    Typescript Component Library
                </BaseText>
            </TextColumn>
            <TextColumn>
                <BaseText
                    size='h4'
                    margin='15px 0'
                    shadow={1}
                >
                    Configured Rollup Module Bundler
                </BaseText>
                <DescriptionListItem>Aliasing in library was transformed at compile</DescriptionListItem>
                <DescriptionListItem>Modules retained their typing with relative paths</DescriptionListItem>
                <DescriptionListItem>Used Babel, Path Transformer, Styled-Components, and React</DescriptionListItem>
            </TextColumn>
        </SectionRow>
    </SkillsDivContainer>
);

const DescriptionListItem = styled.li`
    ${({ theme }) => `
        color: ${theme.colors.primary};
        font-size: ${theme.font.size.h5};
    `}
    margin-bottom: 15px;
`;

const SectionRow = styled.div`
    width: 100%;
    ${Mixins.flex('column', 'flex-start', 'left')}
`;
const TextColumn = styled.div`
    ${Mixins.flex('column', 'left')}
`;

const SkillsDivContainer = styled.div`
    display:grid;
    grid-template-rows: 1fr 1fr;
    grid-template-columns: 1fr 1fr;
    gap: 50px;
    width:60vw;
    ${Mixins.media(
        'tablet',
        `
        grid-template-columns: 1fr;
        width: 80vw;
    `,
    )}
`;