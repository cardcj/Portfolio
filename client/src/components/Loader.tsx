import React from 'react';
import styled, { keyframes } from 'styled-components';

const grow = keyframes`
  50% {
    transform: scale(1);
  }
`;

const LoaderSection = styled.section`
  position: fixed;
  top: 50%;
  left: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: row wrap;
  width: 48px;
  height: 48px;

  & > span {
    flex: 0 0 auto;
    background-color: ${(props) => props.theme.colors.primary};
    width: 20px;
    height: 20px;
    margin: 2px 2px;
    animation: ${grow} 1.35s linear infinite;
    transform: scale(0);
    border-radius: 25%;
  }

  & > span:nth-child(2) {
    background-color: ${(props) => props.theme.colors.secondary};
    animation-delay: 0.3s;
  }

  & > span:nth-child(3) {
    background-color: ${(props) => props.theme.colors.tertiary};
    animation-delay: 0.3s;
  }

  & > span:nth-child(4) {
    background-color: ${(props) => props.theme.colors.common.black};
  }
`;

const Loader = (): React.ReactElement => {
  return (
    <LoaderSection data-testid="loader">
      <span />
      <span />
      <span />
      <span />
    </LoaderSection>
  );
};

export default Loader;
