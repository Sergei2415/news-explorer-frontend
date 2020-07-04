import "./style.css";
import Popup from "../js/popup/Popup";
import Form from "../js/form/Form";
import NewsApi from "../js/api/NewsApi"
import MainApi from "../js/api/MainApi"
import Header from "../js/header/header"
import AutomaticLogon from "../js/utils/AutomaticLogon"
import {
  login,
  popupRegistrationLink,
  popupLoginLink,
  closePopupAuthorization,
  popupCloseAuthorization,
  popupText,
  formauthorizationEmail,
  formauthorizationPassword,
  formregistrationEmail,
  formregistrationPassword,
  formregistrationName,
  formauthorization,
  formregistration,
  searchResult,
  search,
  searchButton,
  preloader,
  errorsearch,
  popupSuccessful,
  popupRegistration,
} from '../js/constants/constants';
import {
  url,
  apiKey,
  pageSize,
  amountDays,
  buttonSearch,
  inputSearch,
  urlServer,
  routers
} from '../js/constants/constantsapi';
//localStorage.removeItem('token');

let length = 0;
const addingArticles = 3;
let massnews;
const popup = new Popup();
const form = new Form();
const mainapi = new MainApi(urlServer, routers);
const newsapi = new NewsApi({url, apiKey, pageSize, amountDays});
const Automaticlogon = new AutomaticLogon(mainapi);
login.addEventListener('click', loginf );
 function loginf() {
  popup.open()
  }
  try{
     if(localStorage.getItem('token').charAt(0)=="B"){
      login.removeEventListener("click", loginf);
      login.addEventListener('click', loginout);
      const header = new Header({isLoggedIn:false,userName:"Авторизоваться"})

     }
  }
  catch{}

  function loginout() {
    localStorage.removeItem('token');
    login.removeEventListener("click", loginout);
    login.addEventListener('click', loginf );
    const header = new Header({isLoggedIn:false,userName:"Авторизоваться"})
    }
popupRegistrationLink.addEventListener('click', function popupRegistrationf() {
  popup.registration_link()
});
popupLoginLink.addEventListener('click', function popupRegistrationf() {
  popup.open()
});
closePopupAuthorization.addEventListener('click', function popupRegistrationf() {
  popup.close()
});
popupCloseAuthorization.addEventListener('click', function popupRegistrationf() {
  popup.close()
});
formauthorizationEmail.addEventListener('input', function popup_valid(event) {
  form._validateInputElement(event.target)
  form._validateFormAuthorization(formauthorization,formauthorizationEmail,formauthorizationPassword)
})
formauthorizationPassword.addEventListener('input', function popup_valid(event) {
  form._validateInputElement(event.target)
  form._validateFormAuthorization(formauthorization,formauthorizationEmail,formauthorizationPassword)
})
formregistrationEmail.addEventListener('input', function popup_valid(event) {
  form._validateInputElement(event.target)
  form._validateFormRegistration(formregistration,formregistrationEmail,formregistrationPassword,formregistrationName)
})
formregistrationPassword.addEventListener('input', function popup_valid(event) {
  form._validateInputElement(event.target)
  form._validateFormRegistration(formregistration,formregistrationEmail,formregistrationPassword,formregistrationName)
})
formregistrationName.addEventListener('input', function popup_valid(event) {
  form._validateInputElement(event.target)
  form._validateFormRegistration(formregistration,formregistrationEmail,formregistrationPassword,formregistrationName)
})

