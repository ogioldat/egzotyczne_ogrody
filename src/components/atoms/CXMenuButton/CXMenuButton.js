import styled from 'styled-components';
import Button from 'components/atoms/Button/Button';

const CXMenuButton = styled(Button)`
  transition: .3s ease background-color, .3s ease color;
  left: -5px;
  color: ${ ({ theme }) => theme.inactive };
  opacity: ${({showMenu}) => showMenu && 0};
  

  
  &::before {
    background-color: transparent;
  }
  
  &:hover {
    color: ${ ({ reversed, theme }) => reversed ? theme.greyLight : theme.greyDark };
      &::after {
      background-color: ${ ({ theme }) => theme.greenDense };
    }
  }
`;


export default CXMenuButton;