import { message } from 'antd';
import { getUserInfo } from '../api/users';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { SetUser } from '../redux/usersSlice';

const ProtectedRoute = ({ children }) => {
  const { user } = useSelector((state) => state.users);
  const dispatch = useDispatch();

  const getUserData = async () => {
    try {
      const response = await getUserInfo();
      if (response.success) {
        message.success(response.message);
        dispatch(SetUser(response.data));
      } else {
        message.error(response.message);
      }
    } catch (error) {
      message.error(error.message);
    }
  };

  useEffect(() => {
    getUserData();
  }, []);

  return (
    <div className='layout'>
      <div className='flex gap-2 h-100'>
        <div className='sidebar'>
          <h1 className='text-xl text-white'>Sidebar</h1>
        </div>
        <div className='body'>
          <div className='header flex justify-between'>
            <i class='ri-close-line'></i>
            <h1 className='text-2xl text-white'>QUIZ PORTAL</h1>
            <h1 className='text-xl text-white'>{user?.name}</h1>
          </div>
          <div className='content'>{children}</div>
        </div>
      </div>
    </div>
  );
};

export default ProtectedRoute;