buttonSearch.addEventListener('click', function buttonSearch_click(event) {
  if(inputSearch.checkValidity()&&inputSearch.value!=""){
    length = 0;
    while (searchResult.firstChild) {
      searchResult.removeChild(searchResult.firstChild);
  }
  event.preventDefault();
    search.setAttribute('style', 'display:none')
    errorsearch.setAttribute('style', 'display:none')
  preloader.setAttribute('style', 'display:block')
  newsapi
  .getNews(inputSearch.value)
  .then(res => {
    if (res.status === 'ok') {
      if(res.articles.length>0){
        preloader.setAttribute('style', 'display:none')
        errorsearch.setAttribute('style', 'display:none')
        search.setAttribute('style', 'display:block')
        addcard(res.articles)
        massnews = res.articles
      }
      else{
        search.setAttribute('style', 'display:none')
        preloader.setAttribute('style', 'display:none')
        errorsearch.setAttribute('style', 'display:block')

      }
    }
  })
  .catch((err) => {

  })
}
})
function addcard(cards){
  try{
    searchButton.setAttribute('style', "display:block")
  for(let i = length; i < length+addingArticles; i++)
  {
    const card = document.createElement('div');
    card.classList.add('card');
    const imageurl = 'background-image: url(' + cards[i].urlToImage + ')';
    const cardimage = document.createElement('div');
    cardimage.classList.add('card-image');
    const cardimageauthorization = document.createElement('div');
    cardimageauthorization.classList.add('card-image__authorization');

    const cardimageauthorizationtext = document.createElement('p');
    cardimageauthorizationtext.classList.add('card-image__authorization-text');
    cardimageauthorizationtext.textContent = "Войдите, чтобы сохранить статьи"

    const cardimagephoto = document.createElement('div');
    cardimagephoto.classList.add('card-image__photo');
    cardimagephoto.setAttribute('style', imageurl)
    const cardimagesave = document.createElement('div');
    cardimagesave.classList.add('card-image__save');
    const cardimagebookmark = document.createElement('div');
    cardimagebookmark.classList.add('card-image__bookmark');
    cardimagesave.appendChild(cardimagebookmark);
    cardimage.appendChild(cardimagephoto);
    card.appendChild(cardimagesave);
    cardimageauthorization.appendChild(cardimageauthorizationtext);
    card.appendChild(cardimageauthorization);
    card.appendChild(cardimage);

    const cardinf = document.createElement('a');
    cardinf.classList.add('card-inf');
    const url = cards[i].url;
    cardinf.setAttribute('href', url);
    const carddate = document.createElement('div');
    carddate.classList.add('card__date');
    const cardtitle = document.createElement('h3');
    cardtitle.classList.add('card__title');
    const cardinformation = document.createElement('p');
    cardinformation.classList.add('card__information');
    const cardsource = document.createElement('h3');
    cardsource.classList.add('card__source');

    carddate.textContent = cards[i].publishedAt;
    cardtitle.textContent = cards[i].title;
    cardinformation.textContent = cards[i].description;
    cardsource.textContent = cards[i].source.name;

    cardinf.appendChild(carddate);
    cardinf.appendChild(cardtitle);
    cardinf.appendChild(cardinformation);
    cardinf.appendChild(cardsource);
    card.appendChild(cardinf);
    cardimagephoto.addEventListener('click', function (event) {
      window.open(url)
    });
    searchResult.appendChild(card);
  cardimagesave.addEventListener('click', function (event) {
    if(login.textContent=="Авторизоваться"){
      const func = () => {
        event.target.parentNode.parentNode.querySelector('.card-image__authorization').setAttribute('style', "display:none")
      };
      setTimeout(func, 4 * 1000);
     event.target.parentNode.parentNode.querySelector('.card-image__authorization').setAttribute('style', "display:flex")
    } else{
      const card = event.target.parentNode.parentNode;
      const keyword = document.querySelector(".header-search__input").value
      const title = card.querySelector(".card__title").textContent
      const text = card.querySelector(".card__information").textContent
      const date = card.querySelector(".card__date").textContent
      const source = card.querySelector(".card__source").textContent
      let link;
      if(card.querySelector(".card-inf").getAttribute('href')==null){
         link ="https://i.imgflip.com/36ukce.jpg"
      }else{
        link=card.querySelector(".card-inf").getAttribute('href')
      }
      let image;
      if(card.querySelector(".card-inf").getAttribute('href').charAt(0)!="h"){

        image ="https://i.imgflip.com/36ukce.jpg"
      }else{

        image=card.querySelector(".card-image__photo").style.backgroundImage.slice(5, -2)
      }
      mainapi.createArticle({keyword, title, text, date, source, link, image}, localStorage.getItem('token'))
      .then((res) => {console.log(res) })
      .catch((err) => {alert(err) });
      cardimagebookmark.setAttribute('style', "background-image: url(./images/Rectangle3.png)")
    }

  });}
  length=length+addingArticles;
}
catch{
   searchButton.setAttribute('style', "display:none")
}

}
searchButton.addEventListener('click', function buttonSearch_click() {
  addcard(massnews)
})

document.querySelectorAll(".popup__button")[0].addEventListener('click', function () {
  event.preventDefault();
  if(form._validateFormAuthorization(formauthorization,formauthorizationEmail,formauthorizationPassword)==true){
    const email = formauthorizationEmail.value;
    const password = formauthorizationPassword.value
      mainapi.signin(email, password)
      .then((res)=>{
        if(res.token){
          login.removeEventListener("click", loginf);
          login.addEventListener('click', loginout);
        localStorage.setItem('token', res.token );
        const usname = getUserData()
        .then(res=>{const header = new Header({isLoggedIn:true,userName:res});

      })
        popup.close()}
        else{
          throw res.message
        }
      })
      .catch(err=>{
        document.querySelectorAll(".popup__all-error")[0].textContent = err})
  }


})
document.querySelectorAll(".popup__button")[1].addEventListener('click', function () {
  event.preventDefault();
  if(form._validateFormAuthorization(formregistration,formregistrationEmail,formregistrationPassword,formregistrationName)==true){
    const email = formregistrationEmail.value;
    const password = formregistrationPassword.value
    const name = formregistrationName.value
      mainapi.signup(email, password, name)
      .then((res)=>{
        if(res.message){
          throw res.message
        }
        else{
          document.querySelectorAll(".popup__all-error")[1].textContent ="";
         popupRegistration.setAttribute('style', "display:none")
      popupSuccessful.setAttribute('style', "display:block")}
    })
      .catch(err=>{ document.querySelectorAll(".popup__all-error")[1].textContent = err})
  }


})
popupText.addEventListener('click', function popupRegistrationf() {
  const email = formregistrationEmail.value;
  const password = formregistrationPassword.value
  mainapi.signin(email, password)
  .then((res)=>{
    if(!res.message){
      login.removeEventListener("click", loginf);
      login.addEventListener('click', loginout);
    localStorage.setItem('token', res.token );
    const usname = getUserData()
    .then(res=>{const header = new Header({isLoggedIn:true,userName:res});})
     popup.close()
    }else{
      throw res.message
    }
  })
.catch(err=>{
        document.querySelectorAll(".popup__all-error")[1].textContent = err})


});
function getUserData(){
 return mainapi.getUserData(localStorage.getItem('token'))
  .then(res => res.data.name)
  .catch(err=>err)
}

