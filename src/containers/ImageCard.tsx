import React from 'react';
import styled from 'styled-components';
import Paragraph from '../components/text/Paragraph';

export interface ImageCardProps {
  altText: string;
  cardBodyText: string;
  imageSrc: string;
}

const StyledCard = styled.article`
  width: 90%;
  height: 275px;
  background-color: ${(props) => props.theme.colors.common.white};
  text-align: center;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
    rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
  padding: 30px;
  transition: 0.3s ease-in-out;

  &:hover {
    transform: scale(1.1);
  }
`;

const StyledImg = styled.img`
  border-radius: 100%;
  margin-bottom: 10px;
`;

const ImageCard = (props: ImageCardProps): React.ReactElement => {
  return (
    <StyledCard>
      <StyledImg src={props.imageSrc} alt={props.altText} />
      <Paragraph text={props.cardBodyText} />
    </StyledCard>
  );
};

export default ImageCard;
