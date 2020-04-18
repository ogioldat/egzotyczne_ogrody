import React, { useEffect } from 'react';
import styled from 'styled-components';
import  PropTypes from 'prop-types';
import { connect } from 'react-redux';
import fetchPlantsAction from 'redux/actions/plants/fetchPlants';
import { bindActionCreators } from 'redux';
import { getPlants } from 'redux/reducers/plantsReducer';
import PlantCard from 'components/molecules/PlantCard/PlantCard';
import Heading from 'components/atoms/Heading/Heading';
import { setPlantDetails as setPlantDetailsAction } from 'redux/actions/plants/plantActions';
import { getIsDesktopOrLaptop, getIsTabletOrMobile } from '../../../redux/reducers/mediaReducer';

export const PLANTS_DICT = {
  bamboos: 'bambusy',
  bananas: 'bananowce',
};

const StyledGridWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(${ ({ isTabletOrMobile }) => isTabletOrMobile ? -1 : 3 }, 1fr);
  padding: 20px 0 100px 0;
`;

const StyledWrapper = styled.div`
   width: ${ ({ isTabletOrMobile }) => isTabletOrMobile && '100%' };
`;

const PlantsGrid = (
  {
    isTabletOrMobile,
    fetchPlants,
    endpoint,
    category,
    setPlantDetails,
    plants,
  },
) => {
  useEffect(() => {
    setPlantDetails(false);
    fetchPlants(endpoint, category);
  }, []);

  const currentPlants = plants[category] || {};

  return (
    <StyledWrapper
      isTabletOrMobile={ isTabletOrMobile }
      id={ category }>
      <Heading type='menu'>{ PLANTS_DICT[category] }</Heading>
      <StyledGridWrapper isTabletOrMobile={ isTabletOrMobile }>
        {
          Object.keys(currentPlants).map((key, index) => {
            return (
              <PlantCard
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
  isTabletOrMobile: getIsTabletOrMobile(state),
});

PlantsGrid.propTypes = {
  isTabletOrMobile: PropTypes.bool.isRequired,
  fetchPlants: PropTypes.func.isRequired,
  endpoint: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  setPlantDetails: PropTypes.func.isRequired,
  plants: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(PlantsGrid);