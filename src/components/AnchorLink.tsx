import React from 'react';
import styled from 'styled-components';
import { flex } from '../globals/Flex';


interface AnchorLinkProps extends React.HTMLAttributes<HTMLAnchorElement> {
    href?: string;
    target?: string;
    margin?: string;
    onHover?: string;
    rel?: string;
}

export const AnchorLink: React.FC<AnchorLinkProps> = ({
    children,
    target,
    href,
    onHover,
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
    ${flex('center')}
    margin: ${props => props.margin};
`;