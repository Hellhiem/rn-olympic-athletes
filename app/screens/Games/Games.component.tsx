import React from 'react';
import { FlatList } from 'react-native';
import styled from 'styled-components/native';
import { GameType } from 'types/games';
import { ThemeType } from 'types/common';
import AthletesGamesList from './AthletesGamesList/AthletesGamesList.container';

const Container = styled.View``;

const GameName = styled.Text`
  font-size: ${({ theme }: { theme: ThemeType; }) => theme.headerFontSize};
  font-weight: bold;
  margin-left: 16px;
`;

const GamesList = styled(FlatList as new () => FlatList<any>)``;

type PropsType = {
  games: GameType[],
  navigateToAthleteScreen: (athleteId: number) => void;
};

type FlatListDataType = {
  item: GameType,
};

const GamesComponent = ({ games, navigateToAthleteScreen }: PropsType) => {

  const renderItem = (data: FlatListDataType) => {
    return (
      <Container>
        <GameName>{`${data.item.city} ${data.item.year}`}</GameName>
        <AthletesGamesList gameId={data.item.game_id} navigateToAthleteScreen={navigateToAthleteScreen} />
      </Container>
    );
  };

  const uniqueKey = (item: GameType): string => item.game_id.toString();

  return (
    <Container>
      <GamesList
        renderItem={renderItem}
        data={games}
        keyExtractor={uniqueKey}
      />
    </Container>
  );
};

export default GamesComponent;