import React from 'react';
import styled from 'styled-components';

import Paragraph from './text/Paragraph';
import { WELCOME_TITLE, WELCOME_PARA } from '../constants/strings';

const WelcomeWrapper = styled.section`
  width: 100%;
  height: 400px;
  background-color: skyblue;
  text-align: center;
  padding: 125px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;

  & > * {
    width: 100%;
    margin: 0 auto;
  }
`;

const WelcomeTitle = styled.h1`
  font-family: ${(props) => props.theme.fonts.title};
  font-size: 4em;
  color: ${(props) => props.theme.colors.common.black};
`;

const Welcome = (): React.ReactElement => {
  return (
    <WelcomeWrapper data-testid="welcomeWrapper">
      <WelcomeTitle>{WELCOME_TITLE}</WelcomeTitle>
      <Paragraph text={WELCOME_PARA} />
    </WelcomeWrapper>
  );
};

export default Welcome;
