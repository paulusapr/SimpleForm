import React from 'react';
import { LoginForm } from 'components/LoginForm';

export const LoginContainer = () => {
  return (
    <div className='flex w-full h-full items-center justify-center'>
      <div className='flex w-3/6 shadow-0 p-5 items-center justify-center'>
        <LoginForm />
      </div>
    </div>
  );
};
