import {
  darkBackground,
  popupLogin,
  popupRegistration,
  formauthorizationEmail,
  formauthorizationPassword,
  formregistrationEmail,
  formregistrationPassword,
  formregistrationName,
  popupSuccessful
} from '../constants/constants';

export default class Popup {

  setContent() {

  }

  clearContent() {
    formauthorizationEmail.value="";
    formauthorizationPassword.value="";
    formregistrationEmail.value="";
    formregistrationPassword.value="";
    formregistrationName.value="";
  }

  open() {
    popupSuccessful.setAttribute("style", "display:none")
    popupRegistration.setAttribute("style", "display:none")
    darkBackground.setAttribute("style", "display:flex")
    popupLogin.setAttribute("style", "display:block")
  }


  close() {
    popupSuccessful.setAttribute("style", "display:none")
    popupRegistration.setAttribute("style", "display:none")
    popupLogin.setAttribute("style", "display:none")
    darkBackground.setAttribute("style", "display:none")
    this.clearContent();
  }
  registration_link() {
    popupLogin.setAttribute("style", "display:none")
    popupRegistration.setAttribute("style", "display:block")
  }

}