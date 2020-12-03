import {combineReducers, createStore} from "redux";
import profileReduser from "./profile-reducer";
import dialogsReduser from "./dialogs-reducer";
import sidebarReduser from "./sidebar-reducer";
import usersReduser from "./users-reducer";

let reducers = combineReducers({
    profilePage: profileReduser,
    dialogsPage: dialogsReduser,
    sidebar: sidebarReduser,
    usersPage: usersReduser
});

let store = createStore(reducers);



export default store;