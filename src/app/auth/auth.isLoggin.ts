export class AuthIsLoggin {

    isLoggedIn = false;

    login() {
        this.isLoggedIn = true;
    }

    logOut(){
        this.isLoggedIn = false;
        window.localStorage.clear();
    }

}
