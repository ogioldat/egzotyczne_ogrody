import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import Button from 'components/atoms/Button/Button';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { PLANTS_DICT } from '../../organisms/PlantsGrid/PlantsGrid';
import { getPlants } from '../../../redux/reducers/plantsReducer';
import { toggleMenu as toggleMenuAction } from '../../../redux/actions/menuActions';


const StyledAnchorLink = styled(AnchorLink)`
  text-decoration: none;
`;

const PlantsList = ({ plants, reversed, toggleMenu }) => (
  <>
    {
      Object.keys(plants).map(key => {
        return (
          <StyledAnchorLink
            onClick={ () => reversed || toggleMenu() }
            href={ `#${ key }` }>
            <Button
              secondary
              reversed={ reversed }
              key={ key }
            >
              { PLANTS_DICT[key] }</Button>
          </StyledAnchorLink>
        );
      })
    }
  </>
);

const MapStateToProps = state => ({
  plants: getPlants(state),
});

const mapDispatchToProps = dispatch => ({
  toggleMenu: () => dispatch(toggleMenuAction()),
});

export default connect(MapStateToProps, mapDispatchToProps)(PlantsList);