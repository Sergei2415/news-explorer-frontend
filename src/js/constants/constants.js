const login = document.querySelector('.header-location__authorization');
const darkBackground = document.querySelector('.popup');
const popupLogin = document.querySelector('.popup__content');
const popupLoginLink = document.querySelector('.popup__registration-authorization');
const popupRegistration = document.querySelector('.popup__title-registration');
const popupRegistrationLink = document.querySelector('.popup__registration-link');
const closePopupAuthorization = document.querySelector('.popup__close');
const popupCloseAuthorization = document.querySelector('.popup__close-registration');
const popupSuccessful = document.querySelector('.popup__successful');
const popupText = document.querySelector('.popup__text');
const search = document.querySelector('.search');
const searchResult = document.querySelector('.search__result');
const searchButton = document.querySelector('.search__button');
const preloader = document.querySelector('.preloader');
const errorsearch = document.querySelector('.error-search');
const headerlocationSaveNews = document.querySelector('.header-location__savenews');
const cardimageSave = document.querySelector('.card-image__save');
const cardimageBookmark = document.querySelector('.card-image__bookmark');
const formauthorization = document.forms.authorization;
const formregistration = document.forms.registration;
const formauthorizationEmail = formauthorization.elements.email;
const formauthorizationPassword = formauthorization.elements.password;
const formregistrationEmail = formregistration.elements.email;
const formregistrationPassword = formregistration.elements.password;
const formregistrationName = formregistration.elements.name;
export {
  login,
  darkBackground,
  popupLogin,
  popupLoginLink,
  popupRegistration,
  popupRegistrationLink,
  closePopupAuthorization,
  popupCloseAuthorization,
  formauthorization,
  formregistration,
  formauthorizationEmail,
  formauthorizationPassword,
  formregistrationEmail,
  formregistrationPassword,
  formregistrationName,
  popupText,
  popupSuccessful,
  searchResult,
  search,
  searchButton,
  preloader,
  errorsearch,
  headerlocationSaveNews,
  cardimageSave,
  cardimageBookmark
}