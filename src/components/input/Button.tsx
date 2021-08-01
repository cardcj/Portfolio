import * as React from 'react';
import styled from 'styled-components';
import { radiusConstraint, spacing } from '../../Theme';

export interface ButtonProps {
  text: string;
  variant: 'primary' | 'secondary' | 'tertiary' | 'faded';
}

const SimpleButton = styled.button<Pick<ButtonProps, 'variant'>>`
  background-color: ${(props) => props.theme.colors[props.variant]};
  min-width: 100px;
  height: 40px;
  font-size: 1em;
  border: none;
  padding: 0 ${spacing(4)};
  border-radius: ${radiusConstraint(4)};
  font-family: ${(props) => props.theme.fonts.main};
  color: ${(props) => props.theme.colors.common.grey};
  transition: ease-in-out 0.2s;

  &:hover {
    background-color: ${(props) => props.theme.colors.darkenPrimary};
  }
`;

export const Button = (props: ButtonProps): React.ReactElement => {
  return (
    <SimpleButton variant={props.variant} type="submit">
      {props.text}
    </SimpleButton>
  );
};

export default Button;
