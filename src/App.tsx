import React from 'react';
import './App.css';
import Header from './components/Header';
import { useSelector } from 'react-redux';
import { selectTheme } from './redux/themeSlice';
import Dashboard from './pages/Dashboard';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  const theme = useSelector(selectTheme);
  return (
    <ThemeProvider theme={{ mode: theme }}>
      <Router>
        <div>
          <Header theme={theme} />
          <Routes>
            <Route path="/" element={<Dashboard />} />
          </Routes>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
