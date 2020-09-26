import React from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import FormikControl from './FormikControl';
import './css/EnrollmentForm.css';

import db from "../firebase";
import firebase from "firebase";

function EnrollmentForm () {
 

  const initialValues = {
    email: '',
    name: '',
    date: '',
  }

  const validationSchema = Yup.object({
    email: Yup.string()
      .email('Invalid email format')
      .required('Required'),
    name: Yup.string().required('Required'),
    date: Yup.date()
      .required('Required')
      .nullable()
  })

  const onSubmit = values => {
    console.log('Form data', values.date);

    db.collection("reservas").add({

      email: this.values.email,
      name: this.values.name,
      date: this.values.date,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      

      
  });

  
  }



  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
      
    >
      {formik => {
        return (
          <Form >
            <FormikControl
              control='input'
              type='email'
              name='email'
              className="input_form"
              placeholder="Email"
            />
            <FormikControl
              control='input'
              type='string'
              name='name'
              className="input_form"
              placeholder="Nombre"

            />
            <FormikControl
              control='date'
              name='date'
              className='input_form'
              

            />
            <button className="input__button" type='submit' disabled={!formik.isValid}>
              Agendar Hora
            </button>
          </Form>
        )
      }}
    </Formik>
  )
}

export default EnrollmentForm