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
            .then(this._checkResponse)
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
        })
            .then((res) => this._checkResponse(res))
    }

};