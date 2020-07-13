import styled, { keyframes } from 'styled-components';

const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg)
  }
`;

export const Spinner = styled.img`
  height: 75px;
  width: 75px;
  animation: ${rotate360} 2s linear infinite;
  margin-left: auto;
  margin-right: auto;
`;
