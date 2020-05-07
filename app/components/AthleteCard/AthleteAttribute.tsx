import React from 'react';
import styled from 'styled-components/native';

type PropsType = {
  athleteAttribute: string;
  athleteAttributeDetail: string | number;
};

const Container = styled.View`
  flex-direction: row;
`;

const AthleteAttributeTitle = styled.Text`
  font-weight: bold;
  min-width: 50px;
`;

const AthleteAttributeDetail = styled.Text`
  margin-left: 16px;
`;

const AthleteAttribute = ({ athleteAttribute, athleteAttributeDetail }: PropsType) => {
  return (
    <Container>
      <AthleteAttributeTitle>{`${athleteAttribute}:`}</AthleteAttributeTitle>
      <AthleteAttributeDetail>{athleteAttributeDetail}</AthleteAttributeDetail>
    </Container>
  );
};

export default AthleteAttribute;
