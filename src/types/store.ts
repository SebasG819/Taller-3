import {user} from "./psb"
import {trip} from "./trips"

export type Observer = { render: () => void } & HTMLElement;

export type Appstate= {
    user: user | null,
    post: trip []
}

export type observer = ({render: () => void} & HTMLElement);


export enum AuthAction{
    "ADD" = "ADD",
    "GET" = "GET",
}


export interface AddUserAction {
    action: AuthAction.ADD,
    payload: user
  };
  
  export interface GetUserAction {
    action: AuthAction.GET,
    payload: user[]
}

export type Actions =  | GetUserAction | AddUserAction;