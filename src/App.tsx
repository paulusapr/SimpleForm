import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AuthProvider, ProtectRoute } from 'providers/AuthProvider';
import HomePage from 'pages';
import LoginPage  from 'pages/login';
import './styles.scss';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <AuthProvider>
          <ProtectRoute>
            <Routes>
              <Route caseSensitive={false} path='/' element={<HomePage />} />
              <Route caseSensitive={false} path='/login' element={<LoginPage />} />
            </Routes>
          </ProtectRoute>
        </AuthProvider>
      </BrowserRouter>
    </>
  );
};

export default App;
