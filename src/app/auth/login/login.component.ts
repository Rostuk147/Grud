import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { PostService } from '../../service/post.service';
import { User } from '../../models/user.model';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  hide = true;
  canLogin = false;

  constructor(
    private service: PostService,
    private router: Router,
    private route: ActivatedRoute,
    private auth: AuthService
  ) { }

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
    const email = this.form.value.email;
    const password = this.form.value.password;
    this.service.getUserByEmail(email)
    .subscribe((user: User) =>{
      let arr = []
      for(let key in user){
       arr.push(user[key])
      }
      arr.forEach(element => {
        if( element.email === email ){
          if(element.password === password){
            this.auth.login();
            this.router.navigate(['/system'])
          } else{
            alert('Email or Password not correct')
          }
        }
      });
    })
  }
}
