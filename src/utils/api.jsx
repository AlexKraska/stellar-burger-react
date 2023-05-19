export class Api {
    constructor(data) {
        this._url = data;
    }

    // проверка ответа на ошибки
    _checkResponse(res) {
        if (res.ok) {
            return res.json();
        } else {
            return Promise.reject(`Ну ерундистика какая-то: ${res.status}`);
        }
    }

    // полуаем массив наших тнгредиентов
    getIngredientsDataObj() {
        return fetch(`${this._url}ingredients`)
            .then(this._checkResponse);
    }

    // Создание заказа
    sendIngredients(ingredients) {
        return fetch(`${this._url}orders`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body:
                JSON.stringify({ ingredients: ingredients }
                )
        }).then((res) => this._checkResponse(res));
    }

    // отправка пароля на посту юзера для дальнейшего сброса пароля
    forgotPassword(email) {
        return fetch('https://norma.nomoreparties.space/api/password-reset', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email })
        }).then((res) => this._checkResponse(res));
    }

    // сброс пароля
    resetPassword() {
        return fetch('https://norma.nomoreparties.space/api/password-reset/reset', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify()
        }).then((res) => this._checkResponse(res));
    }

    // getUserData(accessToken) {
    //     return fetch('https://norma.nomoreparties.space/api/auth/user', {
    //         method: "GET",
    //         headers: {
    //             "Content-Type": "application/json;charset=utf-8",
    //             "authorization": accessToken,
    //         },
    //     }).then((res) => this._checkResponse(res));

    // }

    // Регистрация нового пользователя
    registerUser(email, password, name) {
        return fetch(`${this._url}auth/user/register`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, password, name })
        }).then((res) => this._checkResponse(res));
    }

    // Запрос для обновления токена
    refreshToken(refreshToken) {
        return fetch(`${this._baseUrl}auth/token`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ "token": refreshToken }),
        }).then((res) => this._checkResponse(res));
    }
};