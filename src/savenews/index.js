import "./style.css";
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
import{
  searchResult,
  savedarticlesTitle,
  savedarticlesKeyword,
  headerloginUser
} from '../js/constants/savenewsconstants';
import MainApi from "../js/api/MainApi"
headerloginUser.addEventListener('click', function popupRegistrationf() {
  localStorage.removeItem('token');
  window.location.href = '../index.html';
});

let length = 0;
const mainapi = new MainApi(urlServer, routers);
let mass;

mainapi.getUserData(localStorage.getItem('token'))
.then(res => {headerloginUser.textContent = res.data.name})
.catch((err) => {console.log(err)
});



 mainapi.getArticles(localStorage.getItem('token'))
.then(res => {titlesavearticles(res.data);addcardnews(res.data);})
.catch((err) => {console.log(err)
});

function addcardnews(cards){
  cards.forEach(element => {
    const card = document.createElement('div');
    card.classList.add('card');
    const imageurl = 'background-image: url(' + element.image + ')';
    card.id="id"+element._id;
    const cardimage = document.createElement('div');
    cardimage.classList.add('card-image');
    const cardimageauthorization = document.createElement('div');
    cardimageauthorization.classList.add('card-image__authorization');

    const cardimageauthorizationtext = document.createElement('p');
    cardimageauthorizationtext.classList.add('card-image__keyword');
    cardimageauthorizationtext.textContent = element.keyword

    const cardimagephoto = document.createElement('div');
    cardimagephoto.classList.add('card-image__photo');
    cardimagephoto.setAttribute('style', imageurl)
    const cardimagesave = document.createElement('div');
    cardimagesave.classList.add('card-image__save');
    const cardimagebookmark = document.createElement('div');
    cardimagebookmark.classList.add('card-image__delete');
    cardimagesave.appendChild(cardimagebookmark);
    cardimage.appendChild(cardimagephoto);
    card.appendChild(cardimagesave);
    cardimage.appendChild(cardimageauthorizationtext);
    card.appendChild(cardimageauthorization);
    card.appendChild(cardimage);

    const cardinf = document.createElement('a');
    cardinf.classList.add('card-inf');
    const url = element.link;
    cardinf.setAttribute('href', url);
    const carddate = document.createElement('div');
    carddate.classList.add('card__date');
    const cardtitle = document.createElement('h3');
    cardtitle.classList.add('card__title');
    const cardinformation = document.createElement('p');
    cardinformation.classList.add('card__information');
    const cardsource = document.createElement('h3');
    cardsource.classList.add('card__source');

    carddate.textContent = element.date;
    cardtitle.textContent = element.title;
    cardinformation.textContent = element.text;
    cardsource.textContent = element.source;

    cardinf.appendChild(carddate);
    cardinf.appendChild(cardtitle);
    cardinf.appendChild(cardinformation);
    cardinf.appendChild(cardsource);
    card.appendChild(cardinf);
    cardimagephoto.addEventListener('click', function () {
      window.open(url)
    });
    searchResult.appendChild(card);
  cardimagesave.addEventListener('click', function (event) {

     mainapi.removeArticle(element._id,localStorage.getItem('token'))
     .then(res => {
           searchResult.removeChild(event.target.parentNode.parentNode);
    })
     .catch((err) => {
      alert(err)
     });
  });  });

}
function titlesavearticles(element){
  savedarticlesTitle.textContent = "Грета, у вас " + element.length + " сохраненных статей"
  if(keyword(element).max1!=undefined&&keyword(element).max2!=undefined){
    if(keyword(element).length!=0)
     savedarticlesKeyword.textContent = "По ключевым словам: " + keyword(element).max1 + ", " + keyword(element).max2 + " и ещё " + keyword(element).length + " другим"
     else
     savedarticlesKeyword.textContent = "По ключевым словам: " + keyword(element).max1 + ", " + keyword(element).max2
  }
  if(keyword(element).length==undefined&&keyword(element).max1!=undefined&&keyword(element).max2==undefined)
     savedarticlesKeyword.textContent = "По ключевому слову: " + keyword(element).max1
  if(keyword(element).length==undefined&&keyword(element).max1==undefined&&keyword(element).max2==undefined)
   { savedarticlesKeyword.textContent = "Сохраненных статей нет!"
     savedarticlesTitle.textContent = "Грета, у вас нет сохраненных статей"}
}
function keyword(massNews){
  try{
  let t = 0;
  let mass = [];
  massNews.forEach(el => {
    for(let i = 0; i < mass.length; i++){
      if(mass[i]==el.keyword){
        t=1;
      }
    }
    if(t!=1){
      mass.push(el.keyword)
    }
    t=0;
  })
  let max = [];

  if(mass.length>1){
    for(let i = 0; i < mass.length; i++){
      max[i]=0;
      for(let g = 0; g < massNews.length; g++){
        if(mass[i]==massNews[g].keyword){
          max[i]+=1;
        }
      }
    }
  }else if(mass.length==1){
    return {max1:mass[0],max2:undefined}
  }
  else{
    return {max1:undefined,max2:undefined}
  }
  let maxqwe = -1000;
  let maxindex1;
  let maxindex2;
  for(let i = 0; i < max.length; i++){
    if(max[i]>maxqwe){
      maxqwe= max[i];
      maxindex1=i;
    }
  }
  max[maxindex1]=-999;
  maxqwe = -1000;
  for(let i = 0; i < max.length; i++){
    if(max[i]>maxqwe){
      maxqwe= max[i];
      maxindex2=i;
    }
  }
  return {max1:mass[maxindex1],max2:mass[maxindex2], length:mass.length-2}
}
catch{}
}