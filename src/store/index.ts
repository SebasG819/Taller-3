
import { onAuthStateChanged } from "firebase/auth";
import { Screens } from "../types/navigations"
import { Observer } from "../types/store";
import { reducer } from "./reducer";
import { navigate } from "./action";
import { auth } from "../utils/firebase";

onAuthStateChanged(auth,(user) => {
  if (user) {
     user.email //!== null ? dispatch(setUserCredentials(user.email)) : '';
    dispatch(navigate(Screens.DASHBOARD));
  } else {
    dispatch(navigate(Screens.REGISTER))
  }
});

const emptyState = {
    screen: Screens.LOGIN,
  };
  
  export let appState = emptyState;
  
  let observers: Observer[] = [];
  
  const notifyObservers = () => observers.forEach((o) => o.render());
  
  export const dispatch = (action: any) => {
    const clone = JSON.parse(JSON.stringify(appState));
    const newState = reducer(action, clone);
    appState = newState;
    notifyObservers();
  };
  
  export const addObserver = (ref: Observer) => {
    observers = [...observers, ref];
  };