import { AUTH_TOKEN } from "../config";

export const checkToken = store => next => action => {
  console.log("In That Middleware");

  if (action.type.includes("FAILURE")) {
    if (action.payload.response.status === 401) {
      localStorage.removeItem(AUTH_TOKEN);
      console.log("Removing yo tokens");
      store.dispatch({ type: "LOGGED_OUT" });
    }
    // Send refresh token to Oauth Endpoint
  }

  next(action);
};
