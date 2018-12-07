import React from 'react';
import {Form} from "formik";
import styled from "styled-components";
import SubmitError from "../../../components/form/submitError/submitError";
import Input from "../../../components/form/input/input";
import ValidationError from "../../../components/form/validationError/validationError";
import FormGroup from "../../../components/form/formGroup/formGroup";
import Button from "../../../components/Button/Button";
import isEmpty from "lodash.isempty";

const contactForm = ({ className, errors, isSubmiting, dirty, touched, match, submitState, message }) => {
    return (
        <Form className={className}>
            {
                submitState && (<SubmitError error={submitState}>{ message }</SubmitError>)
            }

            <FormGroup>
                <Input
                    type={'text'}
                    name={'name'} invalid={errors.name && touched.name ? 1 : 0}
                    placeholder={'nombre'}
                />
                <ValidationError name={'name'}/>
            </FormGroup>

            <FormGroup>
                <Input
                    type={'text'}
                    name={'lastname'} invalid={errors.lastname && touched.lastname ? 1 : 0}
                    placeholder={'apellido'}
                />
                <ValidationError name={'lastname'}/>
            </FormGroup>

            <FormGroup>
                <Input
                    type={'text'}
                    name={'phone'} invalid={errors.phone && touched.phone ? 1 : 0}
                    placeholder={'telefono'}
                />
                <ValidationError name={'phone'}/>
            </FormGroup>

            <FormGroup>
                <Input
                    type={'text'}
                    name={'email'} invalid={errors.email && touched.email ? 1 : 0}
                    placeholder={'email'}
                />
                <ValidationError name={'email'}/>
            </FormGroup>

            <FormGroup>
                <Input
                    component={'textarea'}
                    name={'message'} invalid={errors.message && touched.message ? 1 : 0}
                    placeholder={'mensaje'}
                    style={{height: '200px'}}
                />
                <ValidationError name={'message'}/>
            </FormGroup>

            <Button
                type={'submit'}
                disabled={isSubmiting || !isEmpty(errors) || !dirty}
            >
                enviar</Button>
        </Form>
    );
};

const ContactForm = styled(contactForm)`
  width: 40%;
  margin: 20px auto;
`;

export default ContactForm;
