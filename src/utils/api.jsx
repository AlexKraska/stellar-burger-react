export class Api {
    constructor(data) {
        this._url = data;
    }

    _checkResponse(res) {
        if (res.ok) {
            return res.json();
        } else {
            return Promise.reject(`Ну ерундистика какая-то: ${res.status}`);
        }
    }

    getIngredientsDataObj() {
        return fetch(`${this._url}ingredients`)
            .then(this._checkResponse)
    }
};