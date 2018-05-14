import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { User } from '../../models/user.model';
import { PostService } from '../../service/post.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  form: FormGroup;
  password: ''
  passwordRepeat: ''
  constructor(
    private service: PostService,
    private router: Router
  ) { }

  ngOnInit() {
    this.form = new FormGroup({
      'name': new FormControl(null, [Validators.required, Validators.maxLength(10)]),
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'password': new FormControl(null, [Validators.required, Validators.minLength(6)]),
      'select': new FormControl(null, [Validators.required])
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
  
  getErrorMessageSelect() {
    return this.form.get('select')['errors']['required'] ? 'select Required' :
        '';
  }

  getErrorMessagePasswordRepeat(){
    return this.form.get('passwordRepeat')['errors']['required'] ? 'Password Required' :
        this.form.get('passwordRepeat')['errors']['minlength'] ? `Password must be more then ${this.form.get('passwordRepeat')['errors']['minlength']['requiredLength']} symbol.  Now we Have ${this.form.get('passwordRepeat')['errors']['minlength']['actualLength']} symbol` :
        '';
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
