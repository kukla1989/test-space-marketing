import React from 'react';
import './App.scss';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Main } from './pages/Main/Main';
import { NotFound } from './pages/NotFound/NotFound';

export const App: React.FC = () => {
  return (
    <div className="starter">
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/home" element={<Navigate to="/" />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};
