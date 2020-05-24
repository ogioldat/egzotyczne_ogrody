import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { content } from 'assets/data/footerContent';
import Heading from '../../atoms/Heading/Heading';
import PlantsList from '../../molecules/PlantsList/PlantsList';
import MenuBlock from '../../molecules/MenuBlock/MenuBlock';
import { getIsTabletOrMobile } from '../../../redux/reducers/mediaReducer';
import Subtitle from '../../atoms/Subtitle/Subtitle';
import Line from '../../atoms/Line/Line';


const StyledWrapper = styled.div`
  background-color: ${ ({ theme }) => theme.greyDark };
  padding: ${ ({ isTabletOrMobile, theme }) => isTabletOrMobile && `0 ${ theme.mobilePadding }` };
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledGridWrapper = styled.div`
  width: 100%;
  position: relative;
  
  ${ ({ isTabletOrMobile }) => isTabletOrMobile ?
  css`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
` :
  css`
    display: grid;
    grid-template-columns: repeat(3, 1fr); 
` };
`;

const StyledCredits = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  text-align: center;
`;

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

const StyledCompanyInfo = styled.div`
  color: ${ ({ theme }) => theme.inactive };
  display: flex;
  flex-direction: column;
  text-align: left;
`;

const StyledCreditsContent = styled.div`
  display: flex;
  flex-direction: column;
`;
const StyledAuthors = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StyledSubtitle = styled(Subtitle)`
  margin: 10px 0;
  font-weight: normal;
`;

const SubHeading = styled(StyledSubtitle)`
  font-weight: bold;
  margin-right: 10px;
`;

const StyledHeadingLine = styled.div`
  display: inline-flex;
  margin: 0;
`;

const Footer = ({ isTabletOrMobile }) => (
  <StyledWrapper isTabletOrMobile={ isTabletOrMobile }>
    <StyledGridWrapper isTabletOrMobile={ isTabletOrMobile }>
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
      <StyledCreditsContent>
        <StyledAuthors>
          <StyledFounder isTabletOrMobile={ isTabletOrMobile }>
            Piotr Ogiołda Egzotyczne Ogrody ©
          </StyledFounder>

          <StyledAuthor isTabletOrMobile={ isTabletOrMobile }>created and designed by Tomasz Ogiołda</StyledAuthor>
        </StyledAuthors>
        <StyledP>
          Wszelkie prawa zastrzeżone!
          Zdjęcia są własnością firmy Egzotyczne Ogrody
          Kopiowanie, powielanie i wykorzystywanie zdjęć bez zgody autora zabronione pod groźbą sankcji karnych.
        </StyledP>
        <Line/>
        <StyledCompanyInfo>
          <StyledHeadingLine>
            <SubHeading>NIP: </SubHeading><StyledSubtitle> 5751398448</StyledSubtitle>
          </StyledHeadingLine>
          <StyledHeadingLine>
            <SubHeading>REGON: </SubHeading><StyledSubtitle> 385112835</StyledSubtitle>
          </StyledHeadingLine>
          <StyledHeadingLine
          ><SubHeading>Nr konta bankowego: </SubHeading><StyledSubtitle> 24 1020 5558 0000 8202 3382 4582</StyledSubtitle>
          </StyledHeadingLine>
        </StyledCompanyInfo>
      </StyledCreditsContent>

    </StyledCredits>
  </StyledWrapper>
);

const mapStateToProps = state => ({
  isTabletOrMobile: getIsTabletOrMobile(state),
});

Footer.propTypes = {
  isTabletOrMobile: PropTypes.bool.isRequired,
};

export default connect(mapStateToProps)(Footer);