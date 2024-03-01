import React from 'react'
import Form from './form'
import Header from './header'
import Label from './label'
import Button from './button'

function FormApp() {
  return (
    <div className='container'>
      <Header />
      <Form />
      <Label labelName="Name" labelId="name" isInputOrTextArea={true} />
      <Label labelName="Email" labelId="email" isInputOrTextArea={true} />
      <Label labelName="Message" labelId="message" isInputOrTextArea={false}/>
      <Button buttonText="Submit" />
    </div>
  );
}

export default FormApp