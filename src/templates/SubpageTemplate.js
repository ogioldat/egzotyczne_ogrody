import React from 'react';
import styled, { css } from 'styled-components';
import Heading from 'components/atoms/Heading/Heading';
import Paragraph from 'components/atoms/Paragraph/Paragraph';
import Button from 'components/atoms/Button/Button';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { wrapperMotion } from 'assets/motion';
import { routes } from '../routes';
import { getIsTabletOrMobile } from '../redux/reducers/mediaReducer';
import { connect } from 'react-redux';

const StyledFlexWrapper = styled.div`
  position: relative;
  display: flex;
  height: ${ ({ isTabletOrMobile }) => isTabletOrMobile ? '100%' : '100vh' };
  padding-top: ${ ({ isTabletOrMobile, theme }) => isTabletOrMobile && theme.mobilePadding };
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
   display: ${ ({ policy, isTabletOrMobile }) => (policy || isTabletOrMobile) ? 'flex' : 'grid' };
   flex-direction: ${ ({ isTabletOrMobile }) => isTabletOrMobile && 'column' };
   grid-column-gap: 15%;
   min-height: ${ ({ policy }) => policy && '55vh' };
   overflow-y: auto;
  
  ${ ({ title, content, policy }) => {
  switch (title) {
    case 'lokalizacja': {
      return css`
          grid-template-rows: repeat(${ content.length }, 1fr);
      `;
    }

    default: {
      return policy ?
        css`
          display: flex;
          flex-direction: column;
       `
        : css`
          grid-auto-flow: column;
          grid-template-rows: repeat(2, 1fr);
          grid-template-columns: repeat(2, 35%fr);
      `;
    }
  }
}
}
}
`;

const StyledTextBox = styled.div`
  padding: 0 ${ ({ policy }) => policy && '5px' };
  margin: 20px 0;
`;

const StyledPaymentImage = styled.img`
  position: ${ ({ isTabletOrMobile }) => !isTabletOrMobile && 'absolute' };
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
   font-size: ${ ({ title, theme }) => title === 'polityka prywatności' && theme.fontSize.xs };
`;

const StyledA = styled.a`
  color: ${ ({ theme }) => theme.greyDark };
`;

const SubpageTemplate = ({ title, content, paymentImage, homeImage, policy, isTabletOrMobile }) => (
  <StyledFlexWrapper isTabletOrMobile={ isTabletOrMobile }>
    <StyledWrapper initial="initial"
                   animate="enter"
                   exit="exit"
                   variants={ wrapperMotion.variants }>
      <StyledHeading type='plantDetails'>{ title }</StyledHeading>
      <StyledTextGrid
        isTabletOrMobile={ isTabletOrMobile }
        title={ title }
        content={ content }
        policy={ policy }>
        {
          // eslint-disable-next-line react/prop-types
          content.map(item => (
            <StyledTextBox policy>
              <Heading type='small'>{ item.headingText }</Heading>
              <StyledP title={ title }>{
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
        paymentImage && <StyledPaymentImage
          isTabletOrMobile={ isTabletOrMobile }
          src={ paymentImage }/>
      }
      {
        homeImage && <StyledHomeImage src={ homeImage }/>
      }

    </StyledWrapper>
  </StyledFlexWrapper>
);

const mapStateToProps = state => ({
  isTabletOrMobile: getIsTabletOrMobile(state),
});

export default connect(mapStateToProps)(SubpageTemplate);