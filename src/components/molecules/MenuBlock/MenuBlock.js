import React from 'react';
import styled from 'styled-components';
import { toggleMenu as toggleMenuAction } from 'redux/actions/menuActions';
import { connect } from 'react-redux';
import Button from 'components/atoms/Button/Button';
import { Link } from 'react-router-dom';
import { routes } from 'routes';
import Heading from '../../atoms/Heading/Heading';


const StyledWrapper = styled.div`
  margin: 15% auto;
`;

const StyledLink = styled(Link)`
  color: inherit;
  text-decoration: none;
`;

const MenuBlock = ({ title, content, toggleMenu, reversed, menu }) => (
  <StyledWrapper>
    <Heading reversed={reversed} type='menu'>{ title }</Heading>
    {
      content.map(obj => (
        <StyledLink to={ obj.link || routes.home }>
        <Button
          reversed={reversed}
          secondary
          onClick={ () => menu && toggleMenu() }>

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
  toggleMenu: () => dispatch(toggleMenuAction()),
});

export default connect(null, mapDispatchToProps)(MenuBlock);