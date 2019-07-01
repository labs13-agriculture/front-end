export const NEED_HELP = "NEED_HELP";

export const needHelp = currentStatus => dispatch => {
  dispatch({ type: NEED_HELP, payload: !currentStatus });
};
