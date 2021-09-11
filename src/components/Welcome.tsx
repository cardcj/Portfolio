import React from 'react';
import styled, { keyframes } from 'styled-components';

import Paragraph from './text/Paragraph';
import { WELCOME_TITLE, WELCOME_PARA } from '../constants/strings';

const slideUpFadeIn = keyframes`
  0% {
    opacity: 0;
    transform: translateY(100px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

const WelcomeWrapper = styled.section`
  width: 100%;
  height: 400px;
  background-image: url('https://picsum.photos/id/100/3000/400');
  text-align: center;
  padding: 130px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  & > * {
    width: 100%;
    min-width: 400px;
    margin: 0 auto;
    animation: ${slideUpFadeIn} 2s;
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
