import React from 'react';
import styled from 'styled-components/native';
import { useTranslation } from 'react-i18next';
import { AthleteAvatar } from 'components';
import AthleteAttribute from './AthleteAttribute';

type PropsType = {
  photoId: number;
  name: string;
  dob: string;
  weight: number;
  height: number;
};

const Container = styled.View`
  flex-direction: row;
`;

const AthleteDetailsContainer = styled.View`
  flex: 1;
  justify-content: space-around;
  margin: 16px;
`;

const AvatarContainer = styled.View`
  flex: 1;
  margin: 16px;
`;

const AthleteCard = ({ photoId, name, dob, weight, height }: PropsType) => {
  const { t } = useTranslation();

  return (
    <Container>
      <AvatarContainer>
        <AthleteAvatar photoId={photoId} />
      </AvatarContainer>
      <AthleteDetailsContainer>
        <AthleteAttribute athleteAttribute={t('Athlete.Name')} athleteAttributeDetail={name} />
        <AthleteAttribute athleteAttribute={t('Athlete.DOB')} athleteAttributeDetail={dob} />
        <AthleteAttribute athleteAttribute={t('Athlete.Weight')} athleteAttributeDetail={weight} />
        <AthleteAttribute athleteAttribute={t('Athlete.Height')} athleteAttributeDetail={height} />
      </AthleteDetailsContainer>
    </Container>
  );
};

export default AthleteCard;