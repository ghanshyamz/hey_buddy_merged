import { createContext, useReducer, useEffect } from "react";
import AuthReducer from "./AuthReducer";

// const INITIAL_STATE = {
//   user: {
//     _id: "6138847e1b6eeb5d9405d943",
//     username: "abc",
//     email: "abc@gmail.com",
//     profilePicture: "person/akshay_kumar.jpg",
//     coverPicture: "",
//     isAdmin: false,
//     followers: [],
//     followings: [],
//   },
//   isFetching: false,
//   error: false,
// };

const INITIAL_STATE = {
  user: JSON.parse(localStorage.getItem("user")) || null,
  isFetching: false,
  error: false,
};

export const AuthContext = createContext(INITIAL_STATE);

export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(state.user));
  }, [state.user]);

  return (
    <AuthContext.Provider
      value={{
        user: state.user,
        isFetching: state.isFetching,
        error: state.error,
        dispatch,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
