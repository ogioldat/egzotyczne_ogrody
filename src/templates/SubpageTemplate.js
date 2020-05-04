import React from 'react';
import uniqid from 'uniqid';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styled, { css } from 'styled-components';
import Heading from 'components/atoms/Heading/Heading';
import Paragraph from 'components/atoms/Paragraph/Paragraph';
import Button from 'components/atoms/Button/Button';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { wrapperMotion } from 'assets/motion';
import { routes } from '../routes';
import { getIsTabletOrMobile, getIsBigScreen } from '../redux/reducers/mediaReducer';

const StyledFlexWrapper = styled.div`
  position: relative;
  display: flex;
  min-height: 100vh;
  height: ${ ({ isTabletOrMobile }) => isTabletOrMobile ? '100%' : '100vh' };
  padding-top: ${ ({ isTabletOrMobile, theme }) => isTabletOrMobile && theme.mobilePadding };
  justify-content: center;
  align-items: center;
  background-color: ${ ({ theme }) => theme.greyLight };
`;

const StyledWrapper = styled(motion.div)`
  position: relative;
  height: 85%;
  width: 90%;
`;

const StyledBackButton = styled(Button)`
  position: relative;
  color: ${ ({ theme }) => theme.inactive };
  &:hover {
    color: ${ ({ theme }) => theme.greyDark };
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  
`;

const LinkWrapper = styled.div`
  position: ${ ({ isTabletOrMobile }) => !isTabletOrMobile && 'absolute' };
  bottom: 0;
`;

const StyledTextGrid = styled.div` 
   display: ${ ({ policy, isTabletOrMobile }) => (policy || isTabletOrMobile) ? 'flex' : 'grid' };
   flex-direction: ${ ({ isTabletOrMobile }) => isTabletOrMobile && 'column' };
   grid-column-gap: 15%;
   min-height: ${ ({ policy }) => policy && '55vh' };
   overflow-y: auto;
  
  ${ ({ title, content, isTabletOrMobile }) => {
  switch (title) {
    case 'lokalizacja': {
      return css`
          grid-template-rows: repeat(${ content.length }, 1fr);
      `;
    }

    case 'polityka prywatności': {
      return css`
          height: 40vh;
          padding: ${ ({ isTabletOrMobile }) => !isTabletOrMobile && '0 5px 50px 0' };
          overflow-y: scroll;
          display: flex;
          flex-direction: column;
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
}
`;

const StyledTextBox = styled.div`
  padding: 0 ${ ({ policy }) => policy && '5px' };
  margin: 20px 0;
`;

const StyledPaymentImage = styled.img`
  position: ${ ({ isTabletOrMobile }) => !isTabletOrMobile && 'absolute' };
  right: 6%;
  bottom: 0;
`;

const StyledHomeImage = styled.img`
  height: 70%;
  ${ ({ isTabletOrMobile }) => isTabletOrMobile ?
  css`
    position: relative;
    width: 100%;
`
  : css` 
    position: absolute;
    right: 0;
    top: 0;
    bottom: 0;
    margin: auto;
` }
  
`;

const StyledP = styled(Paragraph)`
   font-size: ${ ({ title, theme, isBigScreen }) => title === 'polityka prywatności'
  ? theme.fontSize.xs : isBigScreen ? theme.fontSize.s : theme.fontSize.xs };
`;

const StyledA = styled.a`
  color: ${ ({ theme }) => theme.greyDark };
`;

const SubpageTemplate = (
  {
    title,
    content,
    paymentImage,
    homeImage,
    policy,
    isTabletOrMobile,
    isBigScreen,
  },
) => {


  return (
    <StyledFlexWrapper isTabletOrMobile={ isTabletOrMobile }>
      <StyledWrapper
        initial="initial"
        animate="enter"
        exit="exit"
        variants={ wrapperMotion.variants }>
        <Heading type={ isTabletOrMobile ? 'menu' : 'subpage' }>{ title }</Heading>
        <StyledTextGrid
          isTabletOrMobile={ isTabletOrMobile }
          title={ title }
          content={ content }
          policy={ policy }>
          {
            // eslint-disable-next-line react/prop-types
            content.map(item => (
              <StyledTextBox policy={ policy } key={ uniqid() }>
                <Heading type='subpage-small'>{ item.headingText }</Heading>
                <StyledP isBigScreen={ isBigScreen } title={ title }>{
                  item.isLink
                    ? <StyledA href={ item.paragraphText }>{ item.paragraphText.replace('https://', '') }</StyledA>
                    : item.paragraphText
                }</StyledP>
              </StyledTextBox>
            ))
          }
        </StyledTextGrid>
        {
          paymentImage && <StyledPaymentImage isTabletOrMobile={ isTabletOrMobile } src={ paymentImage }/>
        }

        {
          homeImage && <StyledHomeImage isTabletOrMobile={ isTabletOrMobile } src={ homeImage }/>
        }
        <LinkWrapper isTabletOrMobile={ isTabletOrMobile }>
          <StyledLink to={ routes.home }>
            <StyledBackButton secondary>strona główna</StyledBackButton>
          </StyledLink>
        </LinkWrapper>
      </StyledWrapper>
    </StyledFlexWrapper>
  );
};

const mapStateToProps = state => ({
  isTabletOrMobile: getIsTabletOrMobile(state),
  isBigScreen: getIsBigScreen(state),
});

SubpageTemplate.propTypes = {
  title: PropTypes.string,
  content: PropTypes.arrayOf(PropTypes.object),
  paymentImage: PropTypes.string,
  homeImage: PropTypes.string,
  policy: PropTypes.bool,
  isTabletOrMobile: PropTypes.bool.isRequired,
};

SubpageTemplate.defaultProps = {
  title: '',
  content: [],
  paymentImage: '',
  homeImage: '',
  policy: false,
};

export default connect(mapStateToProps)(SubpageTemplate);