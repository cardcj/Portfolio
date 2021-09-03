import React, { useState } from 'react';
import styled from 'styled-components';
import { spacing, radiusConstraint } from '../../Theme';

export interface NavButtonProps {
  text: string;
}

const ButtonWrapper = styled.div`
  position: relative;
  display: inline-block;
`;

const NavButtonStyled = styled.button`
  background-color: transparent;
  min-width: 100px;
  height: 40px;
  font-size: 1em;
  border: none;
  padding: 0 ${spacing(4)};
  border-radius: ${radiusConstraint(4)};
  font-family: ${(props) => props.theme.fonts.main};
  color: ${(props) => props.theme.colors.common.white};

  &:before {
    width: 0;
    bottom: 0;
    content: '';
    left: 50%;
    height: 2px;
    position: absolute;
    transition: all 0.3s ease-out;
  }

  &:hover:before {
    width: 100%;
    left: 0;
    background-color: ${(props) => props.theme.colors.primary};
  }
`;

const NavButton = (props: NavButtonProps): React.ReactElement => {
  const [view, setView] = useState('');

  return (
    <ButtonWrapper>
      <NavButtonStyled>{props.text}</NavButtonStyled>
    </ButtonWrapper>
  );
};

export default NavButton;
