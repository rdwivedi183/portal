// src/components/Header.tsx
import React from 'react';
import styled from 'styled-components';
import ThemeToggle from './ThemeToggle';
import { Link } from "react-router-dom";

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

const StyledH1 = styled.h2<HeaderProps>`
  font-family: 'Arial', sans-serif;
  font-size: 2rem;
  transition: transform .2s;
  cursor: pointer;
  margin: 0;
  &:hover {
    transform: scale(1.5);
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
  margin-right: 20px;
  font-size: 1.2rem;
  transition: color 0.2s;

  &:hover {
    color: #007bff; /* Change to your desired link hover color */
  }
`;

const StyledButtonContainer = styled.div`
  display: flex;
`;

const Header: React.FC<HeaderProps> = ({ theme }) => {
    return (
        <HeaderContainer theme={theme}>
            <StyledH1>
                <StyledLink to="/">Portal</StyledLink>
            </StyledH1>
            <StyledButtonContainer>
                <ThemeToggle />
                <StyledLink to="/login">Login</StyledLink>
                <StyledLink to="/list">List</StyledLink>
            </StyledButtonContainer>
        </HeaderContainer>
    );
};

export default Header;
