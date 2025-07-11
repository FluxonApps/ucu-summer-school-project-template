import { Link } from 'react-router';

import fluxonLogo from '../assets/fluxon-logo.svg';
import ucuLogo from '../assets/ucu-logo.svg';

import MainLayout from '../components/layout/MainLayout.tsx';

const HomePage = () => {
  return (
    <MainLayout>
      <div className="flex flex-col gap-4 items-center justify-center h-full">
        <div className="flex items-center gap-8">
          <a target="_blank" href="https://ucu.edu.ua/en/">
            <img width={200} src={ucuLogo} alt="UCU logo" />
          </a>
          <div className="text-gray-500 font-medium text-3xl">X</div>
          <a target="_blank" href="https://fluxon.com">
            <img width={250} src={fluxonLogo} alt="Fluxon logo" />
          </a>
        </div>
        <p className="text-white">UCU x Fluxon Product Development Bootcamp</p>
        <div className="flex mt-4 gap-2 text-blue-100">
          <Link to="/firebase-demo">Firebase demo</Link>
          <p>|</p>
          <Link to="/auth">Authenticate</Link>
        </div>
      </div>
    </MainLayout>
  );
};

export default HomePage;
