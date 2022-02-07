import React from "react";
import s from "./Users.module.css";
import userPhoto from './user.png'
import { NavLink } from "react-router-dom";
import * as axios from 'axios';


let Users = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
        
    let pages =[];

    for (let i=1; i<=10; i++){
        pages.push(i)
    }

    // const insteanceMyAPI = axios.create({
    //     baseURL: 'https://social-network.samuraijs.com/api/1.0/'
    // })

    return <div>

        <div>
            {pages.map(p => {
                return <span className={props.currentPage === p && s.selectedPage}
                    onClick={(e) => { props.onPageChanged(p) }}>
                    {p}
                </span>
            })}
        </div>
        
        {
            props.users.map(u => <div className={s.oneUser} key={u.id}>
                <span>
                    <div>
                    <NavLink to ={'/profile/'+u.id}>
                    <img className={s.userPhoto} src={u.photos.small != null ? u.photos.small : userPhoto}>
                    </img>
                    </NavLink>
                    </div>
                    <div>
                        {u.followed
                            ? <button onClick={() => { 
                                
                                axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`,{
                                    withCredentials:true,
                                    headers:{
                                        "API_KEY":"df86c421-1d48-4bfd-864f-eb14fb0b66ac"
                                    }
                                })
                                .then(response =>{
                                    if (response.data.resultCode==0){
                                        props.unfollow(u.id)
                                    }
                                })

                                // props.unfollow(u.id) 
                            
                            }} > Unfollow </button>
                            : <button onClick={() => { 

                                axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`,{},{
                                    withCredentials:true,
                                    headers:{
                                        "API_KEY":"df86c421-1d48-4bfd-864f-eb14fb0b66ac"
                                    }
                                })
                                .then(response =>{
                                    if (response.data.resultCode==0){
                                        debugger;
                                        props.follow(u.id)
                                    }
                                })

                                // props.follow(u.id) 
                                
                                }} > Follow </button>}

                    </div>
                </span>
                <span>
                    <span>
                        <div>{u.name}</div><div>{u.status}</div>
                    </span>
                    <span>
                        <div>{"u.location.city"}</div><div>{"u.location.country"}</div>
                    </span>
                </span>
            </div>)
        }

    </div>
}

export default Users;

