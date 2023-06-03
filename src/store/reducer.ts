import { Actions, AppState, NavigationActions, UserActions } from "../types/store";
// export const reducer = (action: any, prevState: any) => {
//     switch (action.type) {
//       case "NAVIGATE":
//         prevState.screen = action.payload;
//         break;
//     }
  
//     return prevState;
//   };

  export const reducer = (
    currentAction: Actions,
    currentState: AppState
  ): AppState => {
    const { action, payload } = currentAction;
  
    switch (action) {
      case NavigationActions.NAVIGATE:
        return {
          ...currentState,
          screen: payload,
        };
  
        default:
          return currentState;
    }
    
    
  };