export class AuthService {

    isLoggedIn = false;

    login() {
        this.isLoggedIn = true;
    }

    logOut(){
        this.isLoggedIn = false;
    }

}