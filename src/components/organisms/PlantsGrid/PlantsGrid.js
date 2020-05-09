import React, { useEffect } from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { setPlantDetails as setPlantDetailsAction } from 'redux/actions/plants/plantActions';
import uniqid from 'uniqid';
import { getPlants } from 'redux/reducers/plantsReducer';
import PlantCard from 'components/molecules/PlantCard/PlantCard';
import Heading from 'components/atoms/Heading/Heading';
import Line from '../../atoms/Line/Line';
import { getIsBigScreen, getIsDesktopOrLaptop, getIsTabletOrMobile } from '../../../redux/reducers/mediaReducer';
import { getError, getPending } from '../../../redux/reducers/plantsReducer';
import MessageBox from '../../atoms/MessageBox/MessageBox';
import { ClipLoader } from 'react-spinners';

export const PLANTS_DICT = {
  bamboos: 'bambusy',
  bananas: 'bananowce',
  grasses: 'trawy',
  waterPlants: 'wodne',
  others: 'inne',
};

const StyledWrapper = styled.div`
  position: relative;
  width: ${ ({ isTabletOrMobile }) => isTabletOrMobile && '100%' } ;
`;

const StyledGridWrapper = styled.div`
  ${ ({ isTabletOrMobile }) => isTabletOrMobile ?
  css`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 2vw;
`
  : css`
  display: grid;
  grid-template-columns: repeat(${ ({ isBigScreen }) => isBigScreen
    ? '3, 400px' : '3, 300px' });
  grid-gap: 50px;
`
};
  
  justify-content: center;
  padding: 20px 0 100px 0;
`;

const StyledClipLoader = css`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
`;

const PlantsGrid = (
  {
    isTabletOrMobile,
    endpoint,
    category,
    setPlantDetails,
    plants,
    pending,
    error,
    isBigScreen,
  },
) => {
  useEffect(() => {
    setPlantDetails(false);
  }, [endpoint, category]);

  const currentPlants = plants[category] || {};

  return (
    <StyledWrapper id={ category } isTabletOrMobile={ isTabletOrMobile }>
      <Heading type='menu'>{ PLANTS_DICT[category] }</Heading>
      <Line/>
      <StyledGridWrapper
        isTabletOrMobile={ isTabletOrMobile }
        isBigScreen={ isBigScreen }>

        <ClipLoader
          css={ StyledClipLoader }
          loading={ pending }/>

        {
          error ?
            <MessageBox>nie udało się załadować 😭</MessageBox>
            : (
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
            )
        }

      </StyledGridWrapper>
    </StyledWrapper>
  );
};


const mapDispatchToProps = dispatch => bindActionCreators({
  setPlantDetails: setPlantDetailsAction,
}, dispatch);

const mapStateToProps = state => ({
  plants: getPlants(state),
  isDesktopOrLaptop: getIsDesktopOrLaptop(state),
  isBigScreen: getIsBigScreen(state),
  isTabletOrMobile: getIsTabletOrMobile(state),
  pending: getPending(state),
  error: getError(state),
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