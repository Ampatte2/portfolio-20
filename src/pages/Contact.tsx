import React, { useReducer } from 'react';
import styled from 'styled-components';
import { useMounted, useSwipeNavigation } from '../utils';
import { HeaderRow, Input, ParallaxStars, Navigation } from '../components';
import { Paths } from '../transitions';
import Mixins from '../mixins';
import emailjs from 'emailjs-com';
import { useFormik } from 'formik';
import { validateEmailForm } from '../utils';

export interface IEmail {
    name: string;
    message : string;
    email_address: string;
    phone_number: string;
}

const initialEmailForm: IEmail = {
    name          : '',
    message       : '',
    email_address : '',
    phone_number  : ''
};

interface IContactProps {
    
}

export const Contact : React.FC<IContactProps> = ({
    
}): React.ReactElement => {
    const [left, right] = useSwipeNavigation(Paths.Projects, Paths.Home);
    const {
        values,
        errors,
        dirty,
        handleChange,
        setFieldValue,
        isValid,
    } = useFormik({
        initialValues      : initialEmailForm,
        validate           : validateEmailForm,
        validateOnChange   : true,
        onSubmit           : () => {},
        enableReinitialize : true,
    });
    
    return (
        <ContactDiv>
            <Navigation
                navigationLeft={left}
                navigationRight={right}
                navigationLeftText='Showcase'
                navigationRightText='Home'
            />
            <ParallaxStars/>
            <Input
                type='text'
                name='name' 
                label='Name'
                onChange={handleChange}
                value={values.name}
            />
            <Input
                type='tel'
                name='phone_number' 
                label='Phone Number'
                onChange={handleChange}
                value={values.phone_number}
                isError={errors.phone_number}
            />
            <Input
                type='text'
                name='message'
                label='Message'
                onChange={handleChange}
                value={values.message}
                isError={errors.message}
            />
            <Input
                type='email'
                name='email_address'
                label='Email'
                onChange={handleChange}
                value={values.email_address}
                isError={errors.email_address}
            />
        </ContactDiv>
    );
};

const ContactDiv = styled.div`
    ${({ theme }) => `background-color: ${theme.colors.background};`}
    ${Mixins.flex('column','center')}
    ${Mixins.scroll}
    position: fixed;
    top: 0;
    left: 0;
    width:100vw;
    height:100vh;
`;