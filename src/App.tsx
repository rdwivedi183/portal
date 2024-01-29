import React from 'react';
import './App.css';
import Header from './components/Header';
import { useSelector } from 'react-redux';
import { selectTheme } from './redux/themeSlice';
import Dashboard from './pages/Dashboard';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/auth/Login';
import PrivateRoute from './components/PrivateRoute';
import EmployList from './pages/EmployList';
import NotFound from './pages/NotFound';

function App() {
  const theme = useSelector(selectTheme);

  return (
    <ThemeProvider theme={{ mode: theme }}>
      <Router>
        <div>
          <Header theme={theme} />
          <Routes>
            {/* Public routes */}
            <Route path="/login" element={<Login />} />
            <Route path="*" element={<NotFound />} />

            {/* Private route using PrivateRoute component */}
            <Route path="/" element={<PrivateRoute />}>
              <Route path="/" element={<Dashboard />} />
              <Route path="/list" element={<EmployList />} />
            </Route>

          </Routes>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
