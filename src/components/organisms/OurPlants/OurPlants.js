import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import uniqid from 'uniqid';
import endpoints from 'assets/data/api';
import Heading from 'components/atoms/Heading/Heading';
import PlantsGrid from 'components/organisms/PlantsGrid/PlantsGrid';
import { connect } from 'react-redux';
import { getIsTabletOrMobile } from 'redux/reducers/mediaReducer';

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const OurPlants = ({ isTabletOrMobile }) => (
  <StyledWrapper id='plants' isTabletOrMobile={ isTabletOrMobile }>
    <Heading isTabletOrMobile={ isTabletOrMobile }>nasze rośliny</Heading>
    {
      Object.keys(endpoints.plants).map((key) => {
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

OurPlants.propTypes = {
  isTabletOrMobile: PropTypes.bool.isRequired
};

export default connect(mapStateToProps)(OurPlants);