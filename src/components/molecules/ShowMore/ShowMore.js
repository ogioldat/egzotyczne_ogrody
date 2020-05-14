import React, { useState } from 'react';
import styled from 'styled-components';
import Paragraph from '../../atoms/Paragraph/Paragraph';

const StyledWrapper = styled.div`
  position: relative;
  height: 15vh;
  overflow: hidden;
`;

const StyledReadMore = styled.div`
  border-radius: 6px;
  position: absolute;
  display: inline-block;
  background-color: ${ ({ theme }) => theme.greyDark };
  color: ${ ({ theme }) => theme.greyLight };
  font: normal small-caps bold ${ ({ theme }) => theme.fontSize.xs } Montserrat, serif-sans;
  width: 150px;
  text-align: center;
  padding: 5px 15px;
  bottom: 0;
  left: 0;
  right: 0;
  margin: 0 auto;
`;

const StyledShader = styled.div`
  position: absolute;
  height: 100px;
  bottom: 0;
  width: 100%;
  background: linear-gradient(rgba(255,255,255,0), ${ ({ theme }) => theme.greyLight });
`;


const ShowMore = ({ text }) => {
  const [isExpanded, expand] = useState(false);

  return (
    <StyledWrapper isExpanded={ isExpanded }>
      <Paragraph>
        {
          text
        }
      </Paragraph>
      <StyledShader/>
      <StyledReadMore>CZYTAJ WIĘCEJ</StyledReadMore>
    </StyledWrapper>
  );

};
export default ShowMore;

