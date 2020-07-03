
export default class NewsApi {
  constructor(props) {
    const {
      url,
      apiKey,
      pageSize,
      amountDays
    } = props

    this.url = url;
    this.apiKey = apiKey;
    this.pageSize = pageSize;
    this.amountDays = amountDays;
    this.initDates(this.amountDays);
  }

  initDates(amountDays) {
    this.date = new Date();
    this.from = new Date(+this.date - 3600 * 24 * 1000 * amountDays).toISOString().slice(0, 19);
    this.to = this.date.toISOString().slice(0, 19);
  }

  getNews(request) {
    return fetch(
      `${this.url}?q=${request}&from=${this.from}&to=${this.to}&pageSize=${this.pageSize}&apiKey=${this.apiKey}`,
    )
    .then((res) => {
      if (!res.ok) {     //если запрос выполнился неудачно возвращаем отклоненный промис
        return Promise.reject(`Ошибка: ${res.status}`);
      }
      return res.json(); //если res.ok===true возвращаем результат запроса
    })
      .catch((err) => {
        alert("Ошибка при выполнении запроса! Обновите страницу!")
      });
  }
}
