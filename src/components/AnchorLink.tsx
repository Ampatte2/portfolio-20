import React from 'react';
import styled from 'styled-components';
import Mixins from '../mixins';


interface AnchorLinkProps extends React.HTMLAttributes<HTMLAnchorElement> {
    href?: string;
    target?: string;
    margin?: string;
    hoverStyle?: string;
    rel?: string;
}

export const AnchorLink: React.FC<AnchorLinkProps> = ({
    children,
    target,
    href,
    hoverStyle,
    rel,
    ...props
}) => {
    return ( 
        <Anchor
            href={href}
            target={target}
            rel={rel}
            {...props}>
            {children}
        </Anchor>
    );
};

const Anchor = styled.a<AnchorLinkProps>`
    text-decoration: none;
    cursor: pointer;
    ${Mixins.flex('center')}
    margin: ${props => props.margin};
    &:visited {
        color: transparent;
    }
`;