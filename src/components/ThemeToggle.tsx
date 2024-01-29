// src/components/ThemeToggle.tsx
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleTheme, selectTheme } from '../redux/themeSlice';
import light from '../assets/images/light.svg';
import darkTheme from '../assets/images/dark.svg';
const ThemeToggle: React.FC = () => {
  const dispatch = useDispatch();
  const theme = useSelector(selectTheme);

  const handleToggle = () => {
    dispatch(toggleTheme());
  };

  return (
    <div>
      <button onClick={handleToggle}>
        {theme === 'light' ? <img src={light} alt="" />
          : <img src={darkTheme} alt="" />}</button>
    </div>
  );
};

export default ThemeToggle;
