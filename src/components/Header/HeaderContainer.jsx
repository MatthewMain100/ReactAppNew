import React from 'react';
import Header from "./Header"
import * as axios from "axios"
import {connect} from "react-redux"
// import setAuthUserData from "../../redux/auth-reducer"
import { setAuthUserData } from '../../redux/auth-reducer';

class HeaderContainer extends React.Component {
    componentDidMount(){
        // axios.defaults.withCredentials = true;
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`,{
            withCredentials:true,
            // headers:{
            //     "API_KEY":"66abf4a7-bb3a-44dc-afac-3082c58071c1"
            // }
        }
        )
        .then(response =>{

            if (response.data.resultCode === 0){
                let {id, login, email}=response.data.data;
                this.props.setAuthUserData(id, email, login)

            }
        })
    }
    render() {
        return<Header {...this.props}/>
    }
}

const mapStateToProps=(state)=>({
    isAuth : state.auth.isAuth,
    login : state.auth.login   
})


export default connect(mapStateToProps,{setAuthUserData})(HeaderContainer);