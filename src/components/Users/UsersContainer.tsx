import React from "react";
import { connect } from "react-redux";
import Users from "./Users";
import {
  toggleFollow,
  setUsers,
  setCurrentPage,
  setTotalUsersCount,
  toggleIsLoading,
  toggleFollowingInProgress,
  getUsers,
  followOk,
  unfollowOk,
} from "../../redux/usersReducer";
import Preloader from "../Common/Preloader";
import { withAuthRedirect } from "../hoc/authRedirect";
import { compose } from "redux";
import { AppStateType } from "../../redux/reduxStore";

interface UserAPIInterface {
  getUsers: (currentPage: number, pageSize: number) => void;
  currentPage: number;
  pageSize: number;
  isLoading: boolean;
  totalUsersCount: number;
  toggleFollow: () => void;
  toggleFollowingInProgress: () => void;
  followingInProgress: Array<number>;
  users: Array<any>;
  unfollowOk: () => void;
  followOk: () => void;
}

class UsersAPI extends React.Component<UserAPIInterface> {
  componentDidMount() {
    this.props.getUsers(this.props.currentPage, this.props.pageSize);
  }

  onPageChanged = (pageNumber: number) => {
    this.props.getUsers(pageNumber, this.props.pageSize);
  };

  render() {
    return (
      <div>
        {this.props.isLoading ? (
          <Preloader />
        ) : (
          <Users
            totalUsersCount={this.props.totalUsersCount}
            pageSize={this.props.pageSize}
            currentPage={this.props.currentPage}
            onPageChanged={this.onPageChanged}
            toggleFollow={this.props.toggleFollow}
            toggleFollowingInProgress={this.props.toggleFollowingInProgress}
            followingInProgress={this.props.followingInProgress}
            users={this.props.users}
            unfollowOk={this.props.unfollowOk}
            followOk={this.props.followOk}
          />
        )}
      </div>
    );
  }
}


const mapStateToProps = (state: AppStateType) => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    isLoading: state.usersPage.isLoading,
    followingInProgress: state.usersPage.followingInProgress,
  };
};

const mapDispatchToProps = {
  toggleFollow,
  setUsers,
  setCurrentPage,
  setTotalUsersCount,
  toggleIsLoading,
  toggleFollowingInProgress,
  getUsers,
  followOk,
  unfollowOk,
};

export default compose<React.FC>(
  connect(mapStateToProps, mapDispatchToProps),
  withAuthRedirect
)(UsersAPI);
