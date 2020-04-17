import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { content } from 'data/footerContent';
import Heading from '../../atoms/Heading/Heading';
import { routes } from '../../../routes';
import PlantsList from '../../molecules/PlantsList/PlantsList';
import Button from '../../atoms/Button/Button';
import MenuBlock from '../../molecules/MenuBlock/MenuBlock';

const StyledOptionBox = styled.div`
  margin: 15% auto;
`;

const StyledWrapper = styled.div`
  background-color: ${ ({ theme }) => theme.greyDark };
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledGridWrapper = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr); 
`;


const StyledCredits = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
`;

const StyledFounder = styled.h2`
  font-size: ${ ({ theme }) => theme.fontSize.m };
  color: ${ ({ theme }) => theme.greyLight }
`;

const StyledRights = styled.h2`
  font-size: ${ ({ theme }) => theme.fontSize.s };
  color: ${ ({ theme }) => theme.inactive }
`;

const StyedAuthor = styled(StyledRights)`
  margin: 5% 0;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`;

const StyledP = styled.p`
  font-size: ${ ({ theme }) => theme.fontSize.xxs };
  color: ${ ({ theme }) => theme.inactive }
`;

const Footer = () => (
  <StyledWrapper>
    <StyledGridWrapper>

      <MenuBlock reversed secondary content={content.contact} title='kontakt'/>

      <MenuBlock reversed secondary content={content.info} title='informacje'/>
      <StyledOptionBox>
        <Heading reversed type='menu'>rośliny</Heading>
        <PlantsList secondary reversed/>
      </StyledOptionBox>
    </StyledGridWrapper>
    <StyledCredits>
      <StyledFounder>
        Piotr Ogiołda Egzotyczne Ogrody ©
      </StyledFounder>
      <StyledRights>
        all rights reserved
        <br/>
        <StyedAuthor>created and designed <br/> by Tomasz Ogiołda</StyedAuthor>
      </StyledRights>
      <StyledP>
        Wszelkie prawa zastrzeżone!
        Zdjęcia są własnością firmy Egzotyczne Ogrody
        Kopiowanie, powielanie i wykorzystywanie zdjęć bez zgody autora zabronione pod groźbą sankcji karnych.
      </StyledP>
    </StyledCredits>
  </StyledWrapper>
);

export default Footer;