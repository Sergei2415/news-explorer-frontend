

export default class Form {
  constructor() {



  }


  setServerError() {

  }

  _validateInputElement(element) {
    if (!element.value) {
    } else if (!element.checkValidity()) {
      console.log(element.type)
      switch (element.type) {
        case 'text':
          element.nextElementSibling.textContent="Имя должно быть с заглавной буквы и оно должно быть не менее 3 символов!";
          break;
        case 'email':
          element.nextElementSibling.textContent="Невалидный email!";
          break;
        case 'password':
          element.nextElementSibling.textContent="Пароль должен быть больше 7 символов!";
          break;
      }
    } else {


      switch (element.type) {
        case 'text':
          element.nextElementSibling.textContent="";
          break;
        case 'email':
          element.nextElementSibling.textContent="";
          break;
        case 'password':
          element.nextElementSibling.textContent="";
          break;
      }
      return true;
    }
  }
  _validateFormAuthorization(form, email, password) {
    if(email.checkValidity()&&password.checkValidity()&&password.value!=""){
      form.getElementsByTagName("button").item(0).classList.add("button_active")
      return true
    }else{
      form.getElementsByTagName("button").item(0).classList.remove("button_active")
      return false
    }
  }
  _validateFormRegistration(form, email, password, name) {
    if(email.checkValidity()&&password.checkValidity()&&name.checkValidity()&&password.value!=""&&name.value!=""){
      form.getElementsByTagName("button").item(0).classList.add("button_active")
      return true
    }else{
      form.getElementsByTagName("button").item(0).classList.remove("button_active")
      return false
    }
  }
}