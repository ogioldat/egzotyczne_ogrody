import React, { useEffect } from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import fetchPlantsAction from 'redux/actions/plants/fetchPlants';
import { bindActionCreators } from 'redux';
import uniqid from 'uniqid';
import { getPlants } from 'redux/reducers/plantsReducer';
import PlantCard from 'components/molecules/PlantCard/PlantCard';
import Heading from 'components/atoms/Heading/Heading';
import Line from '../../atoms/Line/Line';
import { setPlantDetails as setPlantDetailsAction } from 'redux/actions/plants/plantActions';
import { getIsBigScreen, getIsDesktopOrLaptop, getIsTabletOrMobile } from '../../../redux/reducers/mediaReducer';

export const PLANTS_DICT = {
  bamboos: 'bambusy',
  bananas: 'bananowce',
};

const StyledWrapper = styled.div`
  width: ${ ({ isTabletOrMobile }) => isTabletOrMobile && '100%' } ;
`;

const StyledGridWrapper = styled.div`
  ${ ({ isTabletOrMobile }) => isTabletOrMobile ?
  css`
  display: flex;
 
  flex-direction: column;
`
  : css`
  display: grid;
  grid-template-columns: repeat(${ ({ isTabletOrMobile, isBigScreen }) => isTabletOrMobile
    ? '-1, 1fr' : isBigScreen ? '3, 400px' : '3, 300px' });
`
};

  
  justify-content: center;
  grid-gap: 50px;
  padding: 20px 0 100px 0;
`;


const PlantsGrid = (
  {
    isTabletOrMobile,
    fetchPlants,
    endpoint,
    category,
    setPlantDetails,
    plants,
    isBigScreen,
  },
) => {
  useEffect(() => {
    setPlantDetails(false);
    fetchPlants(endpoint, category);
  }, [endpoint, category]);

  const currentPlants = plants[category] || {};

  return (
    <StyledWrapper id={ category } isTabletOrMobile={ isTabletOrMobile }>
      <Heading type='menu'>{ PLANTS_DICT[category] }</Heading>
      <Line/>
      <StyledGridWrapper isTabletOrMobile={ isTabletOrMobile } isBigScreen={ isBigScreen }>
        {
          Object.keys(currentPlants).map((key, index) => {
            return (
              <PlantCard
                key={ uniqid() }
                objKey={ key }
                index={ index }
                category={ category }
                { ...currentPlants[key] }
              />
            );
          })
        }
      </StyledGridWrapper>
    </StyledWrapper>
  );
};


const mapDispatchToProps = dispatch => bindActionCreators({
  setPlantDetails: setPlantDetailsAction,
  fetchPlants: fetchPlantsAction,
}, dispatch);

const mapStateToProps = state => ({
  plants: getPlants(state),
  isDesktopOrLaptop: getIsDesktopOrLaptop(state),
  isBigScreen: getIsBigScreen(state),
  isTabletOrMobile: getIsTabletOrMobile(state),
});

PlantsGrid.propTypes = {
  isTabletOrMobile: PropTypes.bool.isRequired,
  isBigScreen: PropTypes.bool.isRequired,
  fetchPlants: PropTypes.func.isRequired,
  endpoint: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  setPlantDetails: PropTypes.func.isRequired,
  plants: PropTypes.objectOf(PropTypes.object).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(PlantsGrid);