// assets
import { UserOutlined, UserAddOutlined } from '@ant-design/icons';
// icons
const icons = {
  UserOutlined,
  UserAddOutlined
};
// ==============================|| MENU ITEMS - TEACHERS ||============================== //
const teachers = {
  id: 'teachers',
  title: 'Teachers',
  type: 'group',
  children: [
    {
      id: 'teachers',
      title: 'Teachers', // titulo de como se vera en el menu
      type: 'item',
      url: '/teachers', // hacia donde se dirige el menu
      icon: icons.UserOutlined, // icono
      breadcrumbs: false
    }
  ]
};
export default teachers;
