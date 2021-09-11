import React from 'react';
import styled from 'styled-components';
import { spacing } from '../Theme';
import { CR_NOTICE } from '../constants/strings';

const StyledFooter = styled.footer`
  background-color: ${(props) => props.theme.colors.common.black};
  position: fixed;
  bottom: 0;
  min-width: 100%;
  display: flex;
  margin: 0 auto;
  justify-content: space-between;
  padding: ${spacing(2)} ${spacing(4)};
  box-shadow: 0 -1px 2px 1px rgba(0, 0, 0, 0.1);
  color: ${(props) => props.theme.colors.common.white};
  font-family: ${(props) => props.theme.fonts.content};
  font-size: 0.8em;
`;

const Footer = (): React.ReactElement => {
  return <StyledFooter>{CR_NOTICE}</StyledFooter>;
};

export default Footer;
