import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { privateDecrypt } from 'node:crypto';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
    registerForm = this.fb.group({
    fullName: [ '', [Validators.required, Validators.pattern (/^[a-zA-z]+(?:[a-zA-Z]+)*$/)]],
    email: ['',[Validators.required, Validators.email]],
    password: ['',[Validators.required, Validators.minLength(8)]],
    confirmPassword: ['',[Validators.required]]

})
  }
constructor(private fb:FormBuilder){

}

get fullname(){
  return this.registerForm.controls['fullname'];
}
get email(){
  return this.registerForm.controls['email'];
}
get fullname(){
  return this.registerForm.controls['fullname'];
}