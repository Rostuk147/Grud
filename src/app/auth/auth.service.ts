export class AuthService {

    isLoggedIn = false;


    isAuth() {
        return this.isLoggedIn;
    }


    login() {
        this.isLoggedIn = true;
    }

    logOut(){
        this.isLoggedIn = false;
    }


}