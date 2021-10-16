const initState = {
  authError: null,
};

const authReducer = (state = initState, action) => {
  switch (action.type) {
    case "LOGIN_ERROR":
      // console.log("login faild", action.error);
      return { ...state, authError: "login faild" };
    case "LOGIN_SUCCESS":
      console.log("login success");
      return { ...state, authError: null };
    case "SIGNOUT_SUCCESS":
      console.log("signout successful");
      return { state };
    case "SIGNUP_SUCCESS":
      console.log("signup successful");
      return { ...state, authError: null };
    case "SIGNUP_ERROR":
      console.log("signup error");
      return { ...state, authError: action.error.message };

    default:
      return state;
  }
};
export default authReducer;
