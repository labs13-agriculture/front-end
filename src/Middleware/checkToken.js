import { AUTH_TOKEN } from "../config";

export const checkToken = store => next => action => {
  if (action && action.type && action.type.includes("FAILURE")) {
    // This may need to change in the future depending on error details.
    if (action.payload.response.status === 401) {
      localStorage.removeItem(AUTH_TOKEN);
      store.dispatch({ type: "LOGGED_OUT" });
    }
  }
  next(action);
};
