import { IEmail } from '../pages';
const VALID_PHONE_NUMBER_MATCH = /^1[0-9]{10}$/;
const VALID_EMAIL_MATCH        = /\S+@\S+\.\S+/;
const ERROR_REQUIRED           = 'Field is Required';
const ERROR_EMAIL              = 'Invalid Email';
const ERROR_PHONE              = 'Invalid Phone Number';

interface IErrors {
    [key: string]: string;
}

export const validateEmailAddress = (email: string, errors: IErrors) => {
    if (email === '') {
        errors.email_address = ERROR_REQUIRED;
    } else if (!email.match(VALID_EMAIL_MATCH)) {
        errors.email_address = ERROR_EMAIL;
    }
};
export const validatePhoneNumber = (phoneNumber: string, errors: IErrors) => {
    if (phoneNumber === '') {
        errors.phone_number = ERROR_REQUIRED;
    } else if (!phoneNumber.match(VALID_PHONE_NUMBER_MATCH)) {
        errors.phone_number = ERROR_PHONE;
    }
};
export const validateMessage = (name: string, errors: IErrors) => {
    if (name === '') {
        errors.name = ERROR_REQUIRED;
    }
};

export const validateEmailForm = (values: IEmail) => {
    const errors: IErrors = {};
    validateMessage(values.message, errors);
    validateEmailAddress(values.email_address, errors);
    validatePhoneNumber(values.phone_number, errors);
    return errors;
};