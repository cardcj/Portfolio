import * as React from 'react';
import styled from 'styled-components';
import { spacing } from '../Theme';
import Button from './input/Button';

const Footer = styled.footer`
  background-color: ${(props) => props.theme.colors.common.white};
  position: fixed;
  bottom: 0;
  min-width: 100%;
  display: flex;
  margin: 0 auto;
  justify-content: space-between;
  padding: ${spacing(2)} ${spacing(4)};
  box-shadow: 0 -1px 2px 1px rgba(0, 0, 0, 0.1);
`;

const Header = (): React.ReactElement => {
  return (
    <Footer>
      <Button variant="faded" text="In Progress" />
      <Button variant="primary" text="Done" />
      <Button variant="secondary" text="Blocked" />
      <Button variant="tertiary" text="Failed" />
    </Footer>
  );
};

export default Header;
