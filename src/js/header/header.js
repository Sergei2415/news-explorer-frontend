import {
  login,
  headerlocationSaveNews
} from '../constants/constants';
export default class Header {
  constructor(props){
  this.isLoggedIn=props.isLoggedIn
  this.userName=props.userName
  this.render()
  }

  render() {
    if(this.isLoggedIn==true){
      headerlocationSaveNews.setAttribute('style', "display:block")

      login.textContent = this.userName;

    } else{
      headerlocationSaveNews.setAttribute('style', "display:none")
      login.textContent =  "Авторизоваться"
    }
  }




}