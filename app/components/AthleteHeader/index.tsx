import React from 'react';
import styled from 'styled-components/native';
import { AppState, ThemeType } from 'types/common';
import { useSelector } from 'react-redux';

const AthleteName = styled.Text`
  font-size: ${({ theme }: { theme: ThemeType; }) => theme.paragraphFontSize};
`;

const AthleteHeader = () => {
  const athleteData = useSelector(({ athlete }: AppState) => athlete.athleteData);

  return (
    <AthleteName>{`${athleteData.name} ${athleteData.surname}`}</AthleteName>
  );
};

export default AthleteHeader;