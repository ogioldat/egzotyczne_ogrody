import React from 'react';
import { connect } from 'react-redux';
import Subtitle from 'components/atoms/Subtitle/Subtitle';
import Heading from 'components/atoms/Heading/Heading';
import Paragraph from 'components/atoms/Paragraph/Paragraph';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { getDetailsPlant, getPlants, getPlantDetailsEmpty } from 'redux/reducers/plantsReducer';
import fetchPlantsAction from 'redux/actions/plants/fetchPlants';
import endpoints from 'data/api';
import { motion } from 'framer-motion';
import { wrapperMotion, imageMotion, textMotion } from 'assets/motion';
import styled from 'styled-components';

import { Link } from 'react-router-dom';
import { routes } from '../routes';
import PlantsCarousel from '../components/molecules/PlantsCarousel/PlantsCarousels';
import {
  setCurrentPlant as setCurrentPlantAction,
  setPlantDetails as setPlantDetailsAction,
  changePlant as changePlantAction,
  setPlantDetailsEmpty as setPlantDetailsEmptyAction,
} from '../redux/actions/plants/plantActions';
import { getPending } from '../redux/reducers/plantsReducer';
import Button from '../components/atoms/Button/Button';

const StyledWrapper = styled(motion.div)`
  height: 100vh;
  background-color: ${ ({ theme }) => theme.greyLight };
  display: flex;
  justify-content: space-between;
  //grid-template-columns: 1fr 1fr;
`;

const StyledImage = styled.img`
  height: 100vh;
`;

const StyledContentWrapper = styled(motion.div)`
  height: 100%;
  min-width: 1000px;
  position: relative;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 70px 140px 0 140px;
`;

const StyledControls = styled.div`
  display: flex;
  position: absolute;
  flex-direction: column;
  align-items: center;
  left: 50%;
  width: 100%;
  padding: 0 140px;
  bottom: 0;
  transform: translate(-50%, -50%);
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
  margin-top: 30px;
  display: flex;
  justify-content: space-evenly;
`;

const StyledImageBox = styled(motion.div)`
  width: 100%;
  height: 100vh;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;


class PlantDetailsView extends React.Component {
  componentDidMount() {
    // if plants state is empty -- download default plant (first object from endpoints.plants)
    const { fetchPlants, plants, setPlantDetails } = this.props;
    const arePlantsEmpty = Object.keys(plants)
      .map(plantKey => !!Object.keys(plants[plantKey]).length)
      .every(el => el === false);

    if (arePlantsEmpty) {
      Object.keys(endpoints.plants).forEach(key => {
        const { address, category } = endpoints.plants[key];
        fetchPlants(address, category);
      });

      setPlantDetails(true);
    }
  }

  render() {
    const { currentPlant, setPlantDetailsEmpty, plants, pending, changePlant, setCurrentPlant, plantDetailsEmpty } = this.props;
    const { name, fact, title, image, description } = currentPlant || {};

    if (plantDetailsEmpty) {
      const defaultPlantKey = Object.keys(plants[Object.keys(plants)[0]])[0];
      const defaultCategory = endpoints.plants[Object.keys(endpoints.plants)[0]].category;
      if (defaultPlantKey) {
        setCurrentPlant({ key: defaultPlantKey, category: defaultCategory, index: 0 });
        setPlantDetailsEmpty(false);
      }
    }

    return (
      <StyledWrapper
        initial="initial"
        animate="enter"
        exit="exit"
        variants={ wrapperMotion.variants }>
        {
          !pending && (
            <>
              <StyledContentWrapper
                variants={ textMotion.variants }
                transition={ textMotion.transition }
                initial="exit"
                animate="enter"
                exit="exit">
                <Heading type='plantDetails'>{ title }</Heading>
                <Subtitle>{ fact }</Subtitle>
                <Paragraph>{ description }</Paragraph>
                <StyledControls>
                  <StyledPlantsCarousel/>
                  <StyledButtonWrapper>
                    <StyledLink to={ routes.home }>
                      <StyledButton secondary>strona główna</StyledButton>
                    </StyledLink>

                    <Button
                      secondary
                      onClick={ () => changePlant('next') }
                    >
                      następna roślina
                    </Button>
                  </StyledButtonWrapper>
                </StyledControls>
              </StyledContentWrapper>
              <StyledImageBox
                variants={ imageMotion.variants }
                transition={ imageMotion.transition }
                key={ name }>
                <StyledImage src={ image } alt={ title + ' zdj' }/>
              </StyledImageBox>
            </>
          )
        }
      </StyledWrapper>
    );
  }
}

const mapStateToProps = state => ({
  plants: getPlants(state),
  pending: getPending(state),
  currentPlant: getDetailsPlant(state),
  plantDetailsEmpty: getPlantDetailsEmpty(state),
});

const mapDispatchToProps = dispatch => bindActionCreators({
  fetchPlants: fetchPlantsAction,
  setCurrentPlant: setCurrentPlantAction,
  setPlantDetails: setPlantDetailsAction,
  changePlant: changePlantAction,
  setPlantDetailsEmpty: setPlantDetailsEmptyAction,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(PlantDetailsView);