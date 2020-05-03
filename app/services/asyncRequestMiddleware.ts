// TODO: Add typing to request middleware
// @ts-ignore
const asyncRequestMiddleware = ({ dispatch }) => {
  // @ts-ignore
  return (next: (object) => void) => {
    // @ts-ignore
    return async (action) => {
      if (typeof action === 'function') {
        return action(dispatch);
      }

      const { asyncRequest, types, ...rest } = action;

      if (!asyncRequest) {
        return next(action);
      }

      const [REQUEST, SUCCESS, FAIL] = types;
      next({ ...rest, type: REQUEST });
      // @ts-ignore
      const defaultMapper = response => {
        return response;
      };
      const { request, mapResponse = defaultMapper, mapError = defaultMapper } = asyncRequest;

      try {
        const response = await request();
        dispatch({ ...rest, type: SUCCESS, response: mapResponse(response) });

        return mapResponse(response);
      } catch (error) {
        dispatch({ ...rest, type: FAIL, error: mapError(error) });
        throw mapError(error);
      }
    };
  };
};

export default asyncRequestMiddleware;