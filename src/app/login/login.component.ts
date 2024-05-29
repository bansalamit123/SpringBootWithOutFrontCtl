import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpServiceService } from '../http-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  form :any={
    loginId:'',
    password:'',
    message:''
 }
 constructor(private router:Router,private httpService:HttpServiceService){

}

signIn(){
  if(this.form.loginId=='admin'&& this.form.password=='admin'){
    this.router.navigateByUrl('welcome')
  } else{
    this.form.message='Invalid loginId & password'
  }
}
signUpNavigate(){
  this.router.navigateByUrl('signup');

}

login(){
  var self=this;
  this.httpService.post('http://localhost:8080/Auth/login',this.form,function(res:any){
    console.log('response=>',res)
    if(res.success){
      localStorage.setItem('fname', res.result.data.firstName);
      localStorage.setItem('lname', res.result.data.lastName);
      self.router.navigateByUrl('welcome');
    }else{
      self.form.message=res.result.message  
    }
  })

  }
 

}
