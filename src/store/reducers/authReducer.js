const initialAuthState = {
    token: "",
    isAuthenticate: false,
    user: null
}

function authReducer(state = initialAuthState, { type, payload }) {
    switch (type) {
        case "SET_AUTH":
            return { ...state, ...payload, isAuthenticate: true }
        case "LOGOUT":
            return { ...state, ...initialAuthState }
        default:
            return { ...state }
    }
}

export default authReducer