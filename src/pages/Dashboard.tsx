// src/pages/Dashboard.tsx
import React from 'react';
import styled from 'styled-components';

const StyledDashboard = styled.div`
  background-color: ${(props) => (props.theme.mode === 'light' ? '#f9f9f9' : '#222')};
  color: ${(props) => (props.theme.mode === 'light' ? '#333' : '#fff')};
  padding: 16px;
`;
const Dashboard: React.FC = () => {
  return (
    <StyledDashboard>
      <h2>Dashboard Page</h2>
      <p>This is the dashboard content.</p>
    </StyledDashboard>
  );
};

export default Dashboard;
