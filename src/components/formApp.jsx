import React from 'react'
import Form from './Form'
import Header from './Header'
import Label from './Label'
import Button from './Button'

function FormApp() {
  return (
    <div className='container'>
      <Header />
      <Form />
      <Label labelName="Name" labelId="name" isInputOrTextArea={true} />
      <Label labelName="Email" labelId="email" isInputOrTextArea={true} />
      <Label labelName="Message" labelId="message" isInputOrTextArea={false}/>
      <Button buttonText="Login" />
    </div>
  );
}

export default FormApp