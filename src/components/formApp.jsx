import React from 'react'

import '../styles/form.css'
import Button from './button'
import Label from './label'
import Form from './form'
import Header from './header'

function App() {
    return (
        <div className='container'>
            <Header />
            <Form />
            <Label />
            <Label />
            <Label />
            <Button />
        </div>
    )
}

export default App