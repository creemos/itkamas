let initialState = {
    users: [
        /*
        {
            id: 1,
            avatar: null,
            fullname: 'Vasya D.',
            location: {
                city: 'Saratov',
                country: 'Belarus'
            },
            status: 'Learn React',
            followed: true
        },
        {
            id: 2,
            avatar: null,
            fullname: 'Sasha E.',
            location: {
                city: 'Kiev',
                country: 'Ukraine'
            },
            status: 'Love life',
            followed: false
        }
        */
    ],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 2
}


const usersReducer = (state = initialState, action) => {
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
        default: return state
    }
}

export const followToggleAC = id => {
    return {
        type: 'FOLLOW-TOGGLE',
        userId: id
    }
}

export const setUsersAC = (users) => {
    return {
        type: 'SET-USERS',
        users
    }
}

export const setCurrentPageAC = (currentPage) => {
    return {
        type: 'SET-CURRENT-PAGE',
        currentPage
    }
}

export const setTotalUsersCountAC = (totalUsersCount) => {
    return {
        type: 'SET-TOTAL-USERS-COUNT',
        totalUsersCount
    }
}

export default usersReducer