
import {combineReducers, createStore} from "redux";
import profileReducer from "./profile-reducer"
import dialogsReducer from "./dialogs-reducer"
import newsReducer from "./news-reducer"
import usersReducer from "./users-reducer"
import photosReducer from "./photos-reducer"
import authReducer from "./auth-reducer";

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    auth: authReducer,
    newsPage: newsReducer,
    usersPage: usersReducer,
    photosPage: photosReducer,
});

let store = createStore(reducers);

window.store=store;

export default store;