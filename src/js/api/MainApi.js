
import { errorconnection } from '../constants/constantsapi';

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
    .then(res => res.json())
    .catch((err) => {console.log(err);return err
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
      .then(res => res.json())
      .catch((err) => {console.log(err);return err});
  }

  getUserData(token) {
    this._token = token;

    return fetch(`${this.url + this.routes.currentUser}`, {
        method: 'GET',
        headers: {
          authorization: this._token,
        },
      })
      .then(res => res.json())
      .catch((err) => {console.log(err);return err
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
      .then(res => res.json())
      .catch((err) => {console.log(err);return err
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
      .then(res => res.json())
      .catch((err) => {console.log(err);return err
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
      .then(res => res.json())
      .catch((err) => {console.log(err);return err
      });
  }
}