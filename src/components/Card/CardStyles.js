import styled from 'styled-components';

export const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  padding: 15px;
  background-color: ${props => props.theme.colors.surface};
`;

export const CardTitle = styled.h2`
  color: ${props => props.theme.colors.title};
  font-family: ${props => props.theme.fonts.title};
  font-size: 20px;
  letter-spacing: 1;
`;

export const CardContent = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: space-evenly;
`;
