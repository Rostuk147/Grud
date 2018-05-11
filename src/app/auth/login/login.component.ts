import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  hide = true;


  constructor() { }

  ngOnInit() {
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



}
