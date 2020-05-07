import React from 'react';
import { Dimensions } from 'react-native';
import styled from 'styled-components/native';
import { ThemeType } from 'types/common';

type PropsType = {
  photoId: number;
  name: string;
  surname: string;
};

const Container = styled.View`
  flex-direction: row;
  padding: 16px;
  width: ${Dimensions.get('window').width / 2.5}px;
`;

const AthleteName = styled.Text`
  font-size: ${({ theme }: { theme: ThemeType; }) => theme.paragraphFontSize};
`;

const AthleteHorizontalListItem = ({ photoId, name, surname }: PropsType) => {
  return (
    <Container>
      <AthleteName>{`${name} ${surname}`}</AthleteName>
    </Container>
  );
};

export default AthleteHorizontalListItem;