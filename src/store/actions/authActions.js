export const SetAuth = (data) => {
    return {
        type: "SET_AUTH",
        payload: data,
    }
}

export const LogoutAction = () => {
    return {
        type: "LOGOUT_AUTH",
        payload: null
    }
}