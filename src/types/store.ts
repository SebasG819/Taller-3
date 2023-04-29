import {user} from "./psb"
import {trip} from "./trips"

export type Appstate= {
    user: user | null,
    post: trip []
}

export type observer = ({render: () => void} & HTMLElement);

// Actions

export enum AuthAction{
    "LOGIN" = "LOGIN",
    "LOGOUT" = "LOGOUT",
}

//Interface

export interface logInAction{
    action: AuthAction.LOGIN,
    payload: user
}

export type Actions = logInAction;