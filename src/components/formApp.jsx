import React from 'react'

import '../styles/form.css'
import Form from './Form'
import Header from './Header'
import Label from './Label'
import Button from './Button'

function FormApp() {
    return (
        <div className='container'>
            <Header />
            <Form />
            <Label labelName={Name} labelId={Name}/>
            <Label labelName={Email} labelId={Email}/>
            <Label labelName={Message} labelId={Message}/>
            <Button buttonText={Login}/>
        </div>
    )
}

export default FormApp