import React from 'react';
import styled from 'styled-components';

export interface ColLayoutProps {
  numColumns: number;
  children: React.ReactNode;
}

const GridContainer = styled.section<ColLayoutProps>`
  display: inline-grid;
  grid-template-columns: repeat(${(props) => props.numColumns}, 1fr);
  justify-items: center;
  width: 100%;
  padding: 25px;
`;

const ColLayout = (props: ColLayoutProps): React.ReactElement => {
  return (
    <GridContainer numColumns={props.numColumns} data-testid="colLayout">
      {props.children}
    </GridContainer>
  );
};

export default ColLayout;
