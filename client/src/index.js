import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { GoogleOAuthProvider } from '@react-oauth/google';

 import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <GoogleOAuthProvider clientId='265313542487-ojlhm2ja00ibjd06p1hk1acjapgd9j9t.apps.googleusercontent.com'>
  <React.StrictMode>
   <App/>
  </React.StrictMode>
  </GoogleOAuthProvider>
);
