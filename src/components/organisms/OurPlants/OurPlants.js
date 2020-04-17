import React from 'react';
import styled from 'styled-components';
import uniqid from 'uniqid';
import endpoints from 'data/api';
import Heading from 'components/atoms/Heading/Heading';
import PlantsGrid from 'components/organisms/PlantsGrid/PlantsGrid';

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 100px;
`;

const OurPlants = () => (
  <StyledWrapper id='plants'>
    <Heading>nasze rośliny</Heading>
    {
      Object.keys(endpoints.plants).map((key, index) => {
        const { category, address } = endpoints.plants[key];

        return (
          <PlantsGrid
            id={key}
            category={ category }
            key={ uniqid() }
            endpoint={ address }/>
        );
      })
    }
  </StyledWrapper>
);


export default OurPlants;