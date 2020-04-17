import React from 'react';
import styled, { css } from 'styled-components';
import posed from 'react-pose';
import Heading from 'components/atoms/Heading/Heading';
import Paragraph from 'components/atoms/Paragraph/Paragraph';
import Button from 'components/atoms/Button/Button';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { wrapperMotion, imageMotion } from 'assets/motion';
import { routes } from '../routes';


const StyledFlexWrapper = styled.div`
  display: flex;
  height: 100vh;
  justify-content: center;
  align-items: center;
  background-color: ${ ({ theme }) => theme.greyLight };
`;

const StyledWrapper = styled(motion.div)`
  padding: 2% 6%;
  position: relative;
  height: 85%;
  width: 90%;
`;

const StyledHeading = styled(Heading)`
  
`;

const StyledBackButton = styled(Button)`
  
  color: ${ ({ theme }) => theme.inactive };
  
  
  &:hover {
    color: ${ ({ theme }) => theme.greyDark };
  }
`;

const StyledLink = styled(Link)`
  position: absolute;
  text-decoration: none;
  bottom: 0;
`;

const StyledTextGrid = styled.div`
  display: grid;
  grid-column-gap: 15%;
  
  ${ ({ title, content }) => {
  switch (title) {
    case 'lokalizacja': {
      return css`
          grid-template-rows: repeat(${ content.length }, 1fr);
      `;
    }
    
    case 'polityka prywatności': {
      return css`
          display: flex;
      `;
    }

    default: {
      return css`
          grid-auto-flow: column;
          grid-template-rows: repeat(2, 1fr);
          grid-template-columns: repeat(2, 35%fr);
      `;
    }
  }
}
}
`;

const StyledTextBox = styled.div`
  margin: 20px 0;
`;

const StyledPaymentImage = styled.img`
  position: absolute;
  right: 0;
  bottom: 0;
`;

const StyledHomeImage = styled.img`
  height: 70%;
  position: absolute;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto;
`;

const StyledP = styled(Paragraph)`
   font-size: ${({title}) => title === 'polityka prywatności' && '12px'};
`;

const StyledA = styled.a`
  color: ${ ({ theme }) => theme.greyDark };
`;

const SubpageTemplate = ({ title, content, paymentImage, homeImage }) => (
  <StyledFlexWrapper>
    <StyledWrapper initial="initial"
                   animate="enter"
                   exit="exit"
                   variants={ wrapperMotion.variants }>
      <StyledHeading type='plantDetails'>{ title }</StyledHeading>
      <StyledTextGrid title={ title } content={ content }>
        {
          // eslint-disable-next-line react/prop-types
          content.map(item => (
            <StyledTextBox >
              <Heading type='small'>{ item.headingText }</Heading>
              <StyledP title={title}>{
                item.isLink
                  ? <StyledA href={ item.paragraphText }>{ item.paragraphText.replace('https://', '') }</StyledA>
                  : item.paragraphText
              }</StyledP>
            </StyledTextBox>
          ))
        }
      </StyledTextGrid>
      <StyledLink to={ routes.home }>
        <StyledBackButton secondary>strona główna</StyledBackButton>
      </StyledLink>
      {
        paymentImage && <StyledPaymentImage src={ paymentImage }/>
      }
      {
        homeImage && <StyledHomeImage src={ homeImage }/>
      }

    </StyledWrapper>
  </StyledFlexWrapper>
);


export default SubpageTemplate;