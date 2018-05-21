import { Component, OnInit, Renderer } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { User } from '../../models/user.model';
import { PostService } from '../../service/post.service';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  password;
  form: FormGroup;
  value: any;
  constructor(
    private service: PostService,
    private router: Router,
    private title: Title
  ) { 
    title.setTitle('Registration');
  }

  ngOnInit() {
    this.form = new FormGroup({
      'name': new FormControl(null, [Validators.required, Validators.maxLength(10)]),
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'password': new FormControl(null, [Validators.required, Validators.minLength(6)]),
      'repeatPassword': new FormControl(null, [Validators.required, this.passwordConfirmValidator.bind(this)]),
      'select': new FormControl(null, [Validators.required]),
      'checkbox': new FormControl(null, [Validators.requiredTrue])
    })
  }

  getErrorMessageName() {
    return this.form.get('name')['errors']['required'] ? 'You must enter a value' :
    this.form.get('name')['errors']['maxlength'] ? `Your Name more then ${this.form.get('name')['errors']['maxlength']['requiredLength']} symbol.` :
    '';
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

  getErrorMessagePasswordConfirm() {
    return this.form.get('repeatPassword')['errors']['required'] ? 'Password Required' :
        this.form.get('repeatPassword')['errors']['passwordConfirm'] ? 'Password does not match the confirm password' :
        '';
  }
  
  getErrorMessageSelect() {
    return this.form.get('select')['errors']['required'] ? 'select Required' :
        '';
  }


  passwordConfirmValidator(control: FormControl){
    let password = this.password;
    if(control.value === password){
      console.log(' confirm')
      return null;
    } 
      console.log('not confirm')
      return {"passwordConfirm": true};
  }


  emailValidator(control: FormControl): Promise<any>{
    return new Promise((resolve, reject) => {
      this.service.getUserByEmail(control.value)
      .subscribe((user: User) =>{
        if(user){
          resolve({emailrepeat: true})
          console.log(user)
        } else{
          resolve(null)
        }
      })
    })
  }


  onSubmit() {
    const {name, email, password, select} = this.form.value;
    const user = new User(name, email, password, select);
    this.service.createNewUser(user)
    .subscribe((user: User) => {
      this.router.navigate(['/login'], {
        queryParams: {
          nowCanLogin: true
        }
      });
    });
  }


}
