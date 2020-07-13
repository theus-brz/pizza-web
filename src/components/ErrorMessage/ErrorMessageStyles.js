import styled from 'styled-components';

export const ErrorMessageWrapper = styled.p`
  color: ${props => props.theme.colors.error};
  margin-top: 5px;
  text-align: center;
  font-family: ${props => props.theme.fonts.paragraph};
  font-size: 16px;
  font-weight: bold;
`;
