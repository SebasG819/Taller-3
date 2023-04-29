import { Actions, Appstate, AuthAction } from "../types/store";

export const reducer = (currentAction: Actions, CurrentState: Appstate): Appstate =>{
    const {action, payload} = currentAction;

    switch (action){
        case AuthAction.LOGIN:
            return{
                ...CurrentState,
                user: payload
            }

            default:
            return CurrentState;
    }
}