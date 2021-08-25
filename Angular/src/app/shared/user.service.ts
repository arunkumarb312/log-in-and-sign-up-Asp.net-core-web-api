import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  

  constructor(private fb:FormBuilder,private http:HttpClient) { }
  readonly BaseURI='http://localhost:12423/api';

  formModel= this.fb.group({
    UserName:[' ',Validators.required],
    Email:[' ',Validators.email],
    Name:[' '],
    Passwords: this.fb.group({
      Password:[' ',[Validators.required,Validators.minLength(4)]],
      ConfirmPassword:[' ',Validators.required]
    })


  });
  comparePasswords(fb:FormGroup)
  {
    let confirmPswrdCtrl=fb.get('ConfirmPassword');
    
    if(confirmPswrdCtrl?.errors==null||'passwordMismatch' in confirmPswrdCtrl.errors) {
      if(fb.get('ConfirmPassword')?.value!=confirmPswrdCtrl?.value)
      confirmPswrdCtrl?.setErrors({passwordMismatch:true});
      else
      confirmPswrdCtrl?.setErrors(null);
    }


    }
    register(){
      var body={
        UserName:this.formModel.value.UserName,
        Email:this.formModel.value.Email,
        Name:this.formModel.value.Name,
        Password:this.formModel.value.Passwords.Password

      };
      return this.http.post(this.BaseURI+'/ApplicationUser/Register',body);
    }
    login(formData: any) {
      return this.http.post(this.BaseURI + '/ApplicationUser/Login', formData);
    }
    
  }

