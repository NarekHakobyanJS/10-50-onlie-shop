import React from 'react'
import style from './OrederForm.module.css'
import {Formik, Form, Field} from 'formik'

const address = ['Yerevan', "Gyumri", "Vanadzor"]

const OrederForm = () => {
  return (
    <div>
       <Formik
        initialValues={{
            name : '',
            email : '',
            address : ''
        }}
        onSubmit={(value) => console.log(value)}
       >
         <Form>
            <Field name="name" placeholder="name"/>
            <Field name="email" placeholder="email"/>
            <Field as='select' name='address'>
                {
                    address.map((add) => {
                        return <option key={add}>{add}</option>
                    })
                }
            </Field>
            <button type='submit'> Buy </button>
        </Form>   
       </Formik>
    </div>
  )
}

export default OrederForm