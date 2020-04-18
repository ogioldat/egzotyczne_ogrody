import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { toggleMenu as toggleMenuAction } from 'redux/actions/menuActions';
import { connect } from 'react-redux';
import Button from 'components/atoms/Button/Button';
import { Link } from 'react-router-dom';
import { routes } from 'routes';
import Heading from '../../atoms/Heading/Heading';
import { getIsTabletOrMobile } from '../../../redux/reducers/mediaReducer';


const StyledWrapper = styled.div`
  margin: ${ ({ isTabletOrMobile }) => isTabletOrMobile ? '6% 0' : '15% auto' };
  width: ${ ({ isTabletOrMobile }) => isTabletOrMobile && '30vw' };
`;

const StyledLink = styled(Link)`
  color: inherit;
  text-decoration: none; 
`;

const MenuBlock = (
  {
    title,
    content = [],
    toggleMenu,
    reversed,
    menu,
    isTabletOrMobile,
    footer,
    children = null,
  },
) => (
  <StyledWrapper isTabletOrMobile={ isTabletOrMobile }>
    <Heading
      footer={ footer }
      isTabletOrMobile={ isTabletOrMobile }
      reversed={ reversed }
      type='menu'>
      {
        title
      }
    </Heading>
    {
      children || content.map(obj => (
        <StyledLink to={ obj.link || routes.home }>
          <Button
            menu={ menu }
            footer={ footer }
            isTabletOrMobile={ isTabletOrMobile }
            reversed={ reversed }
            secondary
            onClick={ () => menu && toggleMenu(false) }>

            {
              obj.label
            }

          </Button>
        </StyledLink>
      ))
    }

  </StyledWrapper>
);

const mapDispatchToProps = dispatch => ({
  toggleMenu: bool => dispatch(toggleMenuAction(bool)),
});

const mapStateToProps = state => ({
  isTabletOrMobile: getIsTabletOrMobile(state),
});

MenuBlock.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
  })).isRequired,
  toggleMenu: PropTypes.func.isRequired,
  reversed: PropTypes.bool,
  menu: PropTypes.bool,
  isTabletOrMobile: PropTypes.bool.isRequired,
  footer: PropTypes.bool,
  children: PropTypes.element,
};

MenuBlock.defaultProps = {
  reversed: false,
  menu: false,
  footer: false,
  children: null
};

export default connect(mapStateToProps, mapDispatchToProps)(MenuBlock);