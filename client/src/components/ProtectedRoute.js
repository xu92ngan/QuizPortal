import { message } from 'antd';
import { getUserInfo } from '../api/users';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { SetUser } from '../redux/usersSlice';
import { useMenu } from '../common/constants/useMenu';

const ProtectedRoute = ({ children }) => {
  const { user } = useSelector((state) => state.users);
  const menuItem = useMenu();
  const [menu, setMenu] = useState([]);
  const dispatch = useDispatch();
  const activeRoute = window.location.pathname;
  const [collapsed, setCollapsed] = useState(false);

  const getIsActive = (paths) => {
    return paths.includes(activeRoute);
  };

  const getUserData = async () => {
    try {
      const response = await getUserInfo();
      if (response.success) {
        message.success(response.message);
        dispatch(SetUser(response.data));
        if (response.data.isAdmin) {
          setMenu(menuItem.adminMenu);
        } else {
          setMenu(menuItem.userMenu);
        }
      } else {
        message.error(response.message);
      }
    } catch (error) {
      message.error(error.message);
    }
  };

  useEffect(() => {
    getUserData();
    // eslint-disable-next-line
  }, []);

  return (
    <div className='layout'>
      <div className='flex gap-2 h-100'>
        <div className='sidebar'>
          <div className='menu'>
            {menu.map((item, index) => {
              return (
                <div
                  className={`menu-item ${
                    getIsActive(item.paths) && 'active-menu-item'
                  }`}
                  key={index}
                  onClick={item.onClick}
                >
                  {item.icon}{' '}
                  {!collapsed && (
                    <span className='text-white'>{item.title}</span>
                  )}
                </div>
              );
            })}
          </div>
        </div>
        <div className='body'>
          <div className='header flex justify-between'>
            {!collapsed && (
              <i
                className='ri-close-line'
                onClick={() => setCollapsed(true)}
              ></i>
            )}
            {collapsed && (
              <i
                className='ri-menu-line'
                onClick={() => setCollapsed(false)}
              ></i>
            )}
            <h1 className='text-2xl text-white'>QUIZ PORTAL</h1>
            <div className='flex gap-1 items-center'>
              <i className='ri-user-line'></i>
              <h1 className='text-md text-white underline'>{user?.name}</h1>
            </div>
          </div>
          <div className='content'>{children}</div>
        </div>
      </div>
    </div>
  );
};

export default ProtectedRoute;
