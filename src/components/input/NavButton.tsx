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
  color: ${(props) => props.theme.colors.common.grey};

  &:before {
    width: 0;
    bottom: 0;
    content: '';
    left: 50%;
    height: 1px;
    position: absolute;
    transition: width 0.2s, left 0.2s;
  }

  &:hover:before {
    width: 100%;
    left: 0;
    background-color: #000;
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
