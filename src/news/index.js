import "./style.css";
import Popup from "../js/popup/Popup";
import Form from "../js/form/Form";
import NewsApi from "../js/api/NewsApi"
import MainApi from "../js/api/MainApi"
import Header from "../js/header/header"
import AutomaticLogon from "../js/utils/AutomaticLogon"
import {
  login,
  popup_registration_link,
  popup_login_link,
  close_popup_authorization,
  popup_close_authorization,
  popup_text,
  formauthorization_email,
  formauthorization_password,
  formregistration_email,
  formregistration_password,
  formregistration_name,
  formauthorization,
  formregistration,
  search_result,
  search,
  search_button,
  preloader,
  errorsearch,
  popup_successful,
  popup_registration,
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
popup_registration_link.addEventListener('click', function popup_registrationf() {
  popup.registration_link()
});
popup_login_link.addEventListener('click', function popup_registrationf() {
  popup.open()
});
close_popup_authorization.addEventListener('click', function popup_registrationf() {
  popup.close()
});
popup_close_authorization.addEventListener('click', function popup_registrationf() {
  popup.close()
});
formauthorization_email.addEventListener('input', function popup_valid(event) {
  form._validateInputElement(event.target)
  form._validateFormAuthorization(formauthorization,formauthorization_email,formauthorization_password)
})
formauthorization_password.addEventListener('input', function popup_valid(event) {
  form._validateInputElement(event.target)
  form._validateFormAuthorization(formauthorization,formauthorization_email,formauthorization_password)
})
formregistration_email.addEventListener('input', function popup_valid(event) {
  form._validateInputElement(event.target)
  form._validateFormRegistration(formregistration,formregistration_email,formregistration_password,formregistration_name)
})
formregistration_password.addEventListener('input', function popup_valid(event) {
  form._validateInputElement(event.target)
  form._validateFormRegistration(formregistration,formregistration_email,formregistration_password,formregistration_name)
})
formregistration_name.addEventListener('input', function popup_valid(event) {
  form._validateInputElement(event.target)
  form._validateFormRegistration(formregistration,formregistration_email,formregistration_password,formregistration_name)
})

buttonSearch.addEventListener('click', function buttonSearch_click(event) {
  if(inputSearch.checkValidity()&&inputSearch.value!=""){
    length = 0;
    while (search_result.firstChild) {
      search_result.removeChild(search_result.firstChild);
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
function addcard(cards){console.log(cards)
  for(let i = length; i < length+3; i++)
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
    search_result.appendChild(card);
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
      .catch((err) => {console.log(err) });
      cardimagebookmark.setAttribute('style', "background-image: url(./images/Rectangle3.png)")
    }

  });}
  length=length+3;
}
search_button.addEventListener('click', function buttonSearch_click() {
  addcard(massnews)
})

document.querySelectorAll(".popup__button")[0].addEventListener('click', function () {
  event.preventDefault();
  if(form._validateFormAuthorization(formauthorization,formauthorization_email,formauthorization_password)==true){
    const email = formauthorization_email.value;
    const password = formauthorization_password.value
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
  if(form._validateFormAuthorization(formregistration,formregistration_email,formregistration_password,formregistration_name)==true){
    const email = formregistration_email.value;
    const password = formregistration_password.value
    const name = formregistration_name.value
      mainapi.signup(email, password, name)
      .then((res)=>{
        if(res.message){
          throw res.message
        }
        else{
          document.querySelectorAll(".popup__all-error")[1].textContent ="";
         popup_registration.setAttribute('style', "display:none")
      popup_successful.setAttribute('style', "display:block")}
    })
      .catch(err=>{ document.querySelectorAll(".popup__all-error")[1].textContent = err})
  }


})
popup_text.addEventListener('click', function popup_registrationf() {
  const email = formregistration_email.value;
  const password = formregistration_password.value
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

