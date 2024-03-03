import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import BlogPage from './pages/BlogPage.jsx';
import ContactPage from './pages/ContactPage.jsx';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
// import './index.css'
// import "./App.css";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "blog",
    element: <BlogPage />,
  },
  {
    path: "contact",
    element: < ContactPage />,
  },



]);



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    
    <RouterProvider router={router} />
  </React.StrictMode>,
)
