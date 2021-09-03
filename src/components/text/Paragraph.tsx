import React from 'react';
import styled from 'styled-components';
import { spacing } from '../../Theme';

export interface ParagraphProps {
  text: string;
}

const FormattedP = styled.p`
  color: ${(props) => props.theme.colors.common.black};
  font-family: ${(props) => props.theme.fonts.main};
  line-height: ${spacing(5)};
`;

const Paragraph = (props: ParagraphProps): React.ReactElement => {
  return <FormattedP>{props.text}</FormattedP>;
};

export default Paragraph;
