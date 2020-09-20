import { Component, OnInit } from '@angular/core';
import { FormGroup ,FormControl} from '@angular/forms';
import { from } from 'rxjs';
import {DataService} from '../data.service'

@Component({
  selector: 'app-redmi',
  templateUrl: './redmi.component.html',
  styleUrls: ['./redmi.component.css']
})
export class RedmiComponent implements OnInit {
form:FormGroup;
  // notification: any;
  constructor() { }
  // register()
  // {
  //   //console.warn(this.form.value);
  //   this.dataservice.saveData(this.form.value).subscribe((res)=>{
  //     this.notification.showSuccess("Data saved successfully ","Success");
  //     })
    
  
  ngOnInit(): void {
 
  //  this.form = new FormGroup({
  //   brand_name:new FormControl(""),  // student_name,etc is the name of HTML control
  //   model_name:new FormControl(""),
  //   price:new FormControl(""),
  //   front_cam:new FormControl(""),
  //   back_cam:new FormControl(""),
  //   internal_storage:new FormControl(""),
  //   ram:new FormControl(""),
  //   })
}
}
