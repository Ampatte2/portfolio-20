import React from 'react';
import styled from 'styled-components';

export interface BaseTextProps extends React.HTMLAttributes<HTMLParagraphElement>{
    color?: string;
    lineHeight?: number | string;
    bold?: boolean;
    size?:string;
    type?: string;
    margin?: string;
    shadow?: number;
}

export const BaseText: React.FC<BaseTextProps> = ({
    children,
    type,
    ...props
}): React.ReactElement =>{
    return (
        <Text as={type as 'span'} {...props}>
            {children}
        </Text>
    )
}

const Text = styled.p<BaseTextProps>`
    ${({
        theme,
        bold,
        color = "primary",
        size = "default",
        margin,
        lineHeight,
        shadow = 0,
    }): string =>`
        text-shadow: ${theme.depth[shadow]};
        color: ${theme.colors[color] || color};
        font-size: ${theme.font.size[size] || size};
        line-height: ${lineHeight || theme.font.lineHeight};
        font-weight: ${bold ? 'bold' : 'normal'};
        margin: ${margin};
    `}
`