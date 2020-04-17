import React, { useState } from 'react';
import styled from 'styled-components';
import SmallCapsText from 'components/atoms/SmallCapsText/SmallCapsText';
import { getPlantCategories } from 'redux/reducers/plantsReducer';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { motion } from 'framer-motion';
import { setCurrentPlant as setCurrentPlantAction } from 'redux/actions/plants/plantActions';

const StyledWrapper = styled.div`
  position: relative;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(${ ({ gridSize }) => gridSize }, 20%);
  align-items: center;
  text-align: center;
  background-color: ${ ({ theme }) => theme.greyLight };
  box-shadow: ${ ({ theme }) => theme.shadow };
  border-radius: 12px;
  
  &::-webkit-scrollbar {
  display: none;
}
`;

const StyledSmallCapsText = styled(SmallCapsText)`
  margin: 10px 20px;  
  cursor: pointer;
  display: flex; 
  user-select: none;
  justify-content: center;
  font-size: ${ ({ theme, isTabletOrMobile }) => isTabletOrMobile ? theme.fontSize.xs : theme.fontSize.m };
  z-index: 2;
  font-weight: ${ ({ active }) => active && 'bolder' };
  transition: 1s transform ${ ({ theme }) => theme.bezier };
  
  &:hover {
    transform: scale(.95);
  }
`;

const StyledFocusBox = styled(motion.div)`
  height: 70%;
  width: 15%;
  position: absolute;
  bottom: 0;
  top: 0;
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

const PlantsCarousel = ({ plantCategories, setCurrentPlant, isTabletOrMobile }) => {
  const [activePlant, setActive] = useState(plantCategories[0]);
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
              isTabletOrMobile={ isTabletOrMobile }
              key={ plant }
              onClick={ () => {
                setActive(plant);
                setCurrentPlant({ category: plant, index: 0 });
              } }
              active={ plant === activePlant }>
              {
                plant
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
});

const mapDispatchToProps = dispatch => bindActionCreators({
  setCurrentPlant: setCurrentPlantAction,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(PlantsCarousel);