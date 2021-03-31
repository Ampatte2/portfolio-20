import React, { useState } from 'react';
import styled from 'styled-components';
import { useMounted, useSwipeNavigation } from '../utils';
import { HeaderRow, BaseText, ParallaxStars, Navigation, ContactForm } from '../components';
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

interface IContactProps {
    
}

export const Contact : React.FC<IContactProps> = ({
    
}): React.ReactElement => {
    const [isLoading, setIsLoading] = useState(false);
    const [left, right]             = useSwipeNavigation(Paths.Projects, Paths.Home);
    const emailContactInformation   = (emailFormValues: IEmail) => {
        console.log(emailFormValues);
        setIsLoading(true);
        emailjs.send('service_iurhzo9', 'template_aaqv7vh', emailFormValues, 'user_hRWIdRTR3EOF4pKOTamw1').then(res => {
            console.log(res);
            setIsLoading(false);
        });
    };
    
    return (
        <ContactDiv>
            <Navigation
                navigationLeft={left}
                navigationRight={right}
                navigationLeftText='Showcase'
                navigationRightText='Home'
            />
            <BaseText
                size='h1'
                bold>
                Contact Me
            </BaseText>
            <ParallaxStars/>
            <ContactForm
                onSubmit={emailContactInformation}
                isLoading={isLoading}
                isDisabled={isLoading}
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