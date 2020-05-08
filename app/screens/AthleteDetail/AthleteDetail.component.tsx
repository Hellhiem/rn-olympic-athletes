import React from 'react';
import { FlatList } from 'react-native';
import { useTranslation } from 'react-i18next';
import { Athlete, AthleteResult } from 'types/athletes';
import { AthleteCard, MedalCounter, ReadMoreText } from 'components';
import { ThemeType } from 'types/common';
import styled from 'styled-components/native';

type PropsType = {
  athleteData: Athlete;
  athleteResults: AthleteResult[];
};

type FlatListDataType = {
  item: AthleteResult,
};

const AthletesResultsList = styled(FlatList as new () => FlatList<any>)``;

const Container = styled.ScrollView``;

const AthletesDetails = styled.View`
  margin-horizontal: 16px;
`;

const SectionTitle = styled.Text`
  font-size: ${({ theme }: { theme: ThemeType; }) => theme.headerFontSize};
  font-weight: bold;
  margin-bottom: 8px;
`;

const AthleteDetailComponent = ({ athleteData, athleteResults }: PropsType) => {
  const { t } = useTranslation();

  const renderItem = (data: FlatListDataType) => {
    return (
      <MedalCounter athleteResults={data.item} />
    );
  };

  const uniqueKey = (item: AthleteResult) => {
    return item.year.toString();
  };

  return (
    <Container>
      <AthleteCard
        photoId={athleteData.photo_id}
        name={`${athleteData.name} ${athleteData.surname}`}
        dob={athleteData.dateOfBirth}
        weight={athleteData.weight}
        height={athleteData.height}
      />
      <AthletesDetails>
        <SectionTitle>{t('Athlete.Medals')}</SectionTitle>
        <AthletesResultsList
          data={athleteResults}
          renderItem={renderItem}
          keyExtractor={uniqueKey}
        />
        <SectionTitle>{t('Athlete.Bio')}</SectionTitle>
        <ReadMoreText
          numberOfLines={6}
          text={athleteData.bio}
          showMoreText={t('Athlete.ReadMore')}
          showLessText={t('Athlete.ShowLess')}
        />
      </AthletesDetails>
    </Container>
  );
};

export default AthleteDetailComponent;