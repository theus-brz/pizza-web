import styled from 'styled-components';

export const WarningCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 5px;
  margin-top: 15px;
  padding: 15px;
  border: 1px solid ${props => props.theme.colors.primary};
  background-color: ${props => props.theme.colors.transparent};
`;

export const WarningCardText = styled.p`
  font-family: ${props => props.theme.fonts.paragraph};
  color: ${props => props.theme.colors.highEmphasis};
`;
