import React from 'react';
import styled from 'styled-components';
import Subtitle from '../Subtitle/Subtitle';

const StyledMessageBox = styled.div`
  text-align: justify;
  padding: 10px 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 12px;
  background-color: ${ ({ theme }) => theme.greenDense };
  color: white;
`;

const MessageBox = ({ children }) => (
  <StyledMessageBox>
      {
        children
      }
  </StyledMessageBox>
);

export default MessageBox;