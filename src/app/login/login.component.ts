import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl, FormControlName, Validators, FormControlDirective} from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})


export class LoginComponent implements OnInit {

  loginform: FormGroup;

  // public get loginForm(): FormGroup {
  //   return this.loginform;
  // }
  // public set loginForm(value: FormGroup) {
  //   this.loginform = value;
  // }

  login(){
    console.log(this.loginform.value)
  }
  constructor() { }

  ngOnInit(): void {
    this.loginform=new FormGroup(
      {
        uname:new FormControl(""),
        pass:new FormControl("")
      }
    )
  }

}
