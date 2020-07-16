import React from "react";
import axios from "axios";
import { useForm } from "react-hook-form";

import Button from "../Button";
import { Form, FormGroup, Input } from "../../styles/shared/Form";
import Container from "../../styles/shared/Container";

const LoginComponent = () => {
  const { register, errors, handleSubmit } = useForm();

  console.log(errors);

  const onSubmit = async (data) => {
    try {
      const res = await axios.post("/auth/login", data);
      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <h1>Login Now</h1>
        <FormGroup>
          <label htmlFor="name">Name</label>
          <Input
            type="text"
            placeholder="Enter your name"
            id="name"
            name="name"
            ref={register({ required: true })}
          />
          {errors && errors.name && <p>*Name is required</p>}
        </FormGroup>
        <FormGroup>
          <label htmlFor="email">Email</label>
          <Input
            type="email"
            placeholder="Enter your email"
            id="email"
            name="email"
            ref={register({ required: true })}
          />
          {errors && errors.email && <p>*Email is required</p>}
        </FormGroup>
        <FormGroup>
          <label htmlFor="password">Password</label>
          <Input
            type="password"
            placeholder="Enter your password"
            id="password"
            name="password"
            ref={register({ required: true, minLength: 6 })}
          />
          {errors && errors.password && (
            <p>*Password must be at least 6 character or more</p>
          )}
        </FormGroup>
        <Button block>Login</Button>
      </Form>
    </Container>
  );
};

export default LoginComponent;
