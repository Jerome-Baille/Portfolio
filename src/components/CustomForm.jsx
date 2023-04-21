import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { TextField } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';

const CustomForm = ({ formData, onSubmit }) => {
    const initialValues = {};
    const validationSchemaFields = {};

    // loop through formData.inputs to create initialValues and validationSchemaFields
    Object.keys(formData.inputs).forEach((key) => {
        const input = formData.inputs[key];
        initialValues[key] = '';
        let validationSchema = Yup.string().required(input.required);

        if (input.type === 'email') {
        validationSchema = validationSchema.email(input.invalid);
        } 

        validationSchemaFields[key] = validationSchema;
    });

    const handleSubmit = (values, {resetForm}) => {
        resetForm();
        onSubmit(values);
    }

    return (
        <Formik
            initialValues={initialValues}
            onSubmit={handleSubmit}
            validationSchema={Yup.object().shape(validationSchemaFields)}
        >
        {({ isSubmitting, isValid, dirty }) => (
            <Form>
                {Object.keys(formData.inputs).map((key, index) => {
                    const input = formData.inputs[key];
                    return (
                        <Field key={key} name={key}>
                            {({ field, meta }) => (
                                <TextField
                                    sx={{ 
                                        '& .MuiOutlinedInput-root': {
                                            '& fieldset': {
                                              borderColor: '#335384',
                                            },
                                            '& input:valid + fieldset': {
                                              borderColor: 'green',
                                              borderWidth: 2,
                                            }
                                          },
                                    }}
                                    id={key}
                                    label={input.label}
                                    type={input.type}
                                    variant="outlined"
                                    required
                                    fullWidth
                                    margin="normal"
                                    multiline={input.type === 'textarea'}
                                    rows={input.type === 'textarea' ? 5 : 1}
                                    {...field}
                                    error={meta.touched && !!meta.error}
                                    helperText={meta.touched && meta.error}
                                />
                            )}
                        </Field>
                    );
                })}
                <button
                    className='flat-button'
                    type="submit"
                    disabled={isSubmitting || !isValid || !dirty } 
                >
                    {formData.btnContact} <FontAwesomeIcon icon={faPaperPlane} />
                </button>
            </Form>
        )}
        </Formik>
    );
};

export default CustomForm;