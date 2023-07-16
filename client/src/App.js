import { Route, Routes } from 'react-router-dom';
import ProtectedRoute from './components/ProtectedRoute';
import { Exams } from './pages/admin/Exams';
import Home from './pages/common/Home';
import Login from './pages/common/Login';
import Register from './pages/common/Register';

function App() {
  return (
    <Routes>
      {/* Common Routes */}
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      {/* User Routes */}
      <Route
        path="/"
        element={
          <ProtectedRoute>
            <Home />
          </ProtectedRoute>
        }
      />

      {/* Admin Routes */}
      <Route
        path="/admin/exams"
        element={
          <ProtectedRoute>
            <Exams />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
}

export default App;
