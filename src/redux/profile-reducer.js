const ADD_POST='ADD-POST';
const UPDATE_NEW_POST_TEXT ='UPDATE-NEW-POST-TEXT';
const SET_USERS_PROFILE ='SET_USERS_PROFILE';

let initialState = {
    posts:[
     {id: 1, message: 'Hello!', likesCount: 12},
     {id: 2, message: "It's my first post.", likesCount: 3},
     {id: 3, message: 'F*ck u', likesCount: 0}
 ],
 newPostText:'Write there.',
 profile: null,
 }

const profileReducer = (state = initialState, action)=> {
    switch(action.type){
        case ADD_POST:{ 
            let newPost = {
                id:4,
                message: state.newPostText,
                likesCount: 0
            };
            return{
                ...state,
                posts: [...state.posts, newPost],
                newPostText:'',
            };
            // stateCopy.posts=[...state.posts];
            // stateCopy.posts.push(newPost);
            // stateCopy.newPostText='';
            // return stateCopy;
        }
        case UPDATE_NEW_POST_TEXT:{
            return{
                ...state,
                newPostText:action.newText,
            }
            // stateCopy.newPostText=action.newText;
            // return stateCopy;
        }
        case SET_USERS_PROFILE:{
            return {...state, profile: action.profile}
        }
        default:{
            return state;
        }
    }   
}

export let addPostActionCreater=()=>({type: ADD_POST})
  
export const setUserProfile =(profile)=>({type:SET_USERS_PROFILE, profile })

export let updateNewPostTextActionCreater=(text)=>
({type: UPDATE_NEW_POST_TEXT, newText: text})

export default profileReducer;