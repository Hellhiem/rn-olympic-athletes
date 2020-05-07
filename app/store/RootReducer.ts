import { combineReducers } from 'redux';
import { games } from 'store/games/reducer';
import { athlete } from 'store/athletes/reducer';

export default combineReducers({
  games,
  athlete,
});