import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import AuthProvider from './context/AuthProvider.jsx'
// import React, { useContext } from 'react';
// import { AuthContext } from './context/AuthProvider.jsx'; // CONSUMER COMPONENT - import the context that we created in the PROVIDER COMPONENT

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* Right now this is the CONSUMER COMPONENT(main.jsx) or simply any component can be a consumer component*/}
    <AuthProvider>
       <App /> 
    </AuthProvider>
    {/* The entire app is wrapped inside AuthProvider to give all components access to the context value. */}
  </StrictMode>,
)
