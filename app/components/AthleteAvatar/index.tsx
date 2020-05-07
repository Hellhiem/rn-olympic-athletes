import React from 'react';
import { ThemeType } from 'types/common';
import styled from 'styled-components/native';
import { baseUrl } from 'services/constants';

type PropsType = {
  photoId: number;
  name?: string;
};

const ImageContainer = styled.View``;

const AthleteName = styled.Text`
  font-size: ${({ theme }: { theme: ThemeType; }) => theme.paragraphFontSize};
  font-weight: bold;
  text-align: center;
  position: absolute;
  padding-horizontal: 24px;
  bottom: 0;
  left: 0;
  right: 0;
  opacity: 0.8;
  height: 30px;
  background-color: black;
  color: white;
`;

const AthleteImage = styled.Image`
  width: 100%;
  height: 150px;
  border-radius: 8px;
`;

const AthleteAvatar = ({ photoId, name }: PropsType) => {
  const photoUri = `${baseUrl}/athletes/${photoId}/photo`;

  return (
    <ImageContainer>
      <AthleteImage
        source={{ uri: photoUri }}
      />
      {name && <AthleteName>{name}</AthleteName>}
    </ImageContainer>
  );
};

export default AthleteAvatar;