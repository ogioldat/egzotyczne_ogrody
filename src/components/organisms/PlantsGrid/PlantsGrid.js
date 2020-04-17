import React from 'react';
import styled from 'styled-components';
import * as PropTypes from 'prop-types';
import { connect } from 'react-redux';
import fetchPlantsAction from 'redux/actions/plants/fetchPlants';
import { bindActionCreators } from 'redux';
import { getPlants, getCurrentPlant, getPlantDetailsEmpty } from 'redux/reducers/plantsReducer';
import PlantCard from 'components/molecules/PlantCard/PlantCard';
import Heading from 'components/atoms/Heading/Heading';
import { setPlantDetails as setPlantDetailsAction } from 'redux/actions/plants/plantActions';


export const PLANTS_DICT = {
  bamboos: 'bambusy',
  bananas: 'bananowce',
};

const StyledGridWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  padding: 20px 0 100px 0;
`;

const StyledWrapper = styled.div`
  
`;

class PlantsGrid extends React.Component {
  componentDidMount() {
    const { fetchPlants, endpoint, category, setPlantDetails } = this.props;
    setPlantDetails(false);
    fetchPlants(endpoint, category);
  }

  render() {
    let { name, plants, category } = this.props;
    const currentPlants = plants[category] || {};

    return (
      <StyledWrapper id={ category }>
        <Heading type='menu'>{ PLANTS_DICT[category] }</Heading>
        <StyledGridWrapper>
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
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({
  setPlantDetails: setPlantDetailsAction,
  fetchPlants: fetchPlantsAction,
}, dispatch);

const mapStateToProps = state => ({
  plants: getPlants(state),
});

export default connect(mapStateToProps, mapDispatchToProps)(PlantsGrid);