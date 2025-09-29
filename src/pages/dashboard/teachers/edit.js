import { useState, useEffect } from 'react';
import TeacherForm from './components/teacherForm';

const Edit = () => {
  const teacher = {
    name: 'Juliana',
    lastName: 'Pérez Solis',
    email: 'juliana.psolis@university.edu',
    phone: '3001234567',
    address: 'Calle 10 # 25-16, Barrio San Jose, Bogotá',
    age: 32,
    gender: 'female',
    typeDocument: 'passport',
    numberDocument: 'AB1234567',
    dateBirth: '1985-03-15',
    typeSubject: 'software_development',
    teacher: 'Code of teacher'
  };
  return <TeacherForm teacher={teacher} isEdit />;
};
export default Edit;
