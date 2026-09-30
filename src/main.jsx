// main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'; // Make sure this is imported
import App from './App.jsx';
import { AuthProvider } from './auth/AuthProvider.jsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* 1. BrowserRouter MUST be on the outside */}
    <BrowserRouter>
      {/* 2. AuthProvider goes inside so it can use useNavigate() */}
      <AuthProvider>
        <App />
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
);