import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
// import { resolve } from 'url';
// import { reject } from 'q';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  form: FormGroup;
  constructor() { }

  ngOnInit() {
    this.form = new FormGroup({
      'name': new FormControl(null, [Validators.required, Validators.maxLength(10)]),
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'password': new FormControl(null, [Validators.required, Validators.minLength(6)]),
      'passwordRepeat': new FormControl(null, [Validators.required, Validators.minLength(6)]),
      'select': new FormControl(null, [Validators.required])
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

  // repeatPassword():Promise<any>{
  //   return new Promise((resolve, reject) => {
  //     const pass = this.form
  //     const passRepeat =  this.form.value.passwordRepeat;
  //     if(pass === passRepeat) {
  //       resolve('test1')
  //       console.log('test1')
  //     } else {
  //       resolve('test2')
  //       console.log('test2')
  //     }
  //   })
  // }






}
