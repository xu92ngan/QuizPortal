import { Route, Routes } from 'react-router-dom';
import Login from './pages/common/Login';
import Register from './pages/common/Register';
import ProtectedRoute from './components/ProtectedRoute';
import Home from './pages/common/Home';

function App() {
  return (
    <Routes>
      <Route path='/login' element={<Login />} />
      <Route path='/register' element={<Register />} />
      <Route
        path='/'
        element={
          <ProtectedRoute>
            <Home />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
}

export default App;
