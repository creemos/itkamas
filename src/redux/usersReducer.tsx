import { UserAPI } from '../api/api';

let initialState = {
    users: [
        {
            id: null,
            photos: {
                small: null,
                large: null
            },
            name: null,
            location: {
                city: null,
                country: null
            },
            status: null,
            followed: false
        } /*
        {
            id: 2,
            photos: {
                'small': 'https://avotar.ru/avatar/minony/avatarka.gif'
            },
            name: 'Sasha E.',
            location: {
                city: 'Kiev',
                country: 'Ukraine'
            },
            status: 'Love life',
            followed: false
        }
    */ ],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isLoading: false,
    followingInProgress: []
}


const usersReducer = (state: typeof initialState = initialState, action: any) => {
    switch (action.type) {
        case 'FOLLOW-TOGGLE': {
            let newState = {...state, 
                users: state.users.map( u => {
                    if (u.id === action.userId) {
                        let next = u
                        next.followed = !u.followed
                        return next
                    } else return u
                })}
            return newState
        }
        case 'SET-USERS': {
            return {...state, users: action.users}
        }
        case 'SET-CURRENT-PAGE': {
            return {...state, currentPage: action.currentPage}
        }
        case 'SET-TOTAL-USERS-COUNT': {
            return {...state, totalUsersCount: action.totalUsersCount}
        }
        case 'TOGGLE-IS-LOADING': {
            return {...state, isLoading: action.isLoading}
        }

        case 'FOLLOWING-IN-PROGRESS': {
            return {...state, followingInProgress: action.followingInProgress ?
                   [...state.followingInProgress, action.id] : 
                   state.followingInProgress.filter(id => id !== action.id)}
        }
        default: return state
    }
}

export const toggleFollow = (id: number) => {
    return {
        type: 'FOLLOW-TOGGLE',
        userId: id
    }
}

export const setUsers = (users: Array<any>) => {
    return {
        type: 'SET-USERS',
        users
    }
}

export const setCurrentPage = (currentPage: number) => {
    return {
        type: 'SET-CURRENT-PAGE',
        currentPage
    }
}

export const setTotalUsersCount = (totalUsersCount: number) => {
    return {
        type: 'SET-TOTAL-USERS-COUNT',
        totalUsersCount
    }
}

export const toggleIsLoading = (isLoading: boolean) => {
    return {
        type: 'TOGGLE-IS-LOADING',
        isLoading
    }
}

export const toggleFollowingInProgress = (followingInProgress: boolean, id: number) => {
    return {
        type: 'FOLLOWING-IN-PROGRESS', followingInProgress, id
    }
}

export const getUsers = (currentPage: number, pageSize: number) => {
    return (dispatch: (arg0: { type: string; isLoading?: boolean; users?: Array<any>; totalUsersCount?: number; currentPage?: number; }) => void) => {
        dispatch(toggleIsLoading(true))
            UserAPI.getUsers(currentPage, pageSize)
                .then(data => {
                    dispatch(setUsers(data.items))
                    dispatch(setTotalUsersCount(data.totalCount))
                    dispatch(setCurrentPage(currentPage))
                    dispatch(toggleIsLoading(false))
                })
    }
}

export const followOk = (id: number) => {
    return (dispatch: (arg0: { type: string; followingInProgress?: boolean; id?: number; userId?: number; }) => void) => {
        dispatch(toggleFollowingInProgress(true, id))
        UserAPI.unfollowUser(id)
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(toggleFollow(id))
                dispatch(toggleFollowingInProgress(false, id))
            }
        })
    }
} 

export const unfollowOk = (id: number) => {
    return (dispatch: (arg0: { type: string; followingInProgress?: boolean; id?: number; userId?: number; }) => void) => {
        dispatch(toggleFollowingInProgress(true, id))
            UserAPI.followUser(id)
            .then(response => {
                    if (response.data.resultCode === 0) {
                        dispatch(toggleFollow(id))
                        dispatch(toggleFollowingInProgress(false, id))
                    }
                })
    }
}


export default usersReducer