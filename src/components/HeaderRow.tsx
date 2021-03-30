import React from 'react';
import styled from 'styled-components';
import Mixins from '../mixins';


interface HeaderRowProps extends React.HTMLAttributes<HTMLDivElement> {
    display?: string;
    padding?: string;
    margin?: string;
    width?: string;
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
   ${({ display, padding, margin, width }): string => { 
        const flexDisplay = display ? Mixins.flex(display) : Mixins.flex('row', 'space-between', 'center');
        return `
        ${flexDisplay}
        padding: ${padding};
        margin: ${margin};
        width: ${width};
    `;}}
`;