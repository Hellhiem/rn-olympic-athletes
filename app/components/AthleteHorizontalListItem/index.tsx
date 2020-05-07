import React from 'react';
import { Dimensions } from 'react-native';
import styled from 'styled-components/native';
import { AthleteAvatar } from 'components';

type PropsType = {
  photoId: number;
  name: string;
  surname: string;
};

const imageProportions = Dimensions.get('window').width / 2.5;

const Container = styled.View`
  width: ${imageProportions}px;
  margin: 16px 0px 16px 16px;
`;

const AthleteHorizontalListItem = ({ photoId, name, surname }: PropsType) => {
  return (
    <Container>
      <AthleteAvatar photoId={photoId} name={`${name} ${surname}`} />
    </Container>
  );
};

export default AthleteHorizontalListItem;