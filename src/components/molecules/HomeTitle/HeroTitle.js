import React from 'react';
import styled, { css } from 'styled-components';
import { connect } from 'react-redux';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import HeroHeading from 'components/molecules/HeroHeading/HeroHeading';
import Button from 'components/atoms/Button/Button';
import Paragraph from 'components/atoms/Paragraph/Paragraph';
import { getIsTabletOrMobile } from 'redux/reducers/mediaReducer';
import PropTypes from 'prop-types';

const StyledTitleWrapper = styled.div`
  position: relative;
  user-select: none;
  width: ${ ({ isTabletOrMobile }) => isTabletOrMobile && '100vw' };
  padding: ${ ({ isTabletOrMobile, theme }) => isTabletOrMobile && theme.mobilePadding };
`;

const StyledParagraph = styled(Paragraph)`
  width: ${ ({ isTabletOrMobile }) => isTabletOrMobile ? '100%' : '60%' };
`;

const StyledAnchorLink = styled(AnchorLink)`
  position: absolute;
  right: 25%;
  text-decoration: none;
  ${ ({ isTabletOrMobile }) => isTabletOrMobile && css`
    position: absolute;
    right: 12vw;
` }
`;

const HeroTitle = ({ isTabletOrMobile }) => (
  <StyledTitleWrapper isTabletOrMobile={ isTabletOrMobile }>
    <HeroHeading isTabletOrMobile={ isTabletOrMobile }>
      Egzotyczne Ogrody
    </HeroHeading>
    <StyledParagraph isTabletOrMobile={ isTabletOrMobile }>
      Tu trzeba dodać tekst Tu trzeba dodać tekst
      Tu trzeba dodać tekst Tu trzeba dodać tekst
      Tu trzeba dodać tekst
    </StyledParagraph>
    <StyledAnchorLink
      as='a'
      isTabletOrMobile={ isTabletOrMobile }
      href='#about-us'>
      <Button>poznaj nas</Button>
    </StyledAnchorLink>

  </StyledTitleWrapper>
);

const mapStateToProps = state => ({
  isTabletOrMobile: getIsTabletOrMobile(state),
});

HeroTitle.propTypes = {
  isTabletOrMobile: PropTypes.bool.isRequired,
};

export default connect(mapStateToProps)(HeroTitle);