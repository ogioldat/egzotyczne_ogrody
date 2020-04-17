import React from 'react';
import styled from 'styled-components';
import HomeSection from 'components/organisms/HomeSection/HomeSection';
import AboutUs from 'components/organisms/AboutUs/AboutUs';
import OurPlants from 'components/organisms/OurPlants/OurPlants';
import Footer from 'components/organisms/Footer/Footer';


const StyledWrapper = styled.div`
  position: relative;
`;

const HomeView = () => (
  <>
    <StyledWrapper>
      <HomeSection/>
      <AboutUs/>
      <OurPlants/>
      <Footer/>
    </StyledWrapper>
  </>
);

export default HomeView;