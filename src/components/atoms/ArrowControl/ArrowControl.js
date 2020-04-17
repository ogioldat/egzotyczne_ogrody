import styled from 'styled-components';

const ArrowControl = styled.img`
  transform: rotate(${ ({ direction }) => direction === 'prev'
  ? '90deg' : direction === 'next' ? '-90deg' : 0});
  width: 50px;
  height: 50px;
  background: none;
  filter: brightness(400%);
  cursor: pointer;
  padding: 5px;
  box-sizing: content-box;
  transition: transform .5s ${ ({ theme }) => theme.bezier },
    opacity .5s ${ ({ theme }) => theme.bezier };
  
  &:hover {
    opacity: .6;
    transform: scale(.9) rotate(${ ({ direction }) => direction === 'prev'
  ? '90deg' : direction === 'next' ? '-90deg' : 0});
  }
`;


export default ArrowControl;
