import React from 'react';
import styled from 'styled-components';
import { spacing } from '../Theme';
import NavButton from './input/NavButton';

const StyledNav = styled.nav`
  background-color: ${(props) => props.theme.colors.common.black};
  min-width: 100%;
  display: flex;
  flex-flow: row no-wrap;
  align-items: center;
  margin: 0 auto;
  justify-content: space-between;
  padding: ${spacing(2)} ${spacing(4)};
  box-shadow: 0 1px 2px 1px rgba(0, 0, 0, 0.1);
`;

const Navbar = (): React.ReactElement => {
  return (
    <StyledNav>
      <NavButton text="Home" />
      <NavButton text="About Me" />
      <NavButton text="Projects" />
      <NavButton text="Contact" />
    </StyledNav>
  );
};

export default Navbar;
