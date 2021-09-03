import React from 'react';
import styled from 'styled-components';
import { spacing } from '../Theme';
import NavButton from './input/NavButton';

const Navbar = styled.nav`
  background-color: ${(props) => props.theme.colors.common.grey};
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
      <NavButton text="Home" />
      <NavButton text="About Me" />
      <NavButton text="Projects" />
      <NavButton text="Contact" />
    </Navbar>
  );
};

export default Header;
