export const setFavorite = payload => ({
    type: 'SET_FAVORITE',
    payload
})

export const deleteFavorite = payload => ({
    type: 'DELETE_FAVORITE',
    payload
})

//login
export const loginRequest = payload => ({
    type: 'LOGIN_REQUEST',
    payload
})
//log out
export const logoutRequest = payload => ({
    type: 'LOGOUT_REQUEST',
    payload
})
//register
export const registerRequest = payload => ({
    type: 'REGISTER_REQUEST',
    payload
})
//video player
export const getVideoSource = payload => ({
    type: 'GET_VIDEO_SOURCE',
    payload
})
//search
export const searchVideo = payload => ({
    type: "SET_SEARCH",
    payload
});
