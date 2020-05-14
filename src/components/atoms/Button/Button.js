import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const ButtonWrapper = styled.button`
  display: ${ ({ showMenu, hideOnMobile }) => showMenu || hideOnMobile ? 'none' : 'block' };
  position: relative;
  text-decoration: none;
  user-select: none;
  background: none;
  border: none;
  margin: ${ ({ menuOption, isTabletOrMobile, footer, menu }) => ((footer || menu) && isTabletOrMobile)
  ? '4px 0' : !menuOption && ' 20px 0' };
  font-weight: ${ ({ theme }) => theme.bold };
  color: ${ ({ secondary, theme }) => secondary ? theme.inactive : theme.greyDark };
  font-size: ${ ({ theme, footer, isTabletOrMobile, menu }) => (menu && isTabletOrMobile)
  ? theme.fontSize.mobileMenuButton : (footer && isTabletOrMobile) ? theme.fontSize.mobileFooterButton : theme.fontSize.m };
  outline: none;
  text-transform: lowercase;
  cursor: pointer;
  z-index: 2;
  white-space: nowrap;
  transition: 1s transform ${ ({ theme }) => theme.bezier }, 
    1s color cubic-bezier(0.16, 1, 0.3, 1);
  
  &:hover {
   color: ${ ({ theme, reversed }) => reversed ? theme.greyLight : theme.greyDark };
   transform: scale(.95);
  
    * {
      animation: 1.5s forwards ${ ({ theme }) => theme.bezier } ${ ({ theme }) => theme.animation };
    }
  }
`;

const StyledRect = styled.div`
  position: absolute;
  bottom: 10px;
  z-index: -1;
  width: 90%;
  height: 28px;
  transform-origin: left;
  animation: 1.5s .3s forwards ${ ({ theme }) => theme.bezier } ${ ({ theme }) => theme.animation };
  transform: translateX(10%);
  background-color: ${ ({ theme }) => theme.greenLight };
`;

const StyledUnderline = styled.div`
  transform-origin: left;
  width: 100%;
  height: 4px;
  opacity: 0;
  background-color: ${ ({ theme }) => theme.greenLight };
  transform: translateX(-10px);
`;

const Button = ({ children, secondary = null, onClick, reversed, showMenu, menuOption, hideOnMobile, footer, isTabletOrMobile, menu }) => (
  <ButtonWrapper
    menu={ menu }
    hideOnMobile={ hideOnMobile }
    menuOption={ menuOption }
    footer={ footer }
    isTabletOrMobile={ isTabletOrMobile }
    showMenu={ showMenu }
    secondary={ secondary }
    onClick={ onClick }
    reversed={ reversed }>
    {
      !secondary && <StyledRect/>
    }
    {
      children
    }
    <StyledUnderline/>
  </ButtonWrapper>
);

Button.propTypes = {
  children: PropTypes.string.isRequired,
  secondary: PropTypes.bool,
  onClick: PropTypes.func,
  reversed: PropTypes.bool,
  showMenu: PropTypes.bool,
  menuOption: PropTypes.bool,
  hideOnMobile: PropTypes.bool,
  footer: PropTypes.bool,
  isTabletOrMobile: PropTypes.bool,
  menu: PropTypes.bool
};

Button.defaultProps = {
  secondary: false,
  reversed: false,
  showMenu: false,
  menuOption: false,
  hideOnMobile: false,
  footer: false,
  isTabletOrMobile: false,
  menu: false
};


export default Button;
