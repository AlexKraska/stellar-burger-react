import { getOurIngredients } from "../../components/app/app.jsx"; // экземпляр класса дляя запросов к апи

export const REGISTRATION = 'REGISTRATION';
export const REGISTRATION_SUCCESS = 'REGISTRATION_SUCCESS';
export const REGISTRATION_FAILED = 'REGISTRATION_FAILED';

export const LOGIN = 'LOGIN';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILED = 'LOGIN_FAILED';

export const LOGOUT = 'LOGOUT';
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';
export const LOGOUT_FAILED = 'LOGOUT_FAILED';

export const GET_USER_DATA = 'GET_USER_DATA';
export const GET_USER_DATA_SUCCESS = 'GET_USER_DATA_SUCCESS';
export const GET_USER_DATA_FAILED = 'GET_USER_DATA_FAILED';

export const REFRESH_TOKEN = 'REFRESH_TOKEN';
export const REFRESH_TOKEN_SUCCESS = 'REFRESH_TOKEN_SUCCESS';
export const REFRESH_TOKEN_FAILED = 'REFRESH_TOKEN_FAILED';

export const FORGOT_PASSWORD = 'FORGOT_PASSWORD';
export const FORGOT_PASSWORD_SUCCESS = 'FORGOT_PASSWORD_SECCESS';
export const FORGOT_PASSWORD_FAILED = 'FORGOT_PASSWORD_FAILED';
export const SET_FORGOT_PASSWORD_STATE = 'SET_FORGOT_PASSWORD_STATE';

export const RESET_PASSWORD = 'RESET_PASSWORD';
export const RESET_PASSWORD_SUCCESS = 'RESET_PASSWORD_SUCCESS';
export const RESET_PASSWORD_FAILED = 'RESET_PASSWORD_FAILED';

export const setRegistrationLoading = () => ({ type: REGISTRATION });
export const setRegistrationLoadingSuccess = (token) => ({ type: REGISTRATION_SUCCESS, payload: token });
export const setRegistrationLoadingFailed = () => ({ type: REGISTRATION_FAILED });

export const setGetUserDataLoading = () => ({ type: GET_USER_DATA });
export const setGetUserDataLoadingSuccess = (userData) => ({ type: GET_USER_DATA_SUCCESS, payload: userData });
export const setGetUserDataLoadingFailed = () => ({ type: GET_USER_DATA_FAILED });

export const setRefreshTokenLoading = () => ({ type: REFRESH_TOKEN });
export const setRefreshTokenLoadingSuccess = (token) => ({ type: REFRESH_TOKEN_SUCCESS, payload: token });
export const setRefreshTokenLoadingFailed = () => ({ type: REFRESH_TOKEN_FAILED });

export const setForgotPasswordLoading = () => ({ type: FORGOT_PASSWORD });
export const setForgotPasswordLoadingSuccess = () => ({ type: FORGOT_PASSWORD_SUCCESS });
export const setForgotPasswordLoadingFailed = () => ({ type: FORGOT_PASSWORD_FAILED });
export const setForgotPasswordState = (state) => ({ type: SET_FORGOT_PASSWORD_STATE, payload: state });

export const setResetPasswordLoading = () => ({ type: RESET_PASSWORD });
export const setResetPasswordLoadingSuccess = () => ({ type: RESET_PASSWORD_SUCCESS });
export const setResetPasswordLoadingFailed = () => ({ type: RESET_PASSWORD_FAILED });

const tokenExpiredError = 403;
const unauthorizedError = 401;

export function registerNewUser(email, name, password) {
    return (dispatch) => {
        dispatch(setRegistrationLoading())

        getOurIngredients.registerUser(email, name, password)
            .then((res) => {
                dispatch(setRegistrationLoadingSuccess(res.accessToken))
                localStorage.setItem('refreshToken', res.refreshToken)
            })
            .catch((err) => {
                dispatch(setRegistrationLoadingFailed())
                console.log(`вышла error ${err} во время регистрации новог пользователя`)
            })
    };
};

// export const getUserData = (accessToken) => {
//     return (dispatch) => {
//         dispatch(setGetUserDataLoading())

//         getOurIngredients.getUserData(accessToken)
//             .then((res) => {
//                 dispatch(setGetUserDataLoadingSuccess(res.user))
//             })
//             .catch((err) => {
//                 dispatch(setGetUserDataLoadingFailed())

//                 if (err.status === tokenExpiredError || err.status === unauthorizedError) {
//                     dispatch(refreshToken(localStorage.getItem('refreshToken'), 'getUserData'))
//                 }
//                 console.log(`вышла ${err} во время полученя данных юзера`)
//             })
//     }
// }

export const refreshToken = (refreshToken) => {
    return (dispatch) => {
        dispatch(setRefreshTokenLoading())

        getOurIngredients.refreshToken(refreshToken)
            .then((res) => {
                localStorage.setItem('refreshToken', res.refreshToken)
                dispatch(setRefreshTokenLoadingSuccess(res.accessToken))
            })
            .catch((err) => {
                dispatch(setRefreshTokenLoadingFailed())
                console.log(`вышла error ${err} когда получали токен`);
            })
    }
}

export const forgotPassword = (email) => {
    return (dispatch) => {
        dispatch(setForgotPasswordLoading())

        getOurIngredients.forgotPassword(email)
            .then(() => {
                setResetPasswordLoadingSuccess()
            })
            .catch((err) => {
                setForgotPasswordLoadingFailed()
                console.log(`вышла error ${err} когда отправляли код сброса пароля на мыло`);
            })
    }
}

export const resetPassword = () => {
    return (dispatch) => {
        dispatch(setResetPasswordLoading())

        getOurIngredients.resetPassword()
            .then(() => {
                setForgotPasswordLoadingSuccess()
            })
            .catch((err) => {
                setResetPasswordLoadingFailed()
                console.log(`вышла error ${err} во время сброса пароля юзера`);
            })
    }
}