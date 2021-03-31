import React from 'react';
import styled from 'styled-components';
import Mixins from '../mixins';
import { BaseText } from './BaseText';
import { Button } from './Button';
import { AnchorLink } from './AnchorLink'; 

interface IInputProps extends React.InputHTMLAttributes<HTMLInputElement>  {
    label?: string;
    description?: React.ReactNode;
    isError?: boolean | string;
    isSuccess?: boolean;
    margin?: string;
}

export const Input : React.FC<IInputProps> = ({
    label,
    description,
    isError,
    isSuccess,
    margin,
    ...props
}): React.ReactElement => (
    <InputContainer margin={margin}>
        {label && <BaseText
            size='h6'
            bold
            margin='0px auto 5px 0px'>{label}</BaseText>}
        <InputElement 
            isError={!!isError}
            isSuccess={isSuccess}
            {...props}
        />
        <ErrorLabel
            id={`${name}-error`}
            isError={!!isError}
        >
            {isError}
        </ErrorLabel>
    </InputContainer>
);

interface IInputContainerProps {
    margin? : string
}

const InputContainer = styled.div<IInputContainerProps>`
    ${Mixins.transition(['opacity'])}
    ${Mixins.flex('column')}
    ${({ theme, margin }) => `
        margin: ${margin};
    `}
    width: 100%;
`;

interface IInputElementProps extends React.InputHTMLAttributes<HTMLInputElement> {
    isError?: boolean;
    isSuccess?: boolean;
}

const InputElement = styled.input<IInputElementProps>`
    ${Mixins.transition(['background-color', 'opacity', 'box-shadow'])}
    font-size: 0.85rem;
    font-weight: bold;
    outline: none;
    border: none;

    // Disabled
    &:disabled {
        cursor: not-allowed;
        opacity: 0.6;
    }

    // Theme Stuff
    ${({ theme }): string => `
        padding: ${theme.dimensions.padding.default};
        border-radius: ${theme.dimensions.radius};
        font-family: ${theme.font.family};
        &:focus {
            box-shadow: ${theme.depth[2]};
        }
    `}

    // Background color
    ${({ theme, isError, isSuccess }): string => {
        if (isError) {
            return `background-color: ${theme.input.error}80;`;
        } else if (isSuccess) {
            return `background-color: ${theme.input.success};`;
        } else {
            return `background-color: ${theme.colors.grey};`;
        }
    }};
`;

interface IErrorLabel {
    isError? : boolean;
}

const ErrorLabel = styled(BaseText)<IErrorLabel>`
    ${Mixins.transition(['max-height', 'opacity'])}
    overflow: hidden;
    max-height: 0;
    opacity: 0;
    transition: all 250ms linear;
    text-align: center;
    ${({ theme }): string => `
        color: ${theme.input.error};
    `}
    ${({ isError }): string =>
        isError
            ? `
        max-height: 30px;
        opacity: 1;
    `
            : 'max-height: 0;'}
`;