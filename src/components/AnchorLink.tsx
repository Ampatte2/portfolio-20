import React from 'react';
import styled from 'styled-components';
import { flex } from '../globals/Flex';


interface AnchorLinkProps extends React.HTMLAttributes<HTMLAnchorElement> {
    href?: string;
    target?: string;
    margin?: string;
    onHover?: string;
}

export const AnchorLink: React.FC<AnchorLinkProps> = ({
    children,
    target,
    href,
    onHover = 'opacity: 0.75;',
    ...props
}) => {
    return ( 
        <Anchor
            href={href}
            target={target}
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