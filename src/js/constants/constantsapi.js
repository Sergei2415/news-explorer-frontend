const buttonSearch = document.querySelector('.header-search__button');
const inputSearch = document.querySelector('.header-search__input');
const url = 'https://praktikum.tk/news/v2/everything';
const apiKey = '560d4761e5d04bf79de10cf0f2770f76';
const pageSize = 30;
const amountDays = 7;
const errorconnection = "Во время запроса произошла ошибка!"
const urlServer = "https://24sere.ga/"
const routers = {
  signIn: 'signin',
  signUp: 'signup',
  articles: 'articles',
  logOut: 'logout',
  currentUser: 'users/me',
}

export {
  url,
  apiKey,
  pageSize,
  amountDays,
  buttonSearch,
  inputSearch,
  errorconnection,
  urlServer,
  routers
}