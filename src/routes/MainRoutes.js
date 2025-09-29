import { lazy } from 'react';

// project import
import Loadable from 'components/Loadable';
import MainLayout from 'layout/MainLayout';

// render - dashboard
const DashboardDefault = Loadable(lazy(() => import('pages/dashboard')));

// render - students
const Students = Loadable(lazy(() => import('pages/dashboard/students')));
const CreateStudent = Loadable(lazy(() => import('pages/dashboard/students/create')));
const EditStudent = Loadable(lazy(() => import('pages/dashboard/students/edit')));

// render - teachers
const Teachers = Loadable(lazy(() => import('pages/dashboard/teachers')));
const CreateTeacher = Loadable(lazy(() => import('pages/dashboard/teachers/create')));
const EditTeacher = Loadable(lazy(() => import('pages/dashboard/teachers/edit')));

// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
  path: '/',
  element: <MainLayout />,
  children: [
    {
      path: '/',
      element: <DashboardDefault />
    },
    {
      path: 'dashboard',
      children: [
        {
          path: 'default',
          element: <DashboardDefault />
        }
      ]
    },
    {
      path: 'students',
      element: <Students />
    },
    {
      path: 'students/create',
      element: <CreateStudent />
    },
    {
      path: 'students/edit/:studentId',
      element: <EditStudent />
    },
    {
      path: 'teachers',
      element: <Teachers />
    },
    {
      path: 'teachers/create',
      element: <CreateTeacher />
    },
    {
      path: 'teachers/edit/:teacherId',
      element: <EditTeacher />
    }
  ]
};

export default MainRoutes;
