import { UserAPI } from "../api/api";

let initialState = {
  users: [] as Array<UserType>,
  pageSize: 5,
  totalUsersCount: 0,
  currentPage: 1,
  isLoading: false,
  followingInProgress: [] as Array<number>,
};

type UserType = {
  id: number | null;
  photos: {
    small: string | null;
    large: string | null;
  };
  name: string | null;
  status: string | null;
  followed: boolean;
};

type InitialStateType = typeof initialState;

const usersReducer = (
  state: typeof initialState = initialState,
  action: any
): InitialStateType => {
  switch (action.type) {
    case "FOLLOW-TOGGLE": {
      let newState = {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.userId) {
            let next = u;
            next.followed = !u.followed;
            return next;
          } else return u;
        }),
      };
      return newState;
    }
    case "SET-USERS": {
      return { ...state, users: action.users };
    }
    case "SET-CURRENT-PAGE": {
      return { ...state, currentPage: action.currentPage };
    }
    case "SET-TOTAL-USERS-COUNT": {
      return { ...state, totalUsersCount: action.totalUsersCount };
    }
    case "TOGGLE-IS-LOADING": {
      return { ...state, isLoading: action.isLoading };
    }

    case "FOLLOWING-IN-PROGRESS": {
      return {
        ...state,
        followingInProgress: action.followingInProgress
          ? [...state.followingInProgress, action.id]
          : state.followingInProgress.filter((id) => id !== action.id),
      };
    }
    default:
      return state;
  }
};



type ToggleFollowActionType = {
  type: "FOLLOW-TOGGLE";
  userId: number;
};

export const toggleFollow = (id: number): ToggleFollowActionType => {
  return {
    type: "FOLLOW-TOGGLE",
    userId: id,
  };
};

type SetUsersActionType = {
  type: "SET-USERS";
  users: Array<UserType>;
};

export const setUsers = (users: Array<UserType>): SetUsersActionType => {
  return {
    type: "SET-USERS",
    users,
  };
};

type SetCurrentPageActionType = {
    type: "SET-CURRENT-PAGE",
    currentPage: number
}

export const setCurrentPage = (currentPage: number): SetCurrentPageActionType => {
  return {
    type: "SET-CURRENT-PAGE",
    currentPage,
  };
};

type SetTotalUsersCountActionType = {
    type: "SET-TOTAL-USERS-COUNT",
    totalUsersCount: number
}

export const setTotalUsersCount = (totalUsersCount: number): SetTotalUsersCountActionType => {
  return {
    type: "SET-TOTAL-USERS-COUNT",
    totalUsersCount
  };
};

type ToggleIsLoadingActionType = {
    type: "TOGGLE-IS-LOADING",
    isLoading: boolean
}

export const toggleIsLoading = (isLoading: boolean): ToggleIsLoadingActionType => {
  return {
    type: "TOGGLE-IS-LOADING",
    isLoading
  };
};

type ToggleFollowingInProgressActionType = {
    type: "FOLLOWING-IN-PROGRESS",
    followingInProgress: boolean,
    id: number
}

export const toggleFollowingInProgress = (
  followingInProgress: boolean,
  id: number
) : ToggleFollowingInProgressActionType => {
  return {
    type: "FOLLOWING-IN-PROGRESS",
    followingInProgress,
    id,
  };
};

export const getUsers = (currentPage: number, pageSize: number) => {
  return (
    dispatch: (arg0: {
      type: string;
      isLoading?: boolean;
      users?: Array<any>;
      totalUsersCount?: number;
      currentPage?: number;
    }) => void
  ) => {
    dispatch(toggleIsLoading(true));
    UserAPI.getUsers(currentPage, pageSize).then((data) => {
      dispatch(setUsers(data.items));
      dispatch(setTotalUsersCount(data.totalCount));
      dispatch(setCurrentPage(currentPage));
      dispatch(toggleIsLoading(false));
    });
  };
};

export const followOk = (id: number) => {
  return (
    dispatch: (arg0: {
      type: string;
      followingInProgress?: boolean;
      id?: number;
      userId?: number;
    }) => void
  ) => {
    dispatch(toggleFollowingInProgress(true, id));
    UserAPI.unfollowUser(id).then((response) => {
      if (response.data.resultCode === 0) {
        dispatch(toggleFollow(id));
        dispatch(toggleFollowingInProgress(false, id));
      }
    });
  };
};

export const unfollowOk = (id: number) => {
  return (
    dispatch: (arg0: {
      type: string;
      followingInProgress?: boolean;
      id?: number;
      userId?: number;
    }) => void
  ) => {
    dispatch(toggleFollowingInProgress(true, id));
    UserAPI.followUser(id).then((response) => {
      if (response.data.resultCode === 0) {
        dispatch(toggleFollow(id));
        dispatch(toggleFollowingInProgress(false, id));
      }
    });
  };
};

export default usersReducer;
