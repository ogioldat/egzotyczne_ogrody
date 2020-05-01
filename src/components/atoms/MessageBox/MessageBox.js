import React from 'react';
import styled from 'styled-components';
import Subtitle from '../Subtitle/Subtitle';

const StyledMessageBox = styled.div`
  text-align: justify;
  position: absolute;
  height: 50px;
  left: 0;
  right: 0;
  top: 50%;
  bottom: 0;
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 12px;
  background-color: ${ ({ theme }) => theme.greyLight };
  color: ${ ({ theme }) => theme.greyDark };;
`;

const MessageBox = ({ children }) => (
  <StyledMessageBox>
      {
        children
      }
  </StyledMessageBox>
);

export default MessageBox;