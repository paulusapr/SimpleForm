import React from 'react';
import { useAuthContext } from 'providers/AuthProvider';

export const HomeContainer = () => {
  const { user, logout } = useAuthContext();

  return (
    <div className='flex flex-col w-full h-full'>
      <div className='border-b-[1px] border-black-0 py-10 px-5 justify-between flex flex-row'>
        <h1 className='text-2xl'>OBS REACTJS TEST</h1>
        <button onClick={() => { logout(); }}>logout</button>
      </div>
      <div className='flex flex-row w-full h-full'>
        <div className='flex flex-col w-1/6 h-full border-r-[1px] border-black-0'>
          <div className='shadow-0 w-full text-center py-2 bg-blue-500'>Home</div>
        </div>
        <div className='text-2xl flex items-center justify-center w-full h-full'>Welcome {user && user.name || 'Admin'}</div>
      </div>
    </div>
  );
};
