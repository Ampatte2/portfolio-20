import React from 'react';
import styled from 'styled-components';
import { LoaderAlt } from '@styled-icons/boxicons-regular/LoaderAlt';
import { BaseText } from './index';


export interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
    icon?: React.ForwardRefExoticComponent<React.RefAttributes<SVGSVGElement>>;
    color?:string;
    backgroundColor?: string;
    border?: string;
    padding?: string,
    loading?: boolean;
    full?: boolean;
    onClick?: React.MouseEventHandler;
    onHover?: string;
    disabled?: boolean;
    animation?: string;
    size?: string;
    margin?: string;
}

export const Button: React.FC<ButtonProps> = ({
    children,
    icon,
    color,
    backgroundColor,
    border,
    loading,
    disabled,
    animation,
    onHover,
    size,
    padding,
    margin,
    ...props
}): React.ReactElement => {
    return (
        <Main
            disabled={disabled}
            padding={padding}
            animation={animation}
            onHover={onHover}>
            {icon && <Icon as={icon}/>}
            {children && <BaseText size={size}>{children}</BaseText>}
            {loading && <Loading loading={loading}/>}
        </Main>
    );
};

const Main    = styled.button<ButtonProps>`
    ${({
        theme,
        full,
        padding,
        animation,
        backgroundColor = 'background',
        border,
        onHover,
        margin,
    }): string => `
        background: ${theme.colors[backgroundColor] || backgroundColor};
        padding: ${padding ? padding: theme.dimensions.padding.default};
        border: ${border || '0px solid transparent'};
        ${full ? 'width: 100%' : ''};
        &:hover{
            ${onHover}
        };
        margin: ${margin};
        ${animation};
    `}
    cursor: pointer;
    outline: none;
    overflow: hidden;
    z-index:3;
    border-radius: 999px;
    transition: 0.3s ease-in-out;    
`;
const Loading = styled(LoaderAlt)<{ loading: boolean }>`
    animation: spin 1s linear 0s infinite;
    height: 14px;
    width: 14px;
    opacity: 0;
    transition: opacity .25s ease-in-out;
    @keyframes spin {
        from {
            transform: rotate(0deg);
        }
        to {
            transform: rotate(360deg);
        }
    }
    ${({ loading }): string =>
        loading
            ? `
            opacity: 1;
        `
            : ''}
`;
const Icon    = styled.svg`

`;