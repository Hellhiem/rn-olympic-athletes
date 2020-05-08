import React from 'react';
import styled from 'styled-components/native';
import { GoldMedal, SilverMedal, BronzeMedal } from 'assets/images';
import { MedalNames, MedalType } from 'types/athletes';
import { AthleteResult } from 'types/athletes';
import { ThemeType } from 'types/common';

type PropsType = {
  athleteResults: AthleteResult,
};

const Container = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const MedalContainer = styled.View`
  flex-direction: row;
  align-items: center;
  margin: 0px 8px 8px 8px;
`;

const MedalCounterContainer = styled.View`
  flex-direction: row;
`;

const MedalCounterText = styled.Text`
  font-size: ${({ theme }: { theme: ThemeType; }) => theme.paragraphFontSize};
  margin-right: 4px;
`;

const City = styled.Text`
  font-size: ${({ theme }: { theme: ThemeType; }) => theme.paragraphFontSize};
`;

const MedalImage = styled.Image``;

const MedalCounter = ({ athleteResults }: PropsType) => {

  const renderMedalImage = (medalType: MedalType) => {
    switch (medalType) {
      case MedalNames.BronzeMedal:
        return <MedalImage source={BronzeMedal} />;
      case MedalNames.SilverMedal:
        return <MedalImage source={SilverMedal} />;
      case MedalNames.GoldMedal:
        return <MedalImage source={GoldMedal} />;
    }
  };

  const renderMedalCounter = (medalType: MedalType, medalCount: number) => {
    return (
      <MedalContainer>
        <MedalCounterText>{medalCount}</MedalCounterText>
        {renderMedalImage(medalType)}
      </MedalContainer>
    );
  };

  return (
    <Container>
      <City>{`${athleteResults.city} ${athleteResults.year}:`}</City>
      <MedalCounterContainer>
        {renderMedalCounter(MedalNames.GoldMedal, athleteResults.gold)}
        {renderMedalCounter(MedalNames.SilverMedal, athleteResults.silver)}
        {renderMedalCounter(MedalNames.BronzeMedal, athleteResults.bronze)}
      </MedalCounterContainer>
    </Container>
  );
};

export default MedalCounter;