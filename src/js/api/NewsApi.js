
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

  getNews(request) {console.log(`${this.url}?q=${request}&from=${this.from}&to=${this.to}&pageSize=${this.pageSize}&apiKey=${this.apiKey}`)
    return fetch(
      `${this.url}?q=${request}&from=${this.from}&to=${this.to}&pageSize=${this.pageSize}&apiKey=${this.apiKey}`,
    )
      .then(res => res.json())
      .catch((err) => {
       console.log(err)
      });
  }
}
