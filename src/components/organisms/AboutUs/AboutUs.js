import React from 'react';
import styled from 'styled-components';
import Heading from 'components/atoms/Heading/Heading';
import Button from 'components/atoms/Button/Button';
import bambooBG from 'assets/images/bamboo.png';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { routes } from '../../../routes';
import ParagraphCard from '../../atoms/ParagraphCard/ParagraphCard';
import {
  getIsDesktopOrLaptop,
  getIsTabletOrMobile,
} from '../../../redux/reducers/mediaReducer';
import Subtitle from '../../atoms/Subtitle/Subtitle';


const StyledWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  padding: 5% 0;
`;

const StyledBackground = styled.img`
  height: 80vh;
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


const AboutUs = ({ isDesktopOrLaptop, isTabletOrMobile }) => (
  <StyledWrapper id='about-us'>
    <StyledBackground src={ bambooBG }
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
  isDesktopOrLaptop: getIsDesktopOrLaptop(state),
  isTabletOrMobile: getIsTabletOrMobile(state),
});

export default connect(mapStateToProps)(AboutUs);