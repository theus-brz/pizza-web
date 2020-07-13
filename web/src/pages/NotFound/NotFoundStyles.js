import styled from 'styled-components';

import { PageWrapper } from '~/styles/components';

export const NotFoundTitle = styled.h2`
  color: ${props => props.theme.colors.title};
  font-family: ${props => props.theme.fonts.title};
  font-size: 30px;
  text-align: center;
  letter-spacing: 1;
  margin-bottom: 15px;
`;

export const NotFoundWrapper = styled(PageWrapper)`
  align-items: center;
  justify-content: space-evenly;
`;
