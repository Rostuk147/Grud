import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { User } from '../../shared/models/user.model';
import { AuthService } from '../auth.service';
import { Title } from '@angular/platform-browser';
import {PostService} from "../../shared/service/post.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  canLogin = false;
  signIn = false;

  constructor(
    private service: PostService,
    private router: Router,
    private route: ActivatedRoute,
    private auth: AuthService,
    private title: Title
  ) {
    title.setTitle('Login');
  }

  ngOnInit() {
    this.route.queryParams
    .subscribe((params: Params) => {
        if(params['nowCanLogin']) {
            this.canLogin = true;
            window.setTimeout(() =>{
              this.canLogin = false
            }, 3000)
        }
    })

    this.form = new FormGroup({
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'password': new FormControl(null, [Validators.required, Validators.minLength(6)])
    })
  }

  getErrorMessageEmail() {
    return this.form.get('email')['errors']['required'] ? 'You must enter a value' :
        this.form.get('email')['errors']['email'] ? 'Not a valid email' :
            '';
  }

  getErrorMessagePassword() {
    return this.form.get('password')['errors']['required'] ? 'Password Required' :
        this.form.get('password')['errors']['minlength'] ? `Password must be more then ${this.form.get('password')['errors']['minlength']['requiredLength']} symbol.  Now we Have ${this.form.get('password')['errors']['minlength']['actualLength']} symbol` :
        '';
  }

  onSubmit(){
    const formValue = this.form.value;
    this.service.getUserByEmail(formValue.email)
    .subscribe((user: User) =>{
      if(user){
        if(formValue.password === user.password){
          const userName = user.name;
          window.localStorage.setItem('user', JSON.stringify(userName));
          this.auth.login();
          this.router.navigate(['/system'])
        } else{
          this.signIn = true;
        }
      } else {
        this.signIn = true;
      }
      window.setTimeout(() =>{
        this.signIn = false
      }, 3000)
    })
  }
}
