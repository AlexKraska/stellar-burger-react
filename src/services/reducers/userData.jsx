import {
    REGISTRATION,
    REGISTRATION_SUCCESS,
    REGISTRATION_FAILED,
    GET_USER_DATA, GET_USER_DATA_SUCCESS, GET_USER_DATA_FAILED, REFRESH_TOKEN,
    REFRESH_TOKEN_SUCCESS,
    REFRESH_TOKEN_FAILED,
    SET_FORGOT_PASSWORD_STATE,
    FORGOT_PASSWORD,
    FORGOT_PASSWORD_SUCCESS,
    FORGOT_PASSWORD_FAILED,
    RESET_PASSWORD,
    RESET_PASSWORD_SUCCESS,
    RESET_PASSWORD_FAILED,
    LOGIN, LOGIN_SUCCESS, LOGIN_FAILED, LOGOUT, LOGOUT_SUCCESS, LOGOUT_FAILED,
} from "../actions/userData.jsx";

const defaultState = {
    userData: null,
    registrationRequest: false,
    registrationRequestFailed: false,

    accessToken: null,

    getUserDataRequest: false,
    getUserDataRequestFailed: false,

    refreshTokenRequest: false,
    refreshTokenRequestFailed: false,

    forgotPasswordRequest: false,
    forgotPasswordRequestFailed: false,
    isPasswordForgot: false,

    resetPasswordRequest: false,
    resettPasswordRequestFailed: false,

    loginRequest: false,
    loginRequestFailed: false,
}

export const userDataReducer = (state = defaultState, action) => {
    switch (action.type) {
        case LOGIN: {
            return {
                ...state,
                loginRequest: true,
                loginRequestFailed: false,
            };
        }
        case LOGIN_SUCCESS: {
            return {
                ...state,
                accessToken: action.payload.accessToken,
                userData: action.payload.user,
            };
        }
        case LOGIN_FAILED: {
            return {
                ...state,
                loginRequest: false,
                loginRequestFailed: true,
            };
        }
        case REGISTRATION: {
            return {
                ...state,
                registrationRequest: true,
                registrationRequestFailed: false,
            };
        }
        case REGISTRATION_SUCCESS: {
            return {
                ...state,
                registrationRequest: false,
                accessToken: action.payload,
            };
        }
        case REGISTRATION_FAILED: {
            return {
                ...state,
                registrationRequest: false,
                registrationRequestFailed: true,
            };
        }
        case GET_USER_DATA: {
            return {
                ...state,
                getUserDataRequest: true,
                getUserDataRequestFailed: false,
            };
        }
        case GET_USER_DATA_SUCCESS: {
            return {
                ...state,
                getUserDataRequest: false,
                userData: action.payload
            };
        }
        case GET_USER_DATA_FAILED: {
            return {
                ...state,
                getUserDataRequest: false,
                getUserDataRequestFailed: true,
            };
        }
        case REFRESH_TOKEN: {
            return {
                ...state,
                refreshTokenRequest: true,
                refreshTokenRequestFailed: false,
            };
        }
        case REFRESH_TOKEN_SUCCESS: {
            return {
                ...state,
                refreshTokenRequest: false,
                accessToken: action.payload,
            };
        }
        case REFRESH_TOKEN_FAILED: {
            return {
                ...state,
                refreshTokenRequest: false,
                refreshTokenRequestFailed: true,
            };
        }
        case FORGOT_PASSWORD: {
            return {
                ...state,
                forgotPasswordRequest: true,
                forgotPasswordRequestFailed: false,
            };
        }
        case FORGOT_PASSWORD_SUCCESS: {
            return {
                ...state,
                forgotPasswordRequest: false,
            };
        }
        case FORGOT_PASSWORD_FAILED: {
            return {
                ...state,
                forgotPasswordRequest: false,
                forgotPasswordRequestFailed: true,
            };
        }
        case SET_FORGOT_PASSWORD_STATE: {
            return {
                ...state,
                isPasswordForgot: action.payload,
            }
        }
        case RESET_PASSWORD: {
            return {
                ...state,
                resetPasswordRequest: true,
            };
        }
        case RESET_PASSWORD_SUCCESS: {
            return {
                ...state,
                resetPasswordRequest: false,
                resettPasswordRequestFailed: false,
            };
        }
        case RESET_PASSWORD_FAILED: {
            return {
                ...state,
                resetPasswordRequest: false,
                resettPasswordRequestFailed: true,
            };
        }
        default: {
            return state;
        }
    }
}