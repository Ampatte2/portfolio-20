import React from 'react';
import styled from 'styled-components';
import Mixins from '../mixins';


interface HeaderRowProps extends React.HTMLAttributes<HTMLDivElement> {
    display?: string;
    padding?: string;
    margin?: string;
}

export const HeaderRow: React.FC<HeaderRowProps> = ({
    children,
    ...props
}) => {
    return ( 
        <Header
            {...props}>
            {children}
        </Header>
    );
};

const Header = styled.div<HeaderRowProps>`
   ${({ display, padding, margin }): string => `
        ${Mixins.flex(display || 'center')}
        padding: ${padding};
        margin: ${margin};
    `}
`;