import { lazy } from 'react';
// project import
import Loadable from 'components/Loadable';
import MainLayout from 'layout/MainLayout';

// render - students
const Students = Loadable(lazy(() => import('pages/dashboard/students')));
const Create = Loadable(lazy(() => import('pages/dashboard/students/create')));

// ==============================|| MAIN ROUTING||============================== //
const StudentsRoutes = {
  path: '/',
  element: <MainLayout />,
  children: [
    {
      path: 'students', // ruta asignada en menu-items
      element: <Students /> // la vista de estudiantes
    },
    {
      path: 'students/create', // ruta asignada en menu-items
      element: <Create /> // la vista de estudiantes
    }
  ]
};
export default StudentsRoutes;
