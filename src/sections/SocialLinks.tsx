import React, { useCallback } from 'react';
import styled from 'styled-components';
import { AnchorLink } from '../components';
import { icons } from '../assets/icons';
import Mixins from '../mixins';

const GITHUB_LINK    = 'https://github.com/Ampatte2';
const LINKED_IN_LINK = 'https://www.linkedin.com/in/andrewmpatterson/';
const RESUME_LINK    = '/Resume.pdf';
const MAPPED_LINKS   = [{ link: GITHUB_LINK, icon: icons.Github }, { link: LINKED_IN_LINK, icon: icons.LinkedIn }, { link: RESUME_LINK, icon: icons.Document }];

interface ISocialLinksProps {
    hoverColor?: string
}

export const SocialLinks : React.FC<ISocialLinksProps> = ({
    hoverColor = 'background'
}): React.ReactElement => {
    const renderLinks = useCallback(() => {
        const links = MAPPED_LINKS.map(({ link, icon }) => <AnchorLink
            href={link}
            target='_blank'
        > 
            <SocialIcon
                as={icon}
                hoverColor={hoverColor}/>
        </AnchorLink>);
        return links;
    }, []);
    return (
        <IconContainer>
            {renderLinks()}
        </IconContainer>
    );
};

const IconContainer = styled.div`
    ${Mixins.flex('row', 'space-around')}
    width: 200px;
`;

interface ISocialIconProps {
    hoverColor : string
}

const SocialIcon = styled.svg<ISocialIconProps>`
    width: 40px;
    ${({ theme, hoverColor }) => `
        color: ${theme.colors.primary};
        &:hover {
            color: ${theme.colors[hoverColor] || hoverColor}
        };
    `}
`;