import styled from 'styled-components';

export const FabWrapper = styled.button`
  background-color: ${props => props.theme.colors.background};
  border: 1px solid ${props => props.theme.colors.primary};
  color: ${props => props.theme.colors.highEmphasis};
  width: 40px;
  height: 40px;
  border-radius: 20px;
  position: absolute;
  display: block;
  z-index: 5;
  margin-top: -50px;
`;
