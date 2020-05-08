import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { getIsTabletOrMobile } from '../redux/reducers/mediaReducer';
import HomeSection from '../components/organisms/HomeSection/HomeSection';
import AboutUs from '../components/organisms/AboutUs/AboutUs';
import OurPlants from '../components/organisms/OurPlants/OurPlants';
import Footer from '../components/organisms/Footer/Footer';
import CookieAlert from '../components/molecules/CookieAlert/CookieAlert';

const StyledWrapper = styled.div`
  position: relative;
  padding: 0  ${ ({ isTabletOrMobile, theme }) => isTabletOrMobile && theme.mobilePadding };
`;

const HomeView = ({ isTabletOrMobile }) => {
  const [accepted, setAccepted] = useState(false)

  useEffect(() => {
    const cookieAlert = !!window.localStorage.getItem('cookie-alert');

    if(cookieAlert){
      setAccepted(true)
    }
  }, [])

  return (
    <>
      <HomeSection/>
      <StyledWrapper isTabletOrMobile={ isTabletOrMobile }>
        <AboutUs/>
        <OurPlants/>
      </StyledWrapper>
      <Footer/>
      {
        !accepted && <CookieAlert accept={setAccepted}/>
      }
    </>
  );
};

const mapStateToProps = state => ({
  isTabletOrMobile: getIsTabletOrMobile(state),
});

export default connect(mapStateToProps)(HomeView);