import React, { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import SmallCapsText from 'components/atoms/SmallCapsText/SmallCapsText';
import { getPlantCategories, getCurrentCategory } from 'redux/reducers/plantsReducer';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getIsBigScreen, getIsTabletOrMobile } from 'redux/reducers/mediaReducer';
import { setCurrentPlant as setCurrentPlantAction } from 'redux/actions/plants/plantActions';
import { motion } from 'framer-motion';
import { PLANTS_DICT } from '../../organisms/PlantsGrid/PlantsGrid';

const StyledWrapper = styled.div`
  position: relative;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(${ ({ gridSize }) => gridSize }, 20%);
  align-items: center;
  text-align: center;
  background-color: ${ ({ theme }) => theme.greyLight };
  margin-bottom: 20px;
  box-shadow: ${ ({ theme }) => theme.shadow };
  border-radius: 12px;
  
  &::-webkit-scrollbar {
  display: none;
}
`;

const StyledSmallCapsText = styled(SmallCapsText)`
  margin: 5% 10%;  
  cursor: pointer;
  display: flex; 
  user-select: none;
  justify-content: center;
  font-size: ${ ({ theme, isTabletOrMobile, isBigScreen }) => isTabletOrMobile
  ? theme.fontSize.xs : isBigScreen ? theme.fontSize.m : theme.fontSize.s };
  z-index: 2;
  font-weight: ${ ({ active }) => active && 'bolder' };
  transition: 1s transform ${ ({ theme }) => theme.bezier };
  
  &:hover {
    transform: scale(.92);
    font-weight: bolder;
  }
`;

const StyledFocusBox = styled(motion.div)`
  height: 80%;
  width: 15%;
  position: absolute;
  bottom: 10%;
  margin: auto;
  left: ${ ({ shift }) => `${ ((shift * 2) + 1) * 2.5 }% ` };
  transform: translateX(${ ({ shift }) => shift * 100 }%);
  transition: .5s ${ ({ theme }) => theme.bezier };
  box-shadow: ${ ({ theme }) => theme.shadow };
  background-color: ${ ({ theme }) => theme.greenLight };
  z-index: 1;
  color: transparent;
  border-radius: ${ ({ isTabletOrMobile }) => isTabletOrMobile ? '8px' : '12px' } ;
`;

const PlantsCarousel = (
  {
    plantCategories,
    setCurrentPlant,
    isTabletOrMobile,
    isBigScreen,
    currentCategory,
  },
) => {
  const [activePlant, setActive] = useState(currentCategory);
  const currentIndex = plantCategories.indexOf(activePlant);

  return (
    <StyledWrapper
      isTabletOrMobile={ isTabletOrMobile }
      gridSize={ plantCategories.length }>
      <StyledFocusBox
        isTabletOrMobile={ isTabletOrMobile }
        shift={ currentIndex }>{ activePlant }</StyledFocusBox>
      {
        plantCategories.map(plant => (
            <StyledSmallCapsText
              isBigScreen={ isBigScreen }
              isTabletOrMobile={ isTabletOrMobile }
              key={ plant }
              onClick={ () => {
                setActive(plant);
                setCurrentPlant({ category: plant, index: 0 });
              } }
              active={ plant === activePlant }>
              {
                PLANTS_DICT[plant]
              }
            </StyledSmallCapsText>
          ),
        )
      }
    </StyledWrapper>
  );
};

const mapStateToProps = state => ({
  plantCategories: getPlantCategories(state),
  isBigScreen: getIsBigScreen(state),
  isTabletOrMobile: getIsTabletOrMobile(state),
  currentCategory: getCurrentCategory(state),
});

const mapDispatchToProps = dispatch => bindActionCreators({
  setCurrentPlant: setCurrentPlantAction,
}, dispatch);

PlantsCarousel.propTypes = {
  plantCategories: PropTypes.arrayOf(PropTypes.string).isRequired,
  setCurrentPlant: PropTypes.func.isRequired,
  isTabletOrMobile: PropTypes.bool.isRequired,
  isBigScreen: PropTypes.bool.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(PlantsCarousel);