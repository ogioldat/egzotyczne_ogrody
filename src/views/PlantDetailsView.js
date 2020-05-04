import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getDetailsPlant, getPlantDetailsEmpty, getPlants } from 'redux/reducers/plantsReducer';
import fetchPlantsAction from 'redux/actions/plants/fetchPlants';
import endpoints from 'assets/data/api';
import { motion } from 'framer-motion';
import { wrapperMotion } from 'assets/motion';
import styled from 'styled-components';
import {
  setCurrentPlant as setCurrentPlantAction,
  setPlantDetails as setPlantDetailsAction,
  setPlantDetailsEmpty as setPlantDetailsEmptyAction,
  toggleModal as toggleModalAction,
  changePlantPhoto as changePlantPhotoAction,
} from '../redux/actions/plants/plantActions';
import { getPending, getCurrentPlantPhoto, getShowModal } from '../redux/reducers/plantsReducer';
import { getIsTabletOrMobile } from '../redux/reducers/mediaReducer';
import PlantDetailsContent from '../components/molecules/PlantDetailsContent/PlantDetailsContent';
import PhotoModal from '../components/organisms/PhotoModal/PhotoModal';
import ImagesGrid from '../components/molecules/ImagesGrid/ImagesGrid';

const StyledWrapper = styled(motion.div)`
  height: 100%;
  width: 100%;
  position: fixed;
  background-color: ${ ({ theme }) => theme.greyLight };
  display: flex;
  justify-content: space-between;
  flex-direction: ${ ({ isTabletOrMobile }) => isTabletOrMobile && 'column' };
  padding: ${ ({ isTabletOrMobile, theme }) => isTabletOrMobile && theme.mobilePadding };
`;

const PlantDetailsView = (
  {
    currentPlant,
    setPlantDetailsEmpty,
    plants,
    pending,
    setCurrentPlant,
    plantDetailsEmpty,
    fetchPlants,
    setPlantDetails,
    isTabletOrMobile,
    currentPlantPhoto,
    toggleModal,
    showModal,
    changePlantPhoto,
  },
) => {
  const targetElement = document.querySelector('body');

  useEffect(() => {
    if (showModal) {
      targetElement.style.overflow = 'hidden';
    } else {
      targetElement.style.overflow = 'visible';
    }
  }, [showModal]);

  useEffect(() => {
    // if plants state is empty -- download default plant
    // (first object from endpoints.plants)
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
  }, [plants]);

  const { name, fact, title, images, description } = currentPlant || {};

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
      isTabletOrMobile={ isTabletOrMobile }
      initial="initial"
      animate="enter"
      exit="exit"
      variants={ wrapperMotion.variants }>
      {
        showModal && <PhotoModal
          changePhoto={ changePlantPhoto }
          toggleModal={ toggleModal }
          currentPhoto={ currentPlantPhoto }
        />
      }
      <PlantDetailsContent
        name={ name }
        images={ images }
        pending={ pending }
        fact={ fact }
        title={ title }
        description={ description }
      />
      {
        (!pending && !isTabletOrMobile) && <ImagesGrid name={ name } images={ images } title={ title }/>
      }
    </StyledWrapper>
  );
};

const mapStateToProps = state => ({
  plants: getPlants(state),
  pending: getPending(state),
  currentPlant: getDetailsPlant(state),
  plantDetailsEmpty: getPlantDetailsEmpty(state),
  isTabletOrMobile: getIsTabletOrMobile(state),
  currentPlantPhoto: getCurrentPlantPhoto(state),
  showModal: getShowModal(state),
});

const mapDispatchToProps = dispatch => bindActionCreators({
  fetchPlants: fetchPlantsAction,
  setPlantDetails: setPlantDetailsAction,
  setPlantDetailsEmpty: setPlantDetailsEmptyAction,
  toggleModal: toggleModalAction,
  changePlantPhoto: changePlantPhotoAction,
  setCurrentPlant: setCurrentPlantAction,
}, dispatch);

PlantDetailsView.propTypes = {
  currentPlant: PropTypes.shape({
    name: PropTypes.string,
    miniatureImage: PropTypes.string,
    title: PropTypes.string,
    fact: PropTypes.string,
    images: PropTypes.arrayOf(PropTypes.string),
    description: PropTypes.string,
  }),
  setPlantDetailsEmpty: PropTypes.func.isRequired,
  plants: PropTypes.objectOf(PropTypes.object),
  pending: PropTypes.bool.isRequired,
  setCurrentPlant: PropTypes.func.isRequired,
  plantDetailsEmpty: PropTypes.bool,
  fetchPlants: PropTypes.func.isRequired,
  setPlantDetails: PropTypes.func.isRequired,
  isTabletOrMobile: PropTypes.bool.isRequired,
  currentPlantPhoto: PropTypes.string,
  toggleModal: PropTypes.func.isRequired,
  showModal: PropTypes.bool.isRequired,
  changePlantPhoto: PropTypes.func.isRequired,
};

PlantDetailsView.defaultProps = {
  plants: {},
  currentPlant: {},
  currentPlantPhoto: '',
  plantDetailsEmpty: true,
};

export default connect(mapStateToProps, mapDispatchToProps)(PlantDetailsView);