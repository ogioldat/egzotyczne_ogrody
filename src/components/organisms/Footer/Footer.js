import React from 'react';
import styled, {css} from 'styled-components';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { content } from 'assets/data/footerContent';
import Heading from '../../atoms/Heading/Heading';
import PlantsList from '../../molecules/PlantsList/PlantsList';
import MenuBlock from '../../molecules/MenuBlock/MenuBlock';
import { getIsTabletOrMobile } from '../../../redux/reducers/mediaReducer';


const StyledWrapper = styled.div`
  background-color: ${ ({ theme }) => theme.greyDark };
  padding: ${ ({ isTabletOrMobile, theme }) => isTabletOrMobile && `0 ${ theme.mobilePadding }` };
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledGridWrapper = styled.div`
  width: 100%;
  
  ${({isTabletOrMobile}) => isTabletOrMobile ? 
  css`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
` : 
  css`
    display: grid;
    grid-template-columns: repeat(3, 1fr); 
`};
`;

const StyledCredits = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
`

const StyledFounder = styled.h2`
  margin-bottom: 0;
  font-size: ${ ({ theme, isTabletOrMobile }) => isTabletOrMobile ? theme.fontSize.s : theme.fontSize.m };
  color: ${ ({ theme }) => theme.greyLight }
`;

const StyledRights = styled.h2`
  margin: 2% 0 0 0;
  font-size: ${ ({ theme, isTabletOrMobile }) => isTabletOrMobile ? theme.fontSize.xs : theme.fontSize.s };
  color: ${ ({ theme }) => theme.inactive }
`;

const StyledAuthor = styled(StyledRights)`
  margin: 0;
  color: ${ ({ theme }) => theme.inactive };
  font-size: ${ ({ theme, isTabletOrMobile }) => isTabletOrMobile ? theme.fontSize.xxs : theme.fontSize.xs };
`;

const StyledP = styled.p`
  font-size: ${ ({ theme }) => theme.fontSize.xxs };
  color: ${ ({ theme }) => theme.inactive }
`;

const Footer = ({ isTabletOrMobile }) => (
  <StyledWrapper isTabletOrMobile={ isTabletOrMobile }>
    <StyledGridWrapper isTabletOrMobile={ isTabletOrMobile } >
      <MenuBlock
        footer
        reversed
        secondary
        content={ content.contact }
        isTabletOrMobile={ isTabletOrMobile }
        title='kontakt'/>

      <MenuBlock
        footer
        reversed
        secondary
        content={ content.info }
        isTabletOrMobile={ isTabletOrMobile }
        title='informacje'/>

      <MenuBlock footer>
        <Heading footer reversed type='menu'>rośliny</Heading>
        <PlantsList
          footer
          isTabletOrMobile={ isTabletOrMobile }
          secondary
          reversed/>
      </MenuBlock>
    </StyledGridWrapper>
    <StyledCredits>
      <StyledFounder isTabletOrMobile={ isTabletOrMobile }>
        Piotr Ogiołda Egzotyczne Ogrody ©
      </StyledFounder>
      <StyledRights isTabletOrMobile={ isTabletOrMobile }>
        all rights reserved
      </StyledRights>
      <StyledAuthor isTabletOrMobile={ isTabletOrMobile }>created and designed <br/> by Tomasz Ogiołda</StyledAuthor>
      <StyledP>
        Wszelkie prawa zastrzeżone!
        Zdjęcia są własnością firmy Egzotyczne Ogrody
        Kopiowanie, powielanie i wykorzystywanie zdjęć bez zgody autora zabronione pod groźbą sankcji karnych.
      </StyledP>
    </StyledCredits>
  </StyledWrapper>
);

const mapStateToProps = state => ({
  isTabletOrMobile: getIsTabletOrMobile(state),
});

Footer.propTypes = {
  isTabletOrMobile: PropTypes.bool.isRequired
};

export default connect(mapStateToProps)(Footer);