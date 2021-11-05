const initState = {
  isNotificationOpen: false,
  notificationMessage: "",
  severity: "success",
  tagClicked: "All",
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
      if (action.reason === "clickaway") {
        return { ...state, isNotificationOpen: true };
      }
      return { ...state, isNotificationOpen: false };
    case "TAG_CLICKED":
      // if (action.tag === "clickaway") {
      //   return { ...state, isNotificationOpen: true };
      // }
      return { ...state, tagClicked: action.tag };
    default:
      return state;
  }
};
export default uiReducer;
