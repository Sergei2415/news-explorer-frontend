import {
  login,
  headerlocation_savenews
} from '../constants/constants';
export default class Header {
  constructor(props){
  this.isLoggedIn=props.isLoggedIn
  this.userName=props.userName
  this.render()
  }

  render() {
    if(this.isLoggedIn==true){
      headerlocation_savenews.setAttribute('style', "display:block")

      login.textContent = this.userName;

    } else{
      headerlocation_savenews.setAttribute('style', "display:none")
      login.textContent =  "Авторизоваться"
    }
  }




}