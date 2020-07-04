

export default class MainApi {
  constructor(url, routes) {


    this.url = url;
    this.routes = routes;
  }

  signup( email, password, name ) {
    return fetch(`${this.url + this.routes.signUp}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        password,
        name,
      }),
    })
    .then((res) => {
      if (!res.ok) {     //если запрос выполнился неудачно возвращаем отклоненный промис
        return Promise.reject(res.json());
      }
      return res.json(); //если res.ok===true возвращаем результат запроса
    })
    .catch((err) => {console.log(err)
      if (err.message === 'Failed to fetch') {
      throw "Во время запроса произошла ошибка! Обновите страницу!"
    }
    return err;
    });
  }

  signin( email, password ) {    console.log(email)

    return fetch(`${this.url + this.routes.signIn}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          password:password,
        })
      })
      .then((res) => {
        if (!res.ok) {     //если запрос выполнился неудачно возвращаем отклоненный промис
         return Promise.reject(res.json());
        }
        return res.json(); //если res.ok===true возвращаем результат запроса
      })
      .catch((err) => {
      if (err.message === 'Failed to fetch') {
       throw "Во время запроса произошла ошибка! Обновите страницу!"
      }
      return err;
    });
  }

  getUserData(token) {
    this._token = token;

    return fetch(`${this.url + this.routes.currentUser}`, {
        method: 'GET',
        headers: {
          authorization: this._token,
        },
      })
      .then((res) => {
        if (!res.ok) {     //если запрос выполнился неудачно возвращаем отклоненный промис
          return Promise.reject(`Ошибка: ${res.status}`);
        }
        return res.json(); //если res.ok===true возвращаем результат запроса
      })
      .catch((err) => {console.log(err)
      });
  }

  getArticles(token) {
    this.token = token;
    console.log(123)
    return fetch(`${this.url + this.routes.articles}`, {
        method: 'GET',
        headers: {
          authorization: this.token,
        },
      })
      .then((res) => {
        if (!res.ok) {     //если запрос выполнился неудачно возвращаем отклоненный промис
          return Promise.reject(`Ошибка: ${res.status}`);
        }
        return res.json(); //если res.ok===true возвращаем результат запроса
      })
      .catch((err) => {
        if (err.message === 'Failed to fetch') {
        throw "Во время запроса произошла ошибка!"
      }
      throw err;
      });
  }

  createArticle(article, token) {
    const {
      keyword,
      title,
      text,
      date,
      source,
      link,
      image,
    } = article;
    this.token = token;
    console.log(keyword)
    return fetch(`${this.url + this.routes.articles}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          authorization: this.token  },
        body: JSON.stringify({
          keyword,
          title,
          text,
          date,
          source,
          link,
          image,
        })
      })
      .then((res) => {
        if (!res.ok) {     //если запрос выполнился неудачно возвращаем отклоненный промис
          return Promise.reject(`Ошибка: ${res.status}`);
        }
        return res.json(); //если res.ok===true возвращаем результат запроса
      })
      .catch((err) => {console.log(123)
        console.log(err.message)
         if (err.message === 'Failed to fetch') {
        throw "Во время запроса произошла ошибка!"
      }
      throw "Адрес фотографии на статье не является валидным или ведет в никуда!";
      });
  }

  removeArticle(id, token) {
    this.token = token;

    return fetch(`${this.url + this.routes.articles}/${id}`, {
        method: 'DELETE',
        headers: {
          authorization: this.token
        }
      })
      .then((res) => {
        if (!res.ok) {     //если запрос выполнился неудачно возвращаем отклоненный промис
          return Promise.reject(`Ошибка: ${res.status}`);
        }
        return res.json(); //если res.ok===true возвращаем результат запроса
      })
      .catch((err) => {
        if (err.message === 'Failed to fetch') {
          throw "Во время запроса произошла ошибка!"
        }
        throw err;
      });
  }
}