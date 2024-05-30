import React, { useState } from 'react'
import { useForm } from "react-hook-form"
import axios from 'axios'
import { useNavigate, Link } from 'react-router-dom'
import Cookies from 'js-cookie'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Header from '../../components/layout/Header'
import table from '../../assets/login/table.jpeg'
import '../../styles/login.css'


const Login = () => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
      } = useForm()

      const navigate = useNavigate();
const [LoggedIn, setLoggedIn] = useState(false)

      const onSubmit = (dataAya) => {
        
           axios.get('https://foodzap-server.vercel.app/users')
            .then(response => {
           const resdata = response.data.user;
           const findres = resdata.find(item => item.email == dataAya.email && item.Password == dataAya.Password)
           console.log(findres)
           if(findres !== undefined){
            alert('logged inn')
            setLoggedIn(true);
            navigate('/')
           Cookies.set('Loggedin', true)
           Cookies.set('name', findres.name)
           }else (
            alert('galt password hun thodi kher nahi')
           )
            })
            .catch(err => {
              console.log(err);
            
          });

    }
      
  return (
    <>
    <Header />
    <div className="login">
    <img src={table} alt="background image" />
    <div className='form-container1'>
   <Form onSubmit={handleSubmit(onSubmit)}>
    <h1>Login</h1>


    <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" className='input' {...register("email", { required: true })} placeholder="Enter email" />
      </Form.Group>


      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" {...register('Password', { required: true })} placeholder="Password" />
      </Form.Group>

      <Button variant="primary" className='btn btn_red rounded-0' type="submit">
        Login
      </Button>
   </Form>
    <div className="nichpara">If don't have a account? <Link className='signup-link' to="/Signup">SignUp</Link></div>
   </div>
    </div>
    </>
  )
}

export default Login
