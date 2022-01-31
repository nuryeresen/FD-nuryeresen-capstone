const VALIDATE_USER = "VALIDATE_USER"
const ADD_SEEN_MOVIES = "ADD_SEEN_MOVIES"
const ADD_FAV_MOVIES = "ADD_FAV_MOVIES"
const USER_LOGOUT = "USER_LOGOUT"

export const validateUser = (username, password) => ({
    type: VALIDATE_USER,
    payload: { username, password }
})

export const userLogout = () => ({
    type: USER_LOGOUT
})

export const addSeenList = (movieId) => ({
    type: ADD_SEEN_MOVIES,
    payload: movieId
})

export const addFavList = (movieId) => ({
    type: ADD_FAV_MOVIES,
    payload: movieId
})

const initialState = {
    "avatarUrl": "https://i.picsum.photos/id/1005/150/150.jpg?hmac=-Q1z4K5WO9Q7qDB-R9vrj9440_mRxpeHZMOFHblbB6s",
    username: "sahinde",
    password: "password",
    "socials": {
        "twitter": "https://twitter.com/",
        "instagram": "https://www.instagram.com/"
    },
    "seenList": {
        "seenFilms": [
        ],
        "totalCount": 0
    },
    "favoritesList": {
        "favoritesFilms": [
        ],
        "totalCount": 0
    },
    userLogin: false,
    "joinDate": "December 2021"
}
 const userReducer = (user = initialState, action) => {
    console.log(user)
    switch (action.type) {
        case VALIDATE_USER:
            return action.payload.username === user.username && action.payload.password === user.password && { ...user, userLogin: true } 
        case ADD_FAV_MOVIES:
            return !user.favoritesList.favoritesFilms.includes(action.payload) ?
                { ...user, favoritesList: { favoritesFilms: [...user.favoritesList.favoritesFilms, action.payload], totalCount: user.favoritesList.totalCount + 1 } } : user
        case ADD_SEEN_MOVIES:
            return !user.seenList.seenFilms.includes(action.payload) ?
                { ...user, seenList: { seenFilms: [...user.seenList.seenFilms, action.payload], totalCount: user.seenList.totalCount + 1 } } : user
                case USER_LOGOUT: 
                    return initialState
                default:
            return user
          }
}

export { userReducer }    
            
           
