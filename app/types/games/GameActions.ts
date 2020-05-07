
import { Action } from 'redux';
import GameType from './GameType';

enum GamesReducerConstants {
  GAMES_FETCH_REQUEST = 'GAMES_FETCH_REQUEST',
  GAMES_FETCH_SUCCESS = 'GAMES_FETCH_SUCCESS',
  GAMES_FETCH_FAIL = 'GAMES_FETCH_FAIL',
}

interface GamesFetchRequestType extends Action {
  type: GamesReducerConstants.GAMES_FETCH_REQUEST;
}

interface GameFetchRequestSuccessType extends Action {
  type: GamesReducerConstants.GAMES_FETCH_SUCCESS;
  response: {
    data: GameType,
  };
}

interface GamesFetchRequestFailType extends Action {
  type: GamesReducerConstants.GAMES_FETCH_FAIL;
  error: string;
}

type GamesActionsType = GamesFetchRequestType | GameFetchRequestSuccessType | GamesFetchRequestFailType;

export {
  GamesActionsType,
  GamesReducerConstants,
  GamesFetchRequestType,
  GameFetchRequestSuccessType,
  GamesFetchRequestFailType,
};