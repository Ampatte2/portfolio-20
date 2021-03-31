import React, { useReducer } from 'react';
import styled from 'styled-components';
import { useMounted, useSwipeNavigation } from '../utils';
import { HeaderRow, Input, ParallaxStars, Navigation, ContactForm } from '../components';
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
    const [left, right]           = useSwipeNavigation(Paths.Projects, Paths.Home);
    const emailContactInformation = (emailFormValues: IEmail) => {
        console.log(emailFormValues);
    };
    
    return (
        <ContactDiv>
            <Navigation
                navigationLeft={left}
                navigationRight={right}
                navigationLeftText='Showcase'
                navigationRightText='Home'
            />
            <ParallaxStars/>
            <ContactForm onSubmit={emailContactInformation}/>
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