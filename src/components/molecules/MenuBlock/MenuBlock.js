import React from 'react';
import styled from 'styled-components';
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

export default connect(mapStateToProps, mapDispatchToProps)(MenuBlock);