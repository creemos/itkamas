let initialState = {
    users: [/*
        {
            id: 1,
            photos: {
                'small': 'https://avotar.ru/avatar/minony/avatarka.gif'
            },
            name: 'Vasya D.',
            location: {
                city: 'Saratov',
                country: 'Belarus'
            },
            status: 'Learn React',
            followed: true
        },
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
    currentPage: 2,
    isLoading: false
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
        case 'TOGGLE-IS-LOADING': {
            return {...state, isLoading: action.isLoading}
        }
        default: return state
    }
}

export const toggleFollow = id => {
    return {
        type: 'FOLLOW-TOGGLE',
        userId: id
    }
}

export const setUsers = (users) => {
    return {
        type: 'SET-USERS',
        users
    }
}

export const setCurrentPage = (currentPage) => {
    return {
        type: 'SET-CURRENT-PAGE',
        currentPage
    }
}

export const setTotalUsersCount = (totalUsersCount) => {
    return {
        type: 'SET-TOTAL-USERS-COUNT',
        totalUsersCount
    }
}

export const toggleIsLoading = (isLoading) => {
    return {
        type: 'TOGGLE-IS-LOADING',
        isLoading
    }
}

export default usersReducer