import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { routes } from 'routes';
import { setCurrentPlant as setCurrentPlantAction } from 'redux/actions/plants/plantActions';
import { connect } from 'react-redux';
import Heading from 'components/atoms/Heading/Heading';
import { getDetailsPlant } from 'redux/reducers/plantsReducer';
import { Link } from 'react-router-dom';
import { getIsTabletOrMobile } from '../../../redux/reducers/mediaReducer';

const StyledWrapper = styled.div`
  width: ${ ({ isTabletOrMobile }) => isTabletOrMobile ? '100%' : '400px' };
  height: ${ ({ isTabletOrMobile }) => isTabletOrMobile ? '450px' : '500px' };;
  box-shadow: 0 10px 40px -10px #00000033;
  margin: ${ ({ isTabletOrMobile }) => isTabletOrMobile ? '10px 0 30px 0' : '25px 50px' };
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  background: white;
  transition: transform .8s ${ ({ theme }) => theme.bezier };
  text-decoration: none;
  color: ${ ({ theme }) => theme.greyDark };
  cursor: pointer;
  overflow: hidden;
  
  &:hover {
    transform: scale(1.03);
    
    * + div {
      transform: translateY(0);
    }
  }
`;

const StyledBlock = styled.div`
    position: absolute;
    bottom: 0;
    width: 100%;
    padding: 10px 0;
    font-size: ${ ({ theme }) => theme.fontSize.xs };
    font-weight: bold;
    color: white;
    text-align: center;
    background-color: ${ ({ theme }) => theme.greenDense };
    transition: transform .8s ${ ({ theme }) => theme.bezier };
    transform: translateY(100%);
`;

const StyledImage = styled.img`
  box-shadow: 0 10px 40px -10px #00000022;
  margin: auto;
  position: absolute;
  top: 40px;
  width: ${ ({ isTabletOrMobile }) => isTabletOrMobile ? '260px' : '320px' };
  height: ${ ({ isTabletOrMobile }) => isTabletOrMobile ? '260px' : '320px' };;
  border-radius: 50%;
`;

const StyledLink = styled(Link)`
  color: inherit;
  text-decoration: none;
`;

const PlantCard = (
  {
    miniatureImage,
    index,
    title,
    setCurrentPlant,
    objKey,
    category,
    isTabletOrMobile,
  },
) => (
  <StyledLink to={ routes.plantDetails }>
    <StyledWrapper
      isTabletOrMobile={ isTabletOrMobile }
      onClick={ () => {
        setCurrentPlant({ key: objKey, category, index });
      } }>
      <StyledImage
        src={ miniatureImage }
        isTabletOrMobile={ isTabletOrMobile }/>
      <Heading type='small' card>{ title }</Heading>
      <StyledBlock>CZYTAJ WIĘCEJ</StyledBlock>
    </StyledWrapper>
  </StyledLink>
);

const mapDispatchToProps = dispatch => ({
  setCurrentPlant: key => dispatch(setCurrentPlantAction(key)),
});

const mapStateToProps = state => ({
  currentPlant: getDetailsPlant(state),
  isTabletOrMobile: getIsTabletOrMobile(state),
});

PlantCard.propTypes = {
  miniatureImage: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  setCurrentPlant: PropTypes.func.isRequired,
  objKey: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  isTabletOrMobile: PropTypes.bool.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(PlantCard);