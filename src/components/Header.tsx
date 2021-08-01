import * as React from 'react';
import styled from 'styled-components';
import { spacing } from '../Theme';
import Button from './input/Button';

const Navbar = styled.nav`
  background-color: ${(props) => props.theme.colors.common.white};
  min-width: 100%;
  display: flex;
  margin: 0 auto;
  justify-content: space-between;
  padding: ${spacing(2)} ${spacing(4)};
  box-shadow: 0 1px 2px 1px rgba(0, 0, 0, 0.1);
`;

const AppName = styled.h1`
  font-family: ${(props) => props.theme.fonts.header};
  color: ${(props) => props.theme.colors.common.black};
`;

const Header = (): React.ReactElement => {
  return (
    <Navbar>
      <AppName>FocusQA</AppName>
      <ul>
        <Button variant="primary" text="Button" />
      </ul>
    </Navbar>
  );
};

export default Header;
