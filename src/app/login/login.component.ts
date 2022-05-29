import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginFom!: FormGroup;
  constructor(private formBuilder: FormBuilder, private _http: HttpClient, private router: Router) { }

  ngOnInit(): void {
    this.loginFom = this.formBuilder.group({
      email:[''],
      password :['']
    })
  }

  login(){
    this._http.get<any>("http://localhost:3000/users").subscribe(res=>{
      const user = res.find((a:any)=>{
        return a.email === this.loginFom.value.email && a.password === this.loginFom.value.password;
      })
      if (user){
        alert("Login Success full");
        this.loginFom.reset();
        this.router.navigate(['registerdUsers']);
      } else{
        alert("Login Falied, Incorrect UserName/Password");
      }
    },err=>{
      alert("Please Try after Some time!");
    })
    
  }
}
