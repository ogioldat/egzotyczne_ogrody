import React from 'react';
import styled from 'styled-components';
import HomeSection from 'components/organisms/HomeSection/HomeSection';
import AboutUs from 'components/organisms/AboutUs/AboutUs';
import OurPlants from 'components/organisms/OurPlants/OurPlants';
import { connect } from 'react-redux';
import Footer from 'components/organisms/Footer/Footer';
import { getIsTabletOrMobile } from '../redux/reducers/mediaReducer';


const StyledWrapper = styled.div`
  position: relative;
  padding: 0  ${({isTabletOrMobile, theme}) => isTabletOrMobile && theme.mobilePadding};
`;

const HomeView = ({ isTabletOrMobile }) => (
  <>
    <HomeSection/>
    <StyledWrapper isTabletOrMobile={ isTabletOrMobile }>
      <AboutUs/>
      <OurPlants/>
    </StyledWrapper>
    <Footer/>
  </>
);

const mapStateToProps = state => ({
  isTabletOrMobile: getIsTabletOrMobile(state),
});

export default connect(mapStateToProps)(HomeView);