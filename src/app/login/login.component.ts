import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  contactForm:FormGroup;
  constructor(private rf:FormBuilder) { 

  this.contactForm = rf.group({
    name :['',[Validators.required,Validators.minLength(4)]],
    email : ['',[Validators.required,Validators.email]],
    password : ['',[Validators.required,]],
  });
  }
  formsubmit(val:any){
   var data = val;
   console.log(data.name.value);
   console.log(data.email);
  }

  

  ngOnInit(): void {
  }

}


