import React, { useState } from 'react';
import styled, {css} from 'styled-components';
import Paragraph from '../../atoms/Paragraph/Paragraph';

const StyledWrapper = styled.div`
  padding: 0 0 50px 0;
  z-index: 100;
  transition: .5s ${ ({ theme }) => theme.bezier };
  background-color: ${ ({ theme }) => theme.greyLight };
  
  ${({isExpanded}) => isExpanded ? css`
      position: absolute;
      height: 100%;
      top: 0;
` : css`
      position: relative;
      height: 15vh;
`}
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

const OverflowBox = styled.div`
  overflow-y: scroll;
  z-index: 1000;
  height: ${ ({ isExpanded }) => !isExpanded && '15vh' };
  max-height: 70vh;
`;

const StyledShader = styled.div`
  position: absolute;
  height: 100px;
  bottom: 0;
  width: 100%;
  transform: ${ ({ isExpanded }) => isExpanded && 'translateY(-50px)' };
  background: linear-gradient(rgba(255,255,255,0), ${ ({ theme }) => theme.greyLight });
`;


const ShowMore = ({ text }) => {
  const [isExpanded, expand] = useState(false);

  return (
    <StyledWrapper isExpanded={ isExpanded }>
      <OverflowBox isExpanded={ isExpanded }>
        <Paragraph>
          {
            text
          }
        </Paragraph>
      </OverflowBox>
      <StyledShader isExpanded={ isExpanded }/>
      <StyledReadMore
        onClick={ () => expand(!isExpanded) }>
        {
          isExpanded ? 'SCHOWAJ' : 'CZYTAJ WIĘCEJ'
        }
      </StyledReadMore>
    </StyledWrapper>
  );

};
export default ShowMore;

