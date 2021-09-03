import React from 'react';
import styled from 'styled-components';
import { spacing } from '../../Theme';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export interface HeadingProps {
  icon?: IconDefinition;
  iconTitle?: string;
  text: string;
}

const FontAwesomeThemed = styled(FontAwesomeIcon)`
  color: ${(props) => props.theme.colors.common.black};
`;

const FormattedHeading = styled.h2`
  font-family: ${(props) => props.theme.fonts.header};
  color: ${(props) => props.theme.colors.common.black};
  margin-left: ${spacing(1)};
`;

const HeadingWrapper = styled.div`
  display: flex;
  align-items: center;
  width: auto;
`;

const Heading = (props: HeadingProps): React.ReactElement => {
  return (
    <HeadingWrapper>
      <FontAwesomeThemed icon={props.icon} size="lg" title={props.iconTitle} />
      <FormattedHeading>{props.text}</FormattedHeading>
    </HeadingWrapper>
  );
};

export default Heading;
