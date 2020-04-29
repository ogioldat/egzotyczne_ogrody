import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { textMotion } from 'assets/motion';
import { Link } from 'react-router-dom';
import { changePlant as changePlantAction } from 'redux/actions/plants/plantActions';
import { motion } from 'framer-motion';
import Button from '../../atoms/Button/Button';
import PlantsCarousel from '../PlantsCarousel/PlantsCarousels';
import Heading from '../../atoms/Heading/Heading';
import Paragraph from '../../atoms/Paragraph/Paragraph';
import Subtitle from '../../atoms/Subtitle/Subtitle';
import { routes } from '../../../routes';
import { getIsBigScreen, getIsTabletOrMobile } from '../../../redux/reducers/mediaReducer';
import ImagesGrid from '../ImagesGrid/ImagesGrid';

const StyledContentWrapper = styled.div`
  height: 100%;
  min-width: ${ ({ isTabletOrMobile }) => !isTabletOrMobile && '800px' };
  width:  ${ ({ isTabletOrMobile }) => !isTabletOrMobile && '70%' };;
  position: relative;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: ${ ({ isTabletOrMobile }) => !isTabletOrMobile && '70px 140px 70px 140px' };
`;

const StyledControls = styled.div`
  display: flex;
  position: absolute;
  flex-direction: column;
  align-items: center;
  left: 50%;
  width: 100%;
  padding: ${ ({ isTabletOrMobile }) => !isTabletOrMobile && '0 140px' };
  bottom: 0;
  transform: translate(-50%, 0);
`;

const StyledButton = styled(Button)`
  margin: 0 30px;
`;

const StyledButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;

const StyledSubtitle = styled(Subtitle)`
  font-size: ${ ({ isTabletOrMobile, theme, isBigScreen }) => isTabletOrMobile
  ? theme.fontSize.xxs : !isBigScreen && theme.fontSize.s };
`;

const StyledOverflowText = styled.div`
  height: 20vh;
  overflow-y: scroll;
  position: relative;
  padding-bottom: 50px;
`;

const StyledParagraph = styled(Paragraph)`
  font-size: ${ ({ theme }) => theme.fontSize.xs };
`;

const PlantDetailsContent = (
  {
    isTabletOrMobile,
    fact,
    title,
    name,
    images,
    description,
    changePlant,
    pending,
    isBigScreen,
  },
) => (
  <StyledContentWrapper isTabletOrMobile={ isTabletOrMobile }>
    <Heading type='plantDetails'>{ title }</Heading>
    <StyledSubtitle isBigScreen={ isBigScreen } isTabletOrMobile={ isTabletOrMobile }>{ fact }</StyledSubtitle>
    {
      isTabletOrMobile ?
        <>
          <StyledOverflowText>
            <StyledParagraph>{ description }</StyledParagraph>
          </StyledOverflowText>
        </>
        : !isBigScreen
        ? <StyledParagraph>{ description }</StyledParagraph>
        :
         <Paragraph>{ description }</Paragraph>
    }

    {
      (!pending && isTabletOrMobile) && <ImagesGrid name={ name } images={ images } title={ title }/>
    }

    <StyledControls isTabletOrMobile={ isTabletOrMobile }>
      <PlantsCarousel isTabletOrMobile={ isTabletOrMobile }/>
      <StyledButtonWrapper isTabletOrMobile={ isTabletOrMobile }>
        <StyledLink to={ routes.home }>
          <StyledButton
            menu
            isTabletOrMobile={ isTabletOrMobile }
            secondary>strona główna</StyledButton>
        </StyledLink>

        <Button
          menu
          isTabletOrMobile={ isTabletOrMobile }
          secondary
          onClick={ () => changePlant('next') }
        >
          następna roślina
        </Button>
      </StyledButtonWrapper>
    </StyledControls>
  </StyledContentWrapper>
);

const mapStateToProps = state => ({
  isTabletOrMobile: getIsTabletOrMobile(state),
  isBigScreen: getIsBigScreen(state),
});

const mapDispatchToProps = dispatch => ({
  changePlant: direction => dispatch(changePlantAction(direction)),
});

PlantDetailsContent.propTypes = {
  isTabletOrMobile: PropTypes.bool.isRequired,
  fact: PropTypes.string,
  title: PropTypes.string,
  name: PropTypes.string,
  images: PropTypes.arrayOf(PropTypes.string),
  description: PropTypes.string,
  changePlant: PropTypes.func.isRequired,
  pending: PropTypes.bool,
};

PlantDetailsContent.defaultProps = {
  pending: false,
  images: [],
  description: '',
  name: '',
  fact: '',
  title: '',
};

export default connect(mapStateToProps, mapDispatchToProps)(PlantDetailsContent);