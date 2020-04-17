import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { routes } from 'routes';
import { connect } from 'react-redux';
import MenuView from 'views/MenuView';
import HeroHeading from 'components/molecules/HeroHeading/HeroHeading';
import Socials from 'components/atoms/Socials/Socials';
import Paragraph from 'components/atoms/Paragraph/Paragraph';
import HeroImage from 'components/molecules/HeroImage/HeroImage';
import Hamburger from 'components/atoms/Hamburger/Hamburger';
import Logo from 'assets/logos/website_logo.svg';
import { getShowMenu } from 'redux/reducers/menuReducer';
import { wrapperMotion, buttonMotion } from 'assets/motion';
import { motion, AnimatePresence } from 'framer-motion';
import Button from 'components/atoms/Button/Button';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import CXMenuButton from 'components/atoms/CXMenuButton/CXMenuButton';


const StyledWrapper = styled(motion.div)`
  height: 100vh;
  position: relative;
`;

const StyledMenuBar = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-content: space-between;
  align-items: center;
  height: 80px;
`;

const StyledLogo = styled.img`
  height: 70px;
  padding: 20px;
  box-sizing: content-box;
`;

const StyledList = styled.ul`
  list-style: none;
  position: ${ ({ showMenu }) => showMenu ? 'fixed' : 'absolute' };
  align-items: center;
  display: flex;
  justify-content: space-evenly;
  z-index: 100;
  right: 0;
  top: 10px;
  
  li {
    padding: 0;
    margin: 0 30px;
  }
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
  transform: translate(-50%,-50%);
  margin: auto;
`;

const StyledSocials = styled(Socials)`
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
`;

const StyledAnchorLink = styled(AnchorLink)`
  text-decoration: none;
`;


const StyledParagraph = styled(Paragraph)`
  width: 60%;
`;

const StyledLink = styled(Link)`
  display: block;
  text-decoration: none;
`;

const HomeSection = ({ showMenu }) => {
  return (
    <StyledWrapper>
      <StyledMenuBar>
        <StyledLogo src={ Logo }/>
        <StyledList showMenu={ showMenu }>
          <li>
            <StyledAnchorLink href='#plants'>
              <Button
                secondary
                showMenu={ showMenu }
                menuOption
              >rośliny</Button>
            </StyledAnchorLink>
          </li>
          <li>
            <StyledLink to={ routes.gallery }>
              <Button
                secondary
                showMenu={ showMenu }
                menuOption
              >galeria</Button>
            </StyledLink>
          </li>
          <li>
            <StyledLink to={ routes.aboutUs }>
              <Button
                secondary
                showMenu={ showMenu }
                menuOption
              >o nas</Button>
            </StyledLink>
          </li>
          <li>
            <StyledLink to={ routes.orders }>
              <Button
                secondary
                showMenu={ showMenu }
                menuOption
              >wysyłka</Button>
            </StyledLink>
          </li>
          <li>
            <Hamburger/>
          </li>
        </StyledList>
      </StyledMenuBar>

      <AnimatePresence>
        {
          showMenu && <MenuView/>
        }
      </AnimatePresence>


      <StyledCenterWrapper>
        <HeroImage/>
        <StyledTitleWrapper>
          <HeroHeading>Egzotyczne Ogrody</HeroHeading>
          <StyledParagraph>
            Tu trzeba dodać tekst Tu trzeba dodać tekst
            Tu trzeba dodać tekst Tu trzeba dodać tekst
            Tu trzeba dodać tekst Tu trzeba dodać tekst
            Tu trzeba dodać tekst Tu trzeba dodać tekst
            Tu trzeba dodać tekst Tu trzeba dodać tekst
          </StyledParagraph>
          <Button>poznaj nas</Button>
        </StyledTitleWrapper>
      </StyledCenterWrapper>
    </StyledWrapper>
  );
};

const mapStateToProps = state => ({
  showMenu: getShowMenu(state),
});

export default connect(mapStateToProps)(HomeSection);