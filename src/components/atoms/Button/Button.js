import React from 'react';
import styled, { keyframes } from 'styled-components';
import { motion } from 'framer-motion';


const ButtonWrapper = styled(motion.button)`
  display: ${ ({ showMenu }) => showMenu ? 'none' : 'block' };
  position: relative;
  text-decoration: none;
  background: none;
  border: none;
  margin: ${ ({ menuOption }) => !menuOption && ' 20px 0' };
  font-weight: ${ ({ theme }) => theme.bold };
  color: ${ ({ secondary, theme }) => secondary ? theme.inactive : theme.greyDark };
  font-size: ${ ({ theme }) => theme.fontSize.m };
  outline: none;
  text-transform: lowercase;
  cursor: pointer;
  z-index: 2;
  white-space: nowrap;
  transition: 1s transform cubic-bezier(0.16, 1, 0.3, 1), 
    1s color cubic-bezier(0.16, 1, 0.3, 1);
  
  &:hover {
   color: ${ ({ theme, reversed }) => reversed ? theme.greyLight : theme.greyDark };
   transform: scale(.95);
  
    * {
      animation: 1.5s forwards cubic-bezier(0.16, 1, 0.3, 1) ${ ({ theme }) => theme.animation };
    }
  }
`;

const StyledRect = styled.div`
  position: absolute;
  bottom: 10px;
  z-index: -1;
  width: 100%;
  height: 28px;
  transform-origin: left;
  animation: 1.5s .3s forwards cubic-bezier(0.16, 1, 0.3, 1) ${ ({ theme }) => theme.animation };
  transform: translateX(10%);
  background-color: ${ ({ theme }) => theme.greyLight };
`;

const StyledUnderline = styled.div`
  transform-origin: left;
  width: 100%;
  height: 4px;
  opacity: 0;
  background-color: ${ ({ theme }) => theme.greenDense };
  transform: translateX(-10px);
`;

const Button = ({ children, secondary, onClick, reversed, showMenu, menuOption }) => (
  <ButtonWrapper
    menuOption={ menuOption }
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


export default Button;
