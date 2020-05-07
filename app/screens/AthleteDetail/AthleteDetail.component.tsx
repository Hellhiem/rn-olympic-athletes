import React from 'react';
import { Athlete, AthleteResult } from 'types/athletes';
import { AthleteCard } from 'components';
import styled from 'styled-components/native';

type PropsType = {
  athleteData: Athlete;
  athleteResults: AthleteResult[];
};

const Container = styled.View``;

const AthleteDetailComponent = ({ athleteData, athleteResults }: PropsType) => {
  return (
    <Container>
      <AthleteCard
        photoId={athleteData.photo_id}
        name={athleteData.name}
        dob={athleteData.dateOfBirth}
        weight={athleteData.weight}
        height={athleteData.height}
      />
    </Container>
  );
};

export default AthleteDetailComponent;