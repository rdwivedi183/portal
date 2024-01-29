// src/pages/Dashboard.tsx
import React from 'react';
import styled from 'styled-components';

const StyledDashboard = styled.div`
  background-color: ${(props) => (props.theme.mode === 'light' ? '#f9f9f9' : '#222')};
  color: ${(props) => (props.theme.mode === 'light' ? '#333' : '#fff')};
  padding: 16px;
`;

const EmployList: React.FC = () => {
  return (
    <StyledDashboard>
      <h2>Employ List Page</h2>
      <p>This is the Employ List content.</p>
    </StyledDashboard>
  );
};

export default EmployList;
