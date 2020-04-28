import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Heading from 'components/atoms/Heading/Heading';
import Button from 'components/atoms/Button/Button';
import bananaAboutUs from 'assets/images/bananaAboutUs.JPG';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { routes } from 'routes';
import ParagraphCard from 'components/atoms/ParagraphCard/ParagraphCard';
import { getIsTabletOrMobile, } from 'redux/reducers/mediaReducer';
import Subtitle from 'components/atoms/Subtitle/Subtitle';

const StyledWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  padding: 5% 0;
`;

const StyledBackground = styled.img`
  width: 50%;
  display: ${ ({ isTabletOrMobile }) => isTabletOrMobile && 'none' };
`;

const StyledContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const StyledLink = styled(Link)`
  margin-top: 10%;
  text-decoration: none;
`;

const StyledSubtitle = styled(Subtitle)`
  font-size: ${ ({theme, isTabletOrMobile}) => isTabletOrMobile
  && `calc(3.125vw + ${ theme.fontSize.mobileSubtitle })`};
`;

const AboutUs = ({ isTabletOrMobile }) => (
  <StyledWrapper id='about-us'>
    <StyledBackground src={ bananaAboutUs }
                      isTabletOrMobile={ isTabletOrMobile }/>
    <StyledContentWrapper>
      <Heading>O nas</Heading>
      <StyledSubtitle
        isTabletOrMobile={ isTabletOrMobile }>
        Jesteśmy małą, rodzinną firmą...
      </StyledSubtitle>
      <ParagraphCard
        isTabletOrMobile={ isTabletOrMobile }>
        Od piętnastu lat
        zajmujemy się uprawą roślin. Stale wzbogacamy
        asortyment i poszukujemy nowych, ciekawych gatunków
        roślin, które mogą cieszyć oko pasjonatów egzotyki
        lub zaszczepić tę pasję.
      </ParagraphCard>
      <StyledLink to={ routes.aboutUs }>
        <Button>czytaj więcej!</Button>
      </StyledLink>
    </StyledContentWrapper>
  </StyledWrapper>
);

const mapStateToProps = state => ({
  isTabletOrMobile: getIsTabletOrMobile(state),
});

AboutUs.propTypes = {
  isTabletOrMobile: PropTypes.bool.isRequired
};

export default connect(mapStateToProps)(AboutUs);