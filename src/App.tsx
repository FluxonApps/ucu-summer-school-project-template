import { Routes, Route } from 'react-router-dom';

import fluxonLogo from './assets/fluxon-logo.svg';
import AuthPage from './components/AuthPage.tsx';
import DashboardPage from './components/DashboardPage.tsx';
import FirebaseDemo from './components/FirebaseDemo.tsx';
import MainLayout from './components/layout/MainLayout.tsx';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<EventPage />} />
      <Route path="/firebase-demo" element={<FirebaseDemo />} />
      <Route path="/auth" element={<AuthPage />} />
      <Route path="/dashboard" element={<DashboardPage />} />
    </Routes>
  );
};

const EventPage = () => {
  return (
    <MainLayout>
      <div className="flex flex-col gap-4 items-center justify-center h-full">
        <a target="_blank" href="https://fluxon.com">
          <img width={300} src={fluxonLogo} alt="Fluxon logo" />
        </a>
        <p>UCU x Fluxon Product Development Bootcamp</p>
        <div className="flex mt-4 gap-2 text-blue-100">
          <a href="/firebase-demo">Firebase demo</a>
          <p>|</p>
          <a href="/auth">Authenticate</a>
        </div>
      </div>
    </MainLayout>
  );
};
