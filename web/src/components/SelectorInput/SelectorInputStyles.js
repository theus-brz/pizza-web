import styled from 'styled-components';

import { InputWrapper } from '~/styles/components';

export const SelectorWrapper = styled(InputWrapper)``;

export const SelectorTitle = styled.label`
  color: ${props => props.theme.colors.mediumEmphasis};
  font-family: ${props => props.theme.fonts.paragraph};
  font-size: 15px;
`;

export const SelectorField = styled.select`
  background-color: ${props => props.theme.colors.transparent};
  color: ${props => props.theme.colors.highEmphasis};
  font-family: ${props => props.theme.fonts.paragraph};
  font-size: 20px;
  padding: 8px 10px;
  margin-top: 5px;
  cursor: pointer;
  border-radius: 5px;
  border: 1px solid
    ${props =>
      props.error ? props.theme.colors.error : props.theme.colors.primary};
`;

export const SelectorOption = styled.option`
  padding: 8px 10px;
`;
