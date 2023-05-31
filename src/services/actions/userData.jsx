import { getOurIngredients } from "../../components/app/app.jsx"; // экземпляр класса дляя запросов к апи
import { getCookie } from "../../utils/cookie/getCookie.jsx";
import { setCookie } from "../../utils/cookie/setCookie.jsx";

export const REGISTRATION = 'REGISTRATION';
export const REGISTRATION_SUCCESS = 'REGISTRATION_SUCCESS';
export const REGISTRATION_FAILED = 'REGISTRATION_FAILED';

export const LOGIN = 'LOGIN';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILED = 'LOGIN_FAILED';
export const SET_IS_LOGGED_IN = 'SET_IS_LOGGED_IN';

export const LOGOUT = 'LOGOUT';
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';
export const LOGOUT_FAILED = 'LOGOUT_FAILED';

export const GET_USER_DATA = 'GET_USER_DATA';
export const GET_USER_DATA_SUCCESS = 'GET_USER_DATA_SUCCESS';
export const GET_USER_DATA_FAILED = 'GET_USER_DATA_FAILED';

export const SEND_USER_DATA = 'SEND_USER_DATA';
export const SEND_USER_DATA_SUCCESS = 'SEND_USER_DATA_SUCCESS';
export const SEND_USER_DATA_FAILED = 'SEND_USER_DATA_FAILED';

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

export const setLoginLoading = () => ({ type: LOGIN });
export const setLoginLoadingSuccess = (token) => ({ type: LOGIN_SUCCESS, payload: token });
export const setLoginLoadingFailed = () => ({ type: LOGIN_FAILED });
export const setIsLoggedIn = (state) => ({ type: SET_IS_LOGGED_IN, payload: state });

export const setSendUserDataLoading = () => ({ type: SEND_USER_DATA });
export const setSendUserDataLoadingSuccess = (userData) => ({ type: SEND_USER_DATA_SUCCESS, payload: userData });
export const setSendUserDataLoadingFailed = () => ({ type: SEND_USER_DATA_FAILED });

export const setLogoutLoading = () => ({ type: LOGOUT });
export const setLogoutLoadingSuccess = () => ({ type: LOGOUT_SUCCESS });
export const setLogoutLoadingFailed = () => ({ type: LOGOUT_FAILED });


const expiredError = 403; // ошибка, возникающая если токен просрочен(более 20 минут)
const unauthorizedError = 401; // ошибка, возникающая если неавторизованный юзер

// регистрируем новог юзера
export function registerNewUser(email, password, name) {
    return (dispatch) => {
        dispatch(setRegistrationLoading());

        getOurIngredients.registerUser(email, password, name)
            .then(res => {
                if (res && res.success) {
                    
                    dispatch(setRegistrationLoadingSuccess(res.accessToken));
                    localStorage.setItem('refreshToken', res.refreshToken);
                }
                else {
                    dispatch(setRegistrationLoadingFailed());
                }
            })
            .catch((err) => {
                dispatch(setRegistrationLoadingFailed());
                console.log(`вышла error ${err} во время регистрации новог пользователя`);
            })
    };
};

// получаем инфу по юзеру
export const getUserData = (accessToken) => {
    return (dispatch) => {
        dispatch(setGetUserDataLoading())

        getOurIngredients.getUserData(accessToken)
            .then((res) => {
                dispatch(setGetUserDataLoadingSuccess(res.user));
            })
            .catch((err) => {
                dispatch(setGetUserDataLoadingFailed());

                if (err.status === expiredError || err.status === unauthorizedError) {
                    dispatch(refreshToken(localStorage.getItem('refreshToken'), 'getUserData'));
                }
                console.log(`вышла ${err} во время рефрешинга токена`);
                // getOurIngredients.refreshToken(getCookie('refreshToken'))
            })
    }
}

// меняем инфу по юзеру ручками
export const sendUserData = (accessToken, name, email, password) => {
    return (dispatch) => {
        dispatch(setSendUserDataLoading());

        getOurIngredients.sendUserData(accessToken, name, email, password)
            .then((res) => {
                dispatch(setSendUserDataLoadingSuccess(res.user));
            })
            .catch((err) => {

                if (err.status === expiredError) {
                    dispatch(refreshToken(localStorage.getItem('refreshToken')));
                }
                dispatch(setSendUserDataLoadingFailed());
                console.log(`ойй, ${err} во время рефрешинга токена`);
            })
    }
}

// рефрешим токен
export const refreshToken = (refreshToken) => {
    return (dispatch) => {
        dispatch(setRefreshTokenLoading())

        getOurIngredients.refreshToken(refreshToken)
            .then((res) => {
                localStorage.setItem('refreshToken', res.refreshToken);
                dispatch(setRefreshTokenLoadingSuccess(res.accessToken));
                setCookie('accessToken', res.accessToken);
            })
            .catch((err) => {
                dispatch(setRefreshTokenLoadingFailed());
                console.log(`эх, error ${err} когда получали токен`);
            })
    }
}

//введем свою почту чтобы получить код для сброссас пароля
export const forgotPassword = (email) => {
    return (dispatch) => {
        dispatch(setForgotPasswordLoading())

        getOurIngredients.forgotPassword(email)
            .then(() => {
                dispatch(setForgotPasswordLoadingSuccess());
            })
            .catch((err) => {
                dispatch(setForgotPasswordLoadingFailed());
                console.log(`ой, error ${err} когда отправляли код сброса пароля на мыло`);
            })
    }
}

// получаем код из почты и меняем пароль
export const resetPassword = (passValue, letterCodeValue) => {
    return (dispatch) => {
        dispatch(setResetPasswordLoading());

        getOurIngredients.resetPassword(passValue, letterCodeValue)
            .then(() => {
                dispatch(setResetPasswordLoadingSuccess());
            })
            .catch((err) => {
                dispatch(setResetPasswordLoadingFailed());
                console.log(`тут error ${err} во время сброса пароля юзера`);
            })
    }
}

// процесс логирования юзера
export const loginUser = (email, password) => {
    return (dispatch) => {
        dispatch(setLoginLoading());

        getOurIngredients.login(email, password)
            .then((res) => {
                console.log(res);
                dispatch(setLoginLoadingSuccess(res));
                localStorage.setItem('refreshToken', res.refreshToken);
                setCookie('accessToken', res.accessToken);
            })
            .catch(err => {
                dispatch(setLoginLoadingFailed());
                console.log(`у нас err ${err} во время логирования юзера`);
            })
    }
}

// логаут юзера
export const logout = (refreshToken) => {
    return (dispatch) => {
        dispatch(setLogoutLoading());

        getOurIngredients.logout(refreshToken)
            .then(() => {
                dispatch(setLogoutLoadingSuccess());
                dispatch(setIsLoggedIn(false));
                localStorage.removeItem('refreshToken');
            })
            .catch((err) => {
                dispatch(setLoginLoadingFailed());
                console.log(`вышла err ${err} во время логаута`);
            })
    }
}