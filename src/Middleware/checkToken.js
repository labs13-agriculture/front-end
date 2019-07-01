import { AUTH_TOKEN } from "../config";

export const checkToken = store => next => action => {
  if (action && action.type && action.type.includes("FAILURE")) {
    // This may need to change in the future depending on error details.
    if (
      action.payload &&
      action.payload.response &&
      action.payload.response.status === 401
    ) {
      localStorage.removeItem(AUTH_TOKEN);
      localStorage.removeItem("admin"); //just in case an admin is logged out and logs back in as a regular user
      store.dispatch({ type: "LOGGED_OUT" });
    }
  }
  next(action);
};
