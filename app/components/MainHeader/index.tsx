import React from 'react';
import { ThemeType } from 'types/common';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components/native';
import { OBSLogo } from 'assets/images';

const Container = styled.View`
  flex-direction: row;
  align-items: center;
`;

const Logo = styled.Image`
  width: 32px;
  height: 32px;
`;

const Title = styled.Text`
  margin-right: 16px;
  font-size: ${({ theme }: { theme: ThemeType; }) => theme.headerFontSize};
`;

const MainHeader = () => {
  const { t } = useTranslation();

  return (
    <Container>
      <Title>{t('Header.OlympicAthletes')}</Title>
      <Logo source={OBSLogo} />
    </Container>
  );
};

export default MainHeader;