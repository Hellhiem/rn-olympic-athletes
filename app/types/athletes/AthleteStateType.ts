import { Athlete, AthleteResult } from '.';

type AthleteStateType = {
  isFetchingAthlete: boolean,
  isFetchingAthleteResult: boolean,
  athlete: Athlete | {},
  athleteResult: AthleteResult | [],
};

export default AthleteStateType;