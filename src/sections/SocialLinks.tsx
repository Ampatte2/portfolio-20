import React from 'react';
import styled from 'styled-components';
import { AnchorLink } from '../components';
import { icons } from '../assets/icons';
import Mixins from '../mixins';

const GITHUB_LINK    = 'https://github.com/Ampatte2';
const LINKED_IN_LINK = 'https://www.linkedin.com/in/andrewmpatterson/';
const RESUME_LINK    = '/Resume.pdf';

interface ISocialLinksProps {
}

export const SocialLinks : React.FC<ISocialLinksProps> = ({
    
}): React.ReactElement => {
    
    return (
        <IconContainer>
            <AnchorLink
                href={GITHUB_LINK}
                target='_blank'> 
                <SocialIcon as={icons.Github}/>
            </AnchorLink>
            <AnchorLink
                href={LINKED_IN_LINK}
                target='_blank'> 
                <SocialIcon as={icons.LinkedIn}/>
            </AnchorLink>
            <AnchorLink
                href={RESUME_LINK}
                target='_blank'> 
                <SocialIcon as={icons.Document}/>
            </AnchorLink>
        </IconContainer>
    );
};

const IconContainer = styled.div`
    ${Mixins.flex('row', 'space-around')}
    width: 200px;
`;

const SocialIcon = styled.svg`
    width: 40px;
    ${({ theme }) => `
        color: ${theme.colors.primary}
    `}
`;