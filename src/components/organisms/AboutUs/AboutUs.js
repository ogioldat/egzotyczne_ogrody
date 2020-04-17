import React from 'react';
import styled from 'styled-components';
import Heading from 'components/atoms/Heading/Heading';
import Paragraph from 'components/atoms/Paragraph/Paragraph';
import Button from 'components/atoms/Button/Button';
import bambooBG from 'assets/images/bamboo.png';
import { Link } from 'react-router-dom';
import { routes } from '../../../routes';
import ParagraphCard from '../../atoms/ParagraphCard/ParagraphCard';
import Subtitle from '../../atoms/Subtitle/Subtitle';

const StyledWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  padding: 5% 0;
`;

const StyledBackground = styled.img`
  height: 80vh;
`;

const StyledContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const StyledParagraph = styled(Paragraph)`
  width: 70%;
  font-size: ${ ({ theme }) => theme.fontSize.m };
`;

const StyledLink = styled(Link)`
  margin-top: 10%;
  text-decoration: none;
`;

const AboutUs = () => (
  <StyledWrapper>
    <StyledBackground src={ bambooBG }/>
    <StyledContentWrapper>
      <Heading>O nas</Heading>
      <Subtitle>Jesteśmy małą, rodzinną firmą...</Subtitle>
      <ParagraphCard>
        Od piętnastu lat
        zajmujemy się uprawą roślin. Stale wzbogacamy
        asortyment i poszukujemy nowych, ciekawych gatunków
        roślin, które mogą cieszyć oko pasjonatów egzotyki
        lub zaszczepić tę pasję.
      </ParagraphCard>
      <StyledLink to={ routes.aboutUs }>
        <Button >czytaj więcej!</Button>
      </StyledLink>
    </StyledContentWrapper>
  </StyledWrapper>
);

export default AboutUs;