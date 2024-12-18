import { Field, Form, Formik } from 'formik'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const Login = ({users, loginUser}) => {
    const navigate = useNavigate()
    const varifyUser = (userData) => {
        const user = users.find((u) => u.login === userData.login)
        
        if(user){
            let isAuth = user.password === userData.password
            if(isAuth){
                loginUser(user)
                navigate(`/profile/${user.id}`, {state : user})
            }
            
        }
        
        
    }
  return (
    <div>
        <Formik
            initialValues={{
                login : '',
                password : ''
            }}
            onSubmit={((values) => varifyUser(values))}
        >
            <Form>
                <Field name='login' placeholder="login"/>
                <Field name='password' placeholder="password"/>
                <button type='submit'>login</button>
            </Form>
        </Formik>
    </div>
  )
}

export default Login