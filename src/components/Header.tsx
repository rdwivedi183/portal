// src/components/Header.tsx
import React from 'react';
import styled from 'styled-components';
import ThemeToggle from './ThemeToggle';

interface HeaderProps {
    theme: 'light' | 'dark';
}

const HeaderContainer = styled.header<HeaderProps>`
  background-color: ${(props) => (props.theme === 'light' ? '#f0f0f0' : '#333')};
  color: ${(props) => (props.theme === 'light' ? '#333' : '#fff')};
  padding: 16px;
  display: flex;
  justify-content: space-between;
`;

const Header: React.FC<HeaderProps> = ({ theme }) => {
    return (
        <HeaderContainer theme={theme}>
            <h1>Portal</h1>
            <ThemeToggle />
        </HeaderContainer>
    );
};

export default Header;
