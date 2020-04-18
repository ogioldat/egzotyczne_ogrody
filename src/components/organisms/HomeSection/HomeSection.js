import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import MenuView from 'views/MenuView';
import HeroHeading from 'components/molecules/HeroHeading/HeroHeading';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import Paragraph from 'components/atoms/Paragraph/Paragraph';
import HeroImage from 'components/molecules/HeroImage/HeroImage';
import { getShowMenu } from 'redux/reducers/menuReducer';
import mobileBg from 'assets/images/mobileBg.png';
import Button from 'components/atoms/Button/Button';
import { motion, AnimatePresence } from 'framer-motion';
import MenuBar from 'components/molecules/MenuBar/MenuBar';
import { getIsTabletOrMobile, } from 'redux/reducers/mediaReducer';


const StyledWrapper = styled(motion.div)`
  height: 100vh;
  position: relative;
  overflow-y: hidden;
`;

const StyledCenterWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center; 
`;

const StyledTitleWrapper = styled.div`
  position: absolute;
  bottom: 0;
  top: 45%; 
  left: 50%;
  width: ${ ({ isTabletOrMobile }) => isTabletOrMobile && '100vw' };
  transform: translate(-50%,-50%);
  padding: ${ ({ isTabletOrMobile, theme }) => isTabletOrMobile && theme.mobilePadding };
  margin: auto;
`;

const StyledParagraph = styled(Paragraph)`
  width: ${ ({ isTabletOrMobile }) => isTabletOrMobile ? '100%' : '60%' };
`;

const StyledAnchorLink = styled(AnchorLink)`
  text-decoration: none;
  ${ ({ isTabletOrMobile }) => isTabletOrMobile && css`
    position: absolute;
    right: 12vw;
` }
`;

const StyledMobileBg = styled.img`
  position: absolute;
  width: 100vw;
  bottom: -5%;
`;

const HomeSection = ({ showMenu, isTabletOrMobile }) => (
  <StyledWrapper>
    <MenuBar showMenu={ showMenu } isTabletOrMobile={ isTabletOrMobile }/>

    <AnimatePresence>
      {
        showMenu && <MenuView/>
      }
    </AnimatePresence>

    <StyledCenterWrapper>
      {
        isTabletOrMobile ? <StyledMobileBg src={ mobileBg }/> : <HeroImage/>
      }

      <StyledTitleWrapper isTabletOrMobile={ isTabletOrMobile }>
        <HeroHeading isTabletOrMobile={ isTabletOrMobile }>
          Egzotyczne Ogrody
        </HeroHeading>
        <StyledParagraph isTabletOrMobile={ isTabletOrMobile }>
          Tu trzeba dodać tekst Tu trzeba dodać tekst
          Tu trzeba dodać tekst Tu trzeba dodać tekst
          Tu trzeba dodać tekst
        </StyledParagraph>
        <StyledAnchorLink
          isTabletOrMobile={ isTabletOrMobile }
          href='#about-us'>
          <Button>poznaj nas</Button>
        </StyledAnchorLink>

      </StyledTitleWrapper>
    </StyledCenterWrapper>
  </StyledWrapper>
);
const mapStateToProps = state => ({
  showMenu: getShowMenu(state),
  isTabletOrMobile: getIsTabletOrMobile(state),
});

HomeSection.propTypes = {
  showMenu: PropTypes.func.isRequired,
  isTabletOrMobile: PropTypes.bool.isRequired
};

export default connect(mapStateToProps)(HomeSection);