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
}

export const Input : React.FC<IInputProps> = ({
    label,
    description,
    isError,
    isSuccess,
    ...props
}): React.ReactElement => (
    <InputContainer>
        {label && <Label>{label}</Label>}
        <InputElement 
            isError={!!isError}
            isSuccess={isSuccess}
            {...props}
        />
        <ErrorLabel
            id={`${name}-error`}
            isError={!!isError}>
            {isError}
        </ErrorLabel>
    </InputContainer>
);

const InputContainer = styled.div`
    ${Mixins.transition(['opacity'])}
    ${Mixins.flex('column')}
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
            box-shadow: ${theme.depth[1]};
        }
    `}

    // Background color
    ${({ theme, isError, isSuccess }): string => {
        if (isError) {
            return `background-color: ${theme.input.error};`;
        } else if (isSuccess) {
            return `background-color: ${theme.input.success};`;
        } else {
            return `background-color: ${theme.input.default};`;
        }
    }};
`;

const Label = styled.label`
    font-size: 0.9rem;
    font-weight: bold;
    margin-bottom: 5px;
`;

interface IErrorLabel {
    isError? : boolean;
}

const ErrorLabel = styled(Label)<IErrorLabel>`
    ${Mixins.transition(['max-height', 'opacity'])}
    overflow: hidden;
    margin-top: 5px;
    max-height: 0;
    opacity: 0;
    color: red;
    transition: all 0.3s linear;
    ${({ isError }): string =>
        isError
            ? `
        max-height: 20px;
        opacity: 1;
    `
            : ''}
`;