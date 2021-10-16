const initState = {
  isNotificationOpen: false,
  notificationMessage: "",
  severity: "success",
};

const uiReducer = (state = initState, action) => {
  switch (action.type) {
    case "OPEN_NOTIFICATION":
      return {
        ...state,
        isNotificationOpen: true,
        notificationMessage: action.message,
        severity: action.severity,
      };
    case "CLOSE_NOTIFICATION":
      console.log(action.reason);
      if (action.reason === "clickaway") {
        return { ...state, isNotificationOpen: true };
      }
      return { ...state, isNotificationOpen: false };
    default:
      return state;
  }
};
export default uiReducer;
