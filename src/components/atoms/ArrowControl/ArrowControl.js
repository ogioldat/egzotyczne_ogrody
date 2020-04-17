import styled from 'styled-components';

const ArrowControl = styled.img`
  transform: rotate(${ ({ direction }) => direction === 'prev'
  ? '90deg' : direction === 'next' ? '-90deg' : 0});
  width: 50px;
  height: 50px;
  background: none;
  filter: brightness(400%);
  cursor: pointer;
  padding: 12px;
  box-sizing: content-box;
  transition: .3s opacity ease;
  
  &:hover {
    opacity: .6;
  }
`;


export default ArrowControl;
