import {
  dark_background,
  popup_login,
  popup_registration,
  formauthorization_email,
  formauthorization_password,
  formregistration_email,
  formregistration_password,
  formregistration_name,
  popup_successful
} from '../constants/constants';

export default class Popup {

  setContent() {

  }

  clearContent() {
    formauthorization_email.value="";
    formauthorization_password.value="";
    formregistration_email.value="";
    formregistration_password.value="";
    formregistration_name.value="";
  }

  open() {
    popup_successful.setAttribute("style", "display:none")
    popup_registration.setAttribute("style", "display:none")
    dark_background.setAttribute("style", "display:flex")
    popup_login.setAttribute("style", "display:block")
  }


  close() {
    popup_successful.setAttribute("style", "display:none")
    popup_registration.setAttribute("style", "display:none")
    popup_login.setAttribute("style", "display:none")
    dark_background.setAttribute("style", "display:none")
    this.clearContent();
  }
  registration_link() {
    popup_login.setAttribute("style", "display:none")
    popup_registration.setAttribute("style", "display:block")
  }

}