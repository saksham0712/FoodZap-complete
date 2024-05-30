import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Header from '../../components/layout/Header'
import { useForm } from 'react-hook-form';
import axios from 'axios';
import '../../styles/signup.css'
import table from '../../assets/signup/land.jpeg'

const SignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

//   const onSubmit = (formData) => console.log(formData);

  const onSubmit = async (formData) => {
    try {
      const response = await axios.get('http://localhost:3001/users');
      if (response && response.data && response.data.user) {
        const resData = response.data.user;
        const findRes = resData.find((item) => item.email === formData.email && item.Password === formData.Password)
        console.log(findRes)
        if (findRes === undefined) {
            // const formdatajson = JSON.stringify(formData);
          await axios.post('http://localhost:3001/users', formData); // Pass only formData to 
          alert('User created successfully');

        } else {
          alert('User already exists');
        }
      } else {
        alert('No data received from server');
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
    <Header />
    <div className="signup">
        <img src={table} alt="background image" />
        
    <div className='form-container'>

      <Form  onSubmit={handleSubmit(onSubmit)}>
        <h1>Sign Up</h1>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Name</Form.Label>
        <Form.Control type="name" className='input' {...register('Name', { required: true, maxLength: 20 })} placeholder="Enter Name" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" className='input' {...register('email', { required: true })} placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>


      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Phone number</Form.Label>
        <Form.Control className='input' type="number" {...register('phoneNum', { required: true, maxLength: 10 })} placeholder="Enter Phone" />
      </Form.Group>


      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter your date of birth</Form.Label>
        <Form.Control type="text" className='input' {...register('DOB', { required: true })} placeholder="Enter Date of birth" />
      </Form.Group>


      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" {...register('Password', { required: true })} placeholder="Password" />
      </Form.Group>

      <Button variant="primary" className="btn btn_red rounded-0" type="submit">
        Submit
      </Button>
        
      </Form>
    </div>
    </div>
    </>
  );
};

export default SignUp;
