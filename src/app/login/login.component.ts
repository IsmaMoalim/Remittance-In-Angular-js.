import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators, } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../user';
import { AuthService } from '../auth.service';
import { ApiService } from '../shared/api.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  isSubmitted  =  false;
  constructor(private authService: AuthService, private router: Router, private formBuilder: FormBuilder, private apiServices: ApiService) { }

  ngOnInit(): void {
    this.initForm();
    this.loginForm  =  this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
  });
  } 
  get FormControl() { return this.loginForm.controls; }

  login(){
    console.log(this.loginForm.value);
    this.isSubmitted = true;
    if(this.loginForm.invalid){
      return;
    }
    this.apiServices.login(this.loginForm.value);
    this.router.navigateByUrl('/admin');
  }

  initForm() {
 
    this.loginForm = new FormGroup({
      email: new FormControl('',[Validators.required]),
      password:  new FormControl('',[Validators.required])
    })
  }

  loginn(){
    this.isSubmitted = true
    if(this.loginForm.valid){
      this.isSubmitted = true;
      this.apiServices.login(this.loginForm.value).subscribe(result =>{
        console.log(result.status);
      
        if(result.status == 200){
          this.isSubmitted = true;
          this.authService.login(result.data.accesstoken)
          console.log(result);
           alert(result.message)
          // this.router.navigateByUrl('/')
           window.location.href ='/'
          
        }
        else if (result.status == 401) {
          console.log('iam in else');
          
          alert(result.message)
         // return ;
        }
      }) 
    }
  }
}



