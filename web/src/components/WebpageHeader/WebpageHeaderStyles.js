import styled from 'styled-components';

export const WebpageHeaderWrapper = styled.header`
  background-color: ${props => props.theme.colors.primary};
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 20%;
  padding: 30px;
`;

export const WebpageHeaderTitle = styled.h1`
  color: ${props => props.theme.colors.background};
  font-family: ${props => props.theme.fonts.title};
  font-size: 38px;
  text-align: center;
`;
