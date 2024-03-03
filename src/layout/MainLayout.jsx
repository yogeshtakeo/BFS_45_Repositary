
import Navbar from '../components/Navbar'
import React from 'react';


function MainLayout({ children }) {
    return (
        <div>
            <Navbar></Navbar>
            <div>{children}</div>
        </div>
    )
}

export default MainLayout