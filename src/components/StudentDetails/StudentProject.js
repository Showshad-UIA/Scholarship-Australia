import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

const StudentProject = () => {
 const { register, handleSubmit } = useForm();
 const [data, setData] = useState('');
  return (
    <form onSubmit={handleSubmit(data => setData(JSON.stringify(data)))}>
      
      <input {...register('firstName')} placeholder="First name" className='' />
     
      <textarea {...register('aboutYou')} placeholder="About you" className='' />
      <p>{data}</p>
      <input type="submit" />
    </form>
  );
};

export default StudentProject;
