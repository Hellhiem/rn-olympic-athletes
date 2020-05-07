import React, { useState } from 'react';
import { FlatList } from 'react-native';
import { useTranslation } from 'react-i18next';
import { AthleteHorizontalListItem } from 'components';
import { ThemeType } from 'types/common';
import styled from 'styled-components/native';
import { Athlete } from 'types/athletes';

const AthletesGamesList = styled(FlatList as new () => FlatList<any>)``;

const EmptyListContainer = styled.View``;

const EventNotAvalibleText = styled.Text`
  padding: 16px;
  font-size: ${({ theme }: { theme: ThemeType; }) => theme.paragraphFontSize};
  color: ${({ theme }: { theme: ThemeType; }) => theme.colors.darkRed};
  font-weight: bold;
`;

type PropsType = {
  gameAthletes: Athlete[];
};

type FlatListDataType = {
  item: Athlete,
};

const AthletesGamesListComponent = ({ gameAthletes }: PropsType) => {
  const { t } = useTranslation();
  const [scrollableList, setScrollableList] = useState(true);

  const renderItem = (data: FlatListDataType) => {
    return (
      <AthleteHorizontalListItem
        name={data.item.name}
        surname={data.item.surname}
        photoId={data.item.photo_id}
      />
    );
  };

  const renderEmptyListComponent = () => {
    setScrollableList(false);

    return (
      <EmptyListContainer>
        <EventNotAvalibleText>{t('Games.NotAvalibleOrUpcomming')}</EventNotAvalibleText>
      </EmptyListContainer>
    );
  };

  const uniqueKey = (item: Athlete): string => item.athlete_id.toString();

  return (
    <AthletesGamesList
      data={gameAthletes}
      renderItem={renderItem}
      scrollEnabled={scrollableList}
      horizontal
      showsHorizontalScrollIndicator={false}
      ListEmptyComponent={renderEmptyListComponent}
      keyExtractor={uniqueKey}
    />
  );
};

export default AthletesGamesListComponent;