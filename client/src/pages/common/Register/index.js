import { Form } from 'antd';
import { Link } from 'react-router-dom';

const Register = () => {
  const onFinish = () => {};

  return (
    <div className='flex justify-center items-center h-screen w-screen'>
      <div className='card w-400 p-3'>
        <div className='flex flex-col'>
          <h1 className='text-xl'>Register</h1>
          <div className='divider'></div>
          <Form layout='vertical mt-1' onFinish={onFinish}>
            <Form.Item name='name' label='Name'>
              <input type='text' />
            </Form.Item>
            <Form.Item name='email' label='Email'>
              <input type='text' />
            </Form.Item>
            <Form.Item name='password' label='Password'>
              <input type='password' />
            </Form.Item>
            <div className='flex flex-col gap-2'>
              <button
                type='submit'
                className='primary-contained-btn mt-1 w-100'
              >
                Register
              </button>
              <Link to='/login'>Already a member? Login</Link>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Register;
