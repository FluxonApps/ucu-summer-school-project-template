import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router';

import './index.css';
import AuthPage from './pages/AuthPage.tsx';
import DashboardPage from './pages/DashboardPage.tsx';
import FirebaseDemo from './pages/FirebaseDemo.tsx';
import HomePage from './pages/HomePage.tsx';

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
