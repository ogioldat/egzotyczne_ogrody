import React from 'react';
import styled from 'styled-components';
import uniqid from 'uniqid';
import PropTypes from 'prop-types';
import { toggleMenu as toggleMenuAction } from 'redux/actions/menuActions';
import { connect } from 'react-redux';
import Button from 'components/atoms/Button/Button';
import { Link } from 'react-router-dom';
import { routes } from 'routes';
import Heading from '../../atoms/Heading/Heading';
import { getIsTabletOrMobile } from '../../../redux/reducers/mediaReducer';


const StyledWrapper = styled.div`
  margin: ${ ({ isTabletOrMobile, footer }) => (isTabletOrMobile && !footer)
  ? '4% 0 0 35%' : footer ? '6% auto' : '15% auto' };
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
  <StyledWrapper isTabletOrMobile={ isTabletOrMobile } footer={ footer }>
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
        <StyledLink
          key={ uniqid() }
          to={ obj.link || routes.home }>
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
  title: PropTypes.string,
  content: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
  })),
  toggleMenu: PropTypes.func.isRequired,
  reversed: PropTypes.bool,
  menu: PropTypes.bool,
  isTabletOrMobile: PropTypes.bool.isRequired,
  footer: PropTypes.bool,
  children: PropTypes.arrayOf(PropTypes.element),
};

MenuBlock.defaultProps = {
  title: '',
  content: [],
  reversed: false,
  menu: false,
  footer: false,
  children: null,
};

export default connect(mapStateToProps, mapDispatchToProps)(MenuBlock);