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
    hoverStyle?: string;
    disabled?: boolean;
    animation?: string;
    size?: string;
    margin?: string;
    shadow?: number;
}

/**
*@param {StyledIcon} icon
*@param {string} color
*@param {string} backgroundColor
*@param {string} border
*@param {string} padding
*@param {boolean} loading
*@param {boolean} full
*@param {function} onClick
*@param {string} hoverStyle
*@param {boolean} disabled
*@param {string} animation
*@param {string} size
*@param {string} margin
*@param {string} shadow
**/
export const Button: React.FC<ButtonProps> = ({
    children,
    icon,
    color,
    backgroundColor,
    border,
    loading,
    disabled,
    animation,
    hoverStyle,
    size,
    padding,
    shadow,
    margin,
    ...props
}): React.ReactElement => {
    return (
        <Main
            disabled={disabled || loading}
            padding={padding}
            animation={animation}
            hoverStyle={hoverStyle}
            backgroundColor={backgroundColor}
            margin={margin}
            {...props}>
            {icon && <Icon as={icon}/>}
            {children && <BaseText
                size={size}
                color={color}>{children}</BaseText>}
            {loading && <Loading loading={loading}/>}
        </Main>
    );
};

const Main    = styled.button<ButtonProps>`
    ${({
        theme,
        disabled,
        full,
        padding,
        animation,
        backgroundColor = 'background',
        border,
        hoverStyle,
        margin,
        shadow
    }): string => `
        cursor: ${disabled ? 'wait' : 'pointer'};
        background: ${theme.colors[backgroundColor] || backgroundColor};
        padding: ${padding ? padding: theme.dimensions.padding.default};
        border: ${border || '0px solid transparent'};
        box-shadow: ${theme.depth[shadow || 0]};
        ${full ? 'width: 100%' : ''};
        &:hover{
            ${hoverStyle};
        };
        margin: ${margin};
        ${animation};
    `}
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