import { useNavigate } from 'react-router-dom';

export const useMenu = () => {
  const navigate = useNavigate();

  const userMenu = [
    {
      title: 'Home',
      paths: ['/'],
      icon: <i className='ri-home-line'></i>,
      onClick: () => navigate('/'),
    },
    {
      title: 'Reports',
      paths: ['/reports'],
      icon: <i className='ri-bar-chart-line'></i>,
      onClick: () => navigate('/reports'),
    },
    {
      title: 'Profile',
      paths: ['/profile'],
      icon: <i className='ri-user-line'></i>,
      onClick: () => navigate('/profile'),
    },
    {
      title: 'Logout',
      paths: ['/logout'],
      icon: <i className='ri-home-line'></i>,
      onClick: () => {
        localStorage.removeItem('token');
        navigate('/login');
      },
    },
  ];

  const adminMenu = [
    {
      title: 'Home',
      paths: ['/'],
      icon: <i className='ri-home-line'></i>,
      onClick: () => navigate('/'),
    },
    {
      title: 'Exams',
      paths: ['/admin/exams', '/admin/exams/add'],
      icon: <i className='ri-bar-chart-line'></i>,
      onClick: () => navigate('/admin/exams'),
    },
    {
      title: 'Reports',
      paths: ['/reports'],
      icon: <i className='ri-bar-chart-line'></i>,
      onClick: () => navigate('/admin/reports'),
    },
    {
      title: 'Profile',
      paths: ['/profile'],
      icon: <i className='ri-user-line'></i>,
      onClick: () => navigate('/profile'),
    },
    {
      title: 'Logout',
      paths: ['/logout'],
      icon: <i className='ri-home-line'></i>,
      onClick: () => {
        localStorage.removeItem('token');
        navigate('/login');
      },
    },
  ];

  return { userMenu, adminMenu };
};
