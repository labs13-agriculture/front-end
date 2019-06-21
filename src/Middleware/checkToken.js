import { AUTH_TOKEN } from "../config";

export const checkToken = store => next => action => {
  if (action.type.includes("FAILURE")) {
    if (action.payload.response.status === 401) {
      localStorage.removeItem(AUTH_TOKEN);
      store.dispatch({ type: "LOGGED_OUT" });
    }
  }
  next(action);
};
