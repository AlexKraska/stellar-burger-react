const ingredients = ["643d69a5c3f7b9001cfa0941", "643d69a5c3f7b9001cfa093e", "643d69a5c3f7b9001cfa0942", "643d69a5c3f7b9001cfa0943", "643d69a5c3f7b9001cfa093f", "643d69a5c3f7b9001cfa0940", "643d69a5c3f7b9001cfa0944", "643d69a5c3f7b9001cfa0945", "643d69a5c3f7b9001cfa0946", "643d69a5c3f7b9001cfa0947", "643d69a5c3f7b9001cfa0948", "643d69a5c3f7b9001cfa0949", "643d69a5c3f7b9001cfa094a", "643d69a5c3f7b9001cfa093c", "643d69a5c3f7b9001cfa093c"]

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