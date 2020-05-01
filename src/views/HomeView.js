import React, { Suspense, lazy } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { getIsTabletOrMobile } from '../redux/reducers/mediaReducer';
const HomeSection = lazy(() => import('components/organisms/HomeSection/HomeSection'))
const AboutUs = lazy(() => import('components/organisms/AboutUs/AboutUs'))
const OurPlants = lazy(() => import('components/organisms/OurPlants/OurPlants'))
const Footer = lazy(() => import('components/organisms/Footer/Footer'))


const StyledWrapper = styled.div`
  position: relative;
  padding: 0  ${ ({ isTabletOrMobile, theme }) => isTabletOrMobile && theme.mobilePadding };
`;

const HomeView = ({ isTabletOrMobile }) => (
  <>
    <Suspense fallback={<div>s</div>}>
      <HomeSection/>
      <StyledWrapper isTabletOrMobile={ isTabletOrMobile }>
        <AboutUs/>
        <OurPlants/>
      </StyledWrapper>
      <Footer/>
    </Suspense>
  </>
);

const mapStateToProps = state => ({
  isTabletOrMobile: getIsTabletOrMobile(state),
});

export default connect(mapStateToProps)(HomeView);