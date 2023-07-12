import { Route, Routes } from 'react-router-dom';
import Login from './pages/common/Login';
import Register from './pages/common/Register';

function App() {
  return (
    <Routes>
      <Route path='/login' element={<Login />} />
      <Route path='/register' element={<Register />} />
    </Routes>
  );
}

export default App;
