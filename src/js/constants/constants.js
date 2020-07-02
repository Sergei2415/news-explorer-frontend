const login = document.querySelector('.header-location__authorization');
const dark_background = document.querySelector('.popup');
const popup_login = document.querySelector('.popup__content');
const popup_login_link = document.querySelector('.popup__registration-authorization');
const popup_registration = document.querySelector('.popup__title-registration');
const popup_registration_link = document.querySelector('.popup__registration-link');
const close_popup_authorization = document.querySelector('.popup__close');
const popup_close_authorization = document.querySelector('.popup__close-registration');
const popup_successful = document.querySelector('.popup__successful');
const popup_text = document.querySelector('.popup__text');
const search = document.querySelector('.search');
const search_result = document.querySelector('.search__result');
const search_button = document.querySelector('.search__button');
const preloader = document.querySelector('.preloader');
const errorsearch = document.querySelector('.error-search');
const headerlocation_savenews = document.querySelector('.header-location__savenews');
const cardimage_save = document.querySelector('.card-image__save');
const cardimage_bookmark = document.querySelector('.card-image__bookmark');
const formauthorization = document.forms.authorization;
const formregistration = document.forms.registration;
const formauthorization_email = formauthorization.elements.email;
const formauthorization_password = formauthorization.elements.password;
const formregistration_email = formregistration.elements.email;
const formregistration_password = formregistration.elements.password;
const formregistration_name = formregistration.elements.name;
export {
  login,
  dark_background,
  popup_login,
  popup_login_link,
  popup_registration,
  popup_registration_link,
  close_popup_authorization,
  popup_close_authorization,
  formauthorization,
  formregistration,
  formauthorization_email,
  formauthorization_password,
  formregistration_email,
  formregistration_password,
  formregistration_name,
  popup_text,
  popup_successful,
  search_result,
  search,
  search_button,
  preloader,
  errorsearch,
  headerlocation_savenews,
  cardimage_save,
  cardimage_bookmark
}