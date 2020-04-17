import React from 'react';
import styled from 'styled-components';
import uniqid from 'uniqid';
import endpoints from 'assets/data/api';
import Heading from 'components/atoms/Heading/Heading';
import PlantsGrid from 'components/organisms/PlantsGrid/PlantsGrid';
import { connect } from 'react-redux';
import { getIsTabletOrMobile } from '../../../redux/reducers/mediaReducer';

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;


const OurPlants = ({ isTabletOrMobile }) => (
  <StyledWrapper id='plants' isTabletOrMobile={ isTabletOrMobile }>
    <Heading isTabletOrMobile={ isTabletOrMobile }>nasze rośliny</Heading>
    {
      Object.keys(endpoints.plants).map((key, index) => {
        const { category, address } = endpoints.plants[key];

        return (
          <PlantsGrid
            id={ key }
            category={ category }
            key={ uniqid() }
            endpoint={ address }/>
        );
      })
    }
  </StyledWrapper>
);

const mapStateToProps = state => ({
  isTabletOrMobile: getIsTabletOrMobile(state),
});

export default connect(mapStateToProps)(OurPlants);