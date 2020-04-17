import React from 'react';
import styled from 'styled-components';
import { routes } from 'routes';
import { setCurrentPlant as setCurrentPlantAction } from 'redux/actions/plants/plantActions';
import { connect } from 'react-redux';
import Heading from 'components/atoms/Heading/Heading';
import { getDetailsPlant } from 'redux/reducers/plantsReducer';
import { Link } from 'react-router-dom';

const StyledWrapper = styled.div`
  width: 400px;
  height: 500px;
  box-shadow: 0 10px 40px -10px #00000033;
  margin: 25px 50px;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  background: white;
  transition: transform .3s;
  text-decoration: none;
  color: ${ ({ theme }) => theme.greyDark };
  cursor: pointer;
  overflow: hidden;
  
  &::after {
    position: absolute;
    bottom: 0;
    content: 'CZYTAJ WIĘCEJ';
    width: 100%;
    padding: 10px 0;
    font-size: ${ ({ theme }) => theme.fontSize.xs };
    font-weight: bold;
    color: white;
    text-align: center;
    background-color: ${ ({ theme }) => theme.greenDense };
    transition: transform .4s;
    transform: translateY(100%);
  }
  
  &:hover {
    transform: scale(1.02);
    
    &::after {
      transform: translateY(0);
    }
  }
`;

const StyledImage = styled.img`
  box-shadow: 0 10px 40px -10px #00000022;
  margin: auto;
  position: absolute;
  top: 40px;
  width: 320px;
  height: 320px;
  border-radius: 50%;
`;


const PlantCard = ({ miniatureImage, index, title, setCurrentPlant, objKey, currentPlant, category }) => (
  <StyledWrapper
    onClick={ () => {
      setCurrentPlant({ key: objKey, category, index });
    } }
    as={ Link }
    to={ routes.plantDetails }
  >
    <StyledImage src={ miniatureImage }/>
    <Heading type='small' card>{ title }</Heading>
  </StyledWrapper>
);

const mapDispatchToProps = dispatch => ({
  setCurrentPlant: key => dispatch(setCurrentPlantAction(key)),
});

const mapStateToProps = state => ({
  currentPlant: getDetailsPlant(state),
});

export default connect(mapStateToProps, mapDispatchToProps)(PlantCard);