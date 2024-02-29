import React from 'react';
import '../styles/LoginForm.css';
import Button from './Button';
import InputField from './InputField';

const LoginForm = () => {
  return (
    <form className="login-form">
      <InputField type="text" placeholder="Username" name="username" />
      <InputField type="password" placeholder="Password" name="password" />
      <Button type="submit" text="Login" />
    </form>
  );
};

export default LoginForm;
