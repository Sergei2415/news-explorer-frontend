import Header from "../header/header";

export default class AutomaticLogon {
  constructor(mainapi) {
    this.mainapi = mainapi;

    this.logon()
  }


  logon() {
    this.mainapi.getUserData(localStorage.getItem('token'))
    .then(res => {console.log(res.data.name)
      const header = new Header({isLoggedIn:true,userName:res.data.name});
    })
    .catch((err) => {

    });
  }

  }
