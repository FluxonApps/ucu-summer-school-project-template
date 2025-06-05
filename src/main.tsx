import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router';

import './index.css';
import AuthPage from './components/AuthPage.tsx';
import DashboardPage from './components/DashboardPage.tsx';
import FirebaseDemo from './components/FirebaseDemo.tsx';
import HomePage from './components/HomePage.tsx';

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="/firebase-demo" element={<FirebaseDemo />} />
    <Route path="/auth" element={<AuthPage />} />
    <Route path="/dashboard" element={<DashboardPage />} />
  </Routes>
);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  </React.StrictMode>,
);
