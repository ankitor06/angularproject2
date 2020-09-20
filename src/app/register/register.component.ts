import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import {Customer} from './register';
import {EmailValidator, FormControl,FormGroup, Validators} from '@angular/forms';
import {ReactiveFormsModule} from '@angular/forms'
import {DataService} from '../data.service'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  form:FormGroup
  customer:Customer[]=[]
  register(){
    this.dataservice.saveData(this.form.value).subscribe((res)=>{
      alert("data saved successfully")
    })
  }
  constructor(private dataservice:DataService) { }

  ngOnInit(): void {
    this.form=new FormGroup(
      {
      cust_name:new FormControl(null, Validators.required),
      cust_email:new FormControl(null,[Validators.required,Validators.email]),
      cust_age:new FormControl(""),
      cust_address:new FormControl(""),
      cust_password:new FormControl("")
    })
  }

}
