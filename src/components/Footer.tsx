import React from 'react';
import styled from 'styled-components';
import { spacing } from '../Theme';

const StyledFooter = styled.footer`
  background-color: ${(props) => props.theme.colors.common.grey};
  position: fixed;
  bottom: 0;
  min-width: 100%;
  display: flex;
  margin: 0 auto;
  justify-content: space-between;
  padding: ${spacing(2)} ${spacing(4)};
  box-shadow: 0 -1px 2px 1px rgba(0, 0, 0, 0.1);
`;

const Footer = (): React.ReactElement => {
  return <StyledFooter />;
};

export default Footer;
