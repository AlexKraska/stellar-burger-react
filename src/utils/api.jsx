import { base_URL } from "./constants.jsx";

// Запрос к API должен происходить при монтировании компонента App.
//  А для получения и сохранения данных воспользуйтесь хуком. 

class Api {
    constructor(data) {
        this._url = data;
    }

    _requestData(res) {
        if (res.ok) {
            return res.json();
        } else {
            return Promise.reject(
                `Ну ерундистика какая-то: ${res.status}`
            );
        }
    }

    getIngredients() {
        return fetch(`${this._url}/ingredients`)
            .then((res) => {
                this._requestData(res);
            })
    }
};

const getOurIngredients = new Api(base_URL);

export default getOurIngredients;