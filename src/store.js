import { createStore } from "redux";
import loginReducer from "./reducers/loginReducer";

function configureStore(
  state = { isLoggedIn: localStorage.getItem("token") ? true : false }
) {
  return createStore(loginReducer, state);
}

export default configureStore;
