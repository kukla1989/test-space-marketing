import React from 'react';
import './styles/App.scss';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Main } from './pages/Main/Main';
import { NotFound } from './pages/NotFound/NotFound';
import HeaderTop from './components/HeaderTop/HeaderTop';
import Header from './components/Header/Header';

export const App: React.FC = () => {
  return (
    <div className="app">
      <HeaderTop />
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/home" element={<Navigate to="/" />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};
