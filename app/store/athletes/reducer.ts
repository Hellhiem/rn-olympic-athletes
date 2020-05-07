import { AthleteReducerConstants, AthleteStateType, AthletesActionsType } from 'types/athletes';

const initialState: AthleteStateType = {
  isFetchingAthlete: false,
  isFetchingAthleteResult: false,
  athlete: {},
  athleteResult: [],
};

function athlete(state: AthleteStateType = initialState, action: AthletesActionsType) {
  switch (action.type) {
    case AthleteReducerConstants.ATHLETE_FETCH_REQUEST:
      return {
        ...state,
        isFetchingAthlete: true,
      };
    case AthleteReducerConstants.ATHLETE_FETCH_SUCCESS:
      return {
        ...state,
        isFetchingAthlete: false,
        athlete: action.response.data,
      };
    case AthleteReducerConstants.ATHLETE_FETCH_FAIL:
      return {
        ...state,
        isFetchingAthlete: false,
        error: action.error,
      };
    case AthleteReducerConstants.ATHLETE_RESULTS_FETCH_REQUEST:
      return {
        ...state,
        isFetchingAthleteResult: true,
      };
    case AthleteReducerConstants.ATHLETE_RESULTS_FETCH_SUCCESS:
      return {
        ...state,
        isFetchingAthleteResult: false,
        athleteResult: action.response.data,
      };
    case AthleteReducerConstants.ATHLETE_RESULTS_FETCH_FAIL:
      return {
        ...state,
        isFetchingAthleteResult: false,
        error: action.error,
      };
    default:
      return state;
  }
}

export { athlete, initialState };