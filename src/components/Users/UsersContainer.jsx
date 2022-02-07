import React from "react";
import { connect } from "react-redux";
import { follow, unfollow, setUsers, setCurrentPage, setUsersTotalCount, toggleIsFetching } from '../../redux/users-reducer';
import * as axios from 'axios';
import Users from './UsersClean'
import Preloader from "../common/Preloader/Preloader";
import { getUsers2 } from "../../api/api";

class UsersContainer extends React.Component{

    componentDidMount() {
        this.props.toggleIsFetching(true);

        getUsers2(this.props.currentPage, this.props.PageSize)
        .then(data =>{
            this.props.toggleIsFetching(false)
            this.props.setUsers(data.items)
            this.props.setUsersTotalCount(data.totalCount)
        })
    }

    onPageChanged=(pageNumber)=>{
        this.props.setCurrentPage(pageNumber);
        this.props.toggleIsFetching(true);
        getUsers2(pageNumber, this.props.PageSize)
        .then(data =>{
            this.props.toggleIsFetching(false);
            this.props.setUsers(data.items)
    })
    }

    render(){

        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);
        
        let pages =[];

        for (let i=1; i<10; i++){
            pages.push(i)
        }

        return <>
            {this.props.isFetching ? 
            <Preloader/>
            : null}
            <Users
                totalUsersCount={this.props.totalUsersCount}
                pageSize={this.props.pageSize}
                currentPage={this.props.currentPage}
                onPageChanged ={this.onPageChanged}
                users={this.props.users}
                follow={this.props.follow}
                unfollow={this.props.unfollow}/>     
            </>}
    }

let mapStateToProps=(state)=>{
    return{
        users : state.usersPage.users,
        pageSize : state.usersPage.pageSize,
        totalUsersCount : state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
    }
}

// let mapDispatchToProps =(dispatch)=>{
//     return{
//         follow: (userId) => {
//             dispatch(followAC(userId))
//         },
//         unfollow: (userId) => {
//             dispatch(unfollowAC(userId))
//         },
//         setUsers: (users) => {
//             dispatch(setUsersAC(users))
//         },
//         setCurrentPage: (pageNumber) => {
//             dispatch(setCurrentPageAC(pageNumber))
//         },
//         setTotalUsersCount: (totalCount) => {
//             dispatch(setUsersTotalCountAC(totalCount))
//         },
//         toggleIsFetching: (isFetching) => {
//             dispatch(toggleIsFetchingAC(isFetching))
//         }
//     }
// }

export default connect(mapStateToProps,
    { 
follow,
unfollow,
setUsers,
setCurrentPage,
setUsersTotalCount,
toggleIsFetching
    }
) (UsersContainer) ;

