import React from 'react';
import styled from 'styled-components';
import { spacing } from '../Theme';
import Button from './input/Button';

const Navbar = styled.nav`
  background-color: ${(props) => props.theme.colors.common.white};
  min-width: 100%;
  display: flex;
  flex-flow: row no-wrap;
  align-items: center;
  margin: 0 auto;
  justify-content: space-between;
  padding: ${spacing(2)} ${spacing(4)};
  box-shadow: 0 1px 2px 1px rgba(0, 0, 0, 0.1);
`;

const Header = (): React.ReactElement => {
  return (
    <Navbar>
      <Button variant="primary" text="Home" />
      <Button variant="primary" text="About Me" />
      <Button variant="primary" text="Projects" />
      <Button variant="primary" text="Contact" />
    </Navbar>
  );
};

export default Header;
