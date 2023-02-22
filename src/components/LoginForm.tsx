import React from 'react';
import * as yup from 'yup';
import { Formik } from 'formik';
import { useAuthContext } from 'providers/AuthProvider';

export const LoginForm = () => {
  const { setUser, navigate } = useAuthContext();

  const onSubmit = (values: Record<string, string>) => {
    setUser({
      name: values.username,
    });
    navigate('/');
  };

  return (
    <Formik
      enableReinitialize={true}
      initialValues={{
        username: '',
        password: '',
      }}
      validationSchema={yup.object({
        username: yup.string().required('is required'),
        password: yup.string().required('is required'),
      })}
      onSubmit={async (values, { setSubmitting }) => {
        onSubmit(values);
        setSubmitting(false);
      }}
    >
        {({
          values,
          handleSubmit,
          setFieldValue,
          errors,
        }) => {
          return (
            <form className='flex flex-col p-5 gap-5 justify-center items-center' onSubmit={(e) => { handleSubmit(e); }}>
              <h1 className='text-2xl'>OBS REACTJS TEST</h1>
              <input value={values.username} name='username' onChange={(e: React.ChangeEvent<HTMLInputElement>) => { setFieldValue('username', e.target.value); }} className='border-[1px] border-black-0' />
              <div className='flex flex-col gap-2'>
                <input type='password' value={values.password} name='password' onChange={(e: React.ChangeEvent<HTMLInputElement>) => { setFieldValue('password', e.target.value); }} className='border-[1px] border-black-0' />
                {(errors.username || errors.password) && (
                  <span className="text-red-500">Invalid Credentials</span>
                )}
              </div>
              <button type='submit' className='bg-blue-500 py-2 px-5 rounded text-black-0 text-bold'>Sign In</button>
              <a className='text-blue-500 cursor-pointer'>Forgot My Password</a>
            </form>
          );
        }}
    </Formik>
  );
};
