
import React, { useCallback } from 'react';
import styled from 'styled-components';
import { useFormik } from 'formik';
import { validateEmailForm } from '../utils';
import { Input } from './Input';
import { Button } from './Button';
import Mixins from '../mixins';

interface IContactFormProps {
    onSubmit: (formData: any) => void;
    isDisabled?: boolean;
    isLoading?: boolean;
}

const initialEmailForm = {
    name          : '',
    message       : '',
    email_address : '',
    phone_number  : ''
};

export const ContactForm : React.FC<IContactFormProps> = ({
    onSubmit,
    isDisabled,
    isLoading
}): React.ReactElement => {
    const {
        values,
        errors,
        dirty,
        handleChange,
        isValid,
    } = useFormik({
        initialValues      : initialEmailForm,
        validate           : validateEmailForm,
        validateOnChange   : true,
        onSubmit           : () => {},
        enableReinitialize : false,
    });
    const submitForm           = () => {
        onSubmit(values);
    };
    const isSubmissionDisabled = useCallback(() => {
        if (!dirty || !isValid || isDisabled) {
            return true;
        } else {
            return false;
        }
    }, [dirty, isValid, isDisabled]);

    return (
        <ContactFormContainer>
            <Input
                margin='5px auto'
                type='text'
                name='name' 
                label='Name'
                placeholder='Your Name'
                onChange={handleChange}
                value={values.name}
                disabled={isDisabled}
            />
            <Input
                margin='5px auto'
                type='tel'
                name='phone_number' 
                label='Phone Number'
                placeholder='10 Digit Phone number'
                onChange={handleChange}
                value={values.phone_number}
                isError={errors.phone_number}
                disabled={isDisabled}
            />
            <Input
                margin='5px auto'
                type='textarea'
                name='message'
                label='Message'
                placeholder='What can I help you with'
                onChange={handleChange}
                value={values.message}
                isError={errors.message}
                disabled={isDisabled}
            />
            <Input
                margin='5px auto'
                type='email'
                name='email_address'
                label='Email'
                placeholder='Email@email.com'
                onChange={handleChange}
                value={values.email_address}
                isError={errors.email_address}
                disabled={isDisabled}
            />
            <Button
                disabled={isSubmissionDisabled()}
                loading={isLoading}
                onClick={submitForm}
                backgroundColor='primary'
                color='background'
                margin='10px 0px 0px auto'
            >
                Submit
            </Button>
        </ContactFormContainer>
    );
};
const ContactFormContainer = styled.div`
    ${Mixins.flex('column', 'center')}
    width: 20vw;
    ${Mixins.media('tablet', 'width: 50vw;')}
    ${Mixins.media('phone', 'width: 80vw;')}
`;
