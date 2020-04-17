import React from 'react';
import styled from 'styled-components';
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
import { getIsTabletOrMobile } from '../../../redux/reducers/mediaReducer';
import ImagesGrid from '../ImagesGrid/ImagesGrid';


const StyledContentWrapper = styled(motion.div)`
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

const StyledPlantsCarousel = styled(PlantsCarousel)`
  position: absolute;
  bottom: 0;
`;

const StyledButtonWrapper = styled.div`
  width: 100%;
  margin-top: ${ ({ isTabletOrMobile }) => isTabletOrMobile ? '2%' : '30px' };
  display: flex;
  justify-content: space-evenly;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;

const StyledSubtitle = styled(Subtitle)`
  font-size: ${ ({ isTabletOrMobile, theme }) => isTabletOrMobile && theme.fontSize.xs };
`;

const StyledOverflowText = styled.div`
  height: 30vh;
  overflow-y: scroll;
  position: relative;
  padding-bottom: 50px;
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
    pending
  },
) => (
  <StyledContentWrapper
    isTabletOrMobile={ isTabletOrMobile }
    variants={ textMotion.variants }
    transition={ textMotion.transition }
    initial="exit"
    animate="enter"
    exit="exit">
    <Heading type='plantDetails'>{ title }</Heading>
    <StyledSubtitle isTabletOrMobile={ isTabletOrMobile }>{ fact }</StyledSubtitle>
    {
      isTabletOrMobile ?
        <>
          <StyledOverflowText>
            <Paragraph>{ description }</Paragraph>
          </StyledOverflowText>
        </>
        : <Paragraph>{ description }</Paragraph>
    }

    {
      (!pending && isTabletOrMobile) && <ImagesGrid name={ name } images={ images } title={ title }/>
    }

    <StyledControls isTabletOrMobile={ isTabletOrMobile }>
      <StyledPlantsCarousel isTabletOrMobile={ isTabletOrMobile }/>
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
  isTabletOrMobile: getIsTabletOrMobile(state)
});

const mapDispatchToProps = dispatch => ({
  changePlant: direction => dispatch(changePlantAction(direction)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PlantDetailsContent);