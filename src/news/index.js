import "./style.css";
const login = document.querySelector('.header-location__authorization');
const dark_background = document.querySelector('.popup');
const popup_login = document.querySelector('.popup__content');
const popup_login_link = document.querySelector('.popup__registration-authorization');
const popup_registration = document.querySelector('.popup__title-registration');
const popup_registration_link = document.querySelector('.popup__registration-link');
const close_popup_authorization = document.querySelector('.popup__close');
const popup_close_authorization = document.querySelector('.popup__close-registration');
const formauthorization = document.forms.authorization;
const formregistration = document.forms.registration;
const formauthorization_email = formauthorization.elements.email;
const formauthorization_password = formauthorization.elements.password;
const formregistration_email = formregistration.elements.email; 
const formregistration_password = formregistration.elements.password;
const formregistration_name = formregistration.elements.name;
login.addEventListener('click', function loginf(event) {
dark_background.setAttribute("style", "display:flex")
popup_login.setAttribute("style", "display:block")
});
popup_registration_link.addEventListener('click', function popup_registrationf(event) {
  popup_login.setAttribute("style", "display:none")
  popup_registration.setAttribute("style", "display:block")
});
popup_login_link.addEventListener('click', function popup_registrationf(event) {
  popup_registration.setAttribute("style", "display:none")
  popup_login.setAttribute("style", "display:block")
});
close_popup_authorization.addEventListener('click', function popup_registrationf(event) {
  popup_registration.setAttribute("style", "display:none")
  popup_login.setAttribute("style", "display:none")
  dark_background.setAttribute("style", "display:none")
  formauthorization_email.value="";
  formauthorization_password.value="";
  formregistration_email.value="";
  formregistration_password.value="";
  formregistration_name.value="";
});
popup_close_authorization.addEventListener('click', function popup_registrationf(event) {
  popup_registration.setAttribute("style", "display:none")
  popup_login.setAttribute("style", "display:none")
  dark_background.setAttribute("style", "display:none")
});
formauthorization_email.addEventListener('input', ()=> {  if(/^([A-Za-z0-9_-]\.*){1,100}@[a-z]{2,10}\.[a-z]{2,3}$/i.test(formauthorization_email.value)==false) {
  document.querySelector('.popup__input-authorization__email').textContent="Невалидный email!"
} else{
  document.querySelector('.popup__input-authorization__email').textContent=""
};});
formauthorization_password.addEventListener('input', ()=> {  if(formauthorization_password.value.length<=8) {
  document.querySelector('.popup__input-authorization__password').textContent="Пароль должен быть больше 8 символов!"
} else{
  document.querySelector('.popup__input-authorization__password').textContent=""
};});
formregistration_email.addEventListener('input', ()=> {  if(/^([A-Za-z0-9_-]\.*){1,100}@[a-z]{2,10}\.[a-z]{2,3}$/i.test(formregistration_email.value)==false) {
  document.querySelector('.popup__input-registration__email').textContent="Невалидный email!"
} else{
  document.querySelector('.popup__input-registration__email').textContent=""
};});
formregistration_password.addEventListener('input', ()=> {  if(formregistration_password.value.length<=8) {
  document.querySelector('.popup__input-registration__password').textContent="Пароль должен быть больше 8 символов!"
} else{
  document.querySelector('.popup__input-registration__password').textContent=""
};});
formregistration_name.addEventListener('input', ()=> {  if(/^[A-ZА-Я]{1,1}[A-Za-zА-Яа-я0-9_-]{4,}$/.test(formregistration_name.value)==false) {
  document.querySelector('.popup__input-registration__name').textContent="Имя должно быть с заглавной буквы и иметь более 4 символов!"
} else{
  document.querySelector('.popup__input-registration__name').textContent=""
};});
const searchinput = document.querySelector('.header-search__input');
const searchbutton = document.querySelector('.header-search__button');
searchinput.addEventListener('input', ()=> {  if(searchinput.value.length<1) {console.log(1);
  searchbutton.setAttribute("disabled", "true");
} else{console.log(2);
  searchbutton.setAttribute("disabled", "false");
};});