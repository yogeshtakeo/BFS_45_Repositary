import React from 'react'
import "../App.css"

function Layout() {
    return (
        <div className='wrapper'>
            <header className="header">Header</header>
            <div className="side1">Sidebar 1</div>
            <main className="main">Main Content</main>
            <div className="side2">Sidebar 2</div>
            <footer className="footer">Footer</footer>

        </div>
    )
}

export default Layout