import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { routes } from 'routes';
import Hamburger from 'components/atoms/Hamburger/Hamburger';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Logo from 'assets/logos/website_logo.svg';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import Button from '../../atoms/Button/Button';
import { getIsTabletOrMobile } from '../../../redux/reducers/mediaReducer';

const StyledMenuBar = styled.div`
  margin: ${ ({ theme, isTabletOrMobile }) => isTabletOrMobile && theme.mobilePadding };
  box-sizing: content-box;
  user-select: none;
  position: relative;
  height: 60px;
  display: flex;
  border-bottom: ${ ({ theme, isTabletOrMobile }) => !isTabletOrMobile && `1.5px solid ${ theme.greyLight }` };
  padding: ${ ({ isTabletOrMenu }) => !isTabletOrMenu && '15px' };
  justify-content: space-between;
  align-items: center;
`;

const StyledLogo = styled.img`
  height: 100%;
  user-select: none;
  width: ${ ({ isTabletOrMobile }) => isTabletOrMobile && '60vw' };
  box-sizing: content-box;
`;

const StyledList = styled.ul`
  height: 100%;
  list-style: none;
  position: absolute;
  display: inline-flex;
  align-items: center;
  justify-content: space-evenly;
  z-index: 100;
  right: 0;
  margin: 0;
  
  li {
    padding: 0;
    margin: ${ ({ isTabletOrMobile }) => isTabletOrMobile ? 0 : '0 20px' };
  }
`;

const StyledAnchorLink = styled(AnchorLink)`
  text-decoration: none;
`;

const StyledLink = styled(Link)`
  display: block;
  text-decoration: none;
`;

const MenuBar = ({ showMenu, isTabletOrMobile }) => (
  <StyledMenuBar isTabletOrMobile={ isTabletOrMobile }>
    <StyledLogo isTabletOrMobile={ isTabletOrMobile } src={ Logo }/>
    <StyledList showMenu={ showMenu } isTabletOrMobile={ isTabletOrMobile }>
      <li>
        <StyledAnchorLink href='#plants'>
          <Button
            hideOnMobile={ isTabletOrMobile }
            secondary
            showMenu={ showMenu }
            menuOption
          >rośliny</Button>
        </StyledAnchorLink>
      </li>
      <li>
        <StyledLink to={ routes.gallery }>
          <Button
            hideOnMobile={ isTabletOrMobile }
            secondary
            showMenu={ showMenu }
            menuOption
          >galeria</Button>
        </StyledLink>
      </li>
      <li>
        <StyledLink to={ routes.aboutUs }>
          <Button
            hideOnMobile={ isTabletOrMobile }
            secondary
            showMenu={ showMenu }
            menuOption
          >o nas</Button>
        </StyledLink>
      </li>
      <li>
        <StyledLink to={ routes.orders }>
          <Button
            hideOnMobile={ isTabletOrMobile }
            secondary
            showMenu={ showMenu }
            menuOption
          >wysyłka</Button>
        </StyledLink>
      </li>
      <li>
        <Hamburger isTabletOrMobile={ isTabletOrMobile }/>
      </li>

    </StyledList>
  </StyledMenuBar>
);

const mapStateToProps = state => ({
  isTabletOrMobile: getIsTabletOrMobile(state),
});

MenuBar.propTypes = {
  showMenu: PropTypes.bool.isRequired,
  isTabletOrMobile: PropTypes.bool.isRequired,
};

export default connect(mapStateToProps)(MenuBar);