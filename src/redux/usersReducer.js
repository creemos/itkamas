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
    ]
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
            return {...state, users: [...state.users, ...action.users]}
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

export default usersReducer