import React from 'react';
import styled from 'styled-components';

const NotFoundContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 80vh;
  text-align: center;
`;

const NotFoundHeading = styled.h1`
  font-size: 5rem;
  margin: 0;
  color: #ff5733; /* Change to your desired color */
`;

const NotFoundSubHeading = styled.h2`
  font-size: 2rem;
  margin-top: 10px;
  color: #777; /* Change to your desired color */
`;

const NotFound: React.FC = () => {
  return (
    <NotFoundContainer>
      <NotFoundHeading>404</NotFoundHeading>
      <NotFoundSubHeading>Page not found</NotFoundSubHeading>
    </NotFoundContainer>
  );
};

export default NotFound;
