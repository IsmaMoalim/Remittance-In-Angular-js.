import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../shared/api.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  singupForm!: FormGroup;
  allCountry: any =[]
  allState: any= []
  allCity: any = []
  state: any;
  isSubmitted: boolean = false

  constructor(private apiServices: ApiService, private route: Router) { }

  ngOnInit(): void {
    this.apiServices.getCountries_API()
    .then(result =>{
      this.allCountry = result;
      console.log(result);
      
    }).catch(err =>{
      console.error(err);
      
    })
    this.initForm()
   
  }

  oncountrySelected(value: any){
    this.state = value
    console.log("this is a value"+this.state+"and the value is "+value);
    
    this.apiServices.getbyId('http://localhost:3001/v1/oper/getstate/'+value)
    .then(result => {
      this.allState = result;
      console.log(result);
    })
  }

  oncountrystate(value: any){
    console.log("this is a value"+this.state+"the value is "+value);
    this.apiServices.getbyId('http://localhost:3001/v1/oper/'+this.state+'/'+value)
    .then(result => {
      this.allCity = result;
      console.log(result);

      
    })
  }

  singup(){
    this.isSubmitted = true
    if(this.singupForm.valid && this.isSubmitted == true){
      this.apiServices.postStatus_API('http://localhost:3001/v1/auth/register',this.singupForm.value)
      .then(result =>{
        console.log(result);
        if(result.status == 200)
        {
          alert(result.message)
        }
        
      })
      // this.apiServices.register_API(this.singupForm.value).subscribe(result =>{
      //   console.log(result.status);
      //   if(result.status == 200){
      //     console.log(result);
      //     alert(result.message)
      //   }
      //   else if (result.status == 401) {
      //     console.log('iam in else'); 
      //     alert(result.message)
      //    // return ;
      //   }
      // }) 
    }
  }


initForm() {
  this.singupForm = new FormGroup({
    customername:  new FormControl ('',[Validators.required]),
    phone: new FormControl ('', [Validators.required]),
    country: new FormControl ('', [Validators.required]),
    state: new FormControl ('', [Validators.required]),
    city: new FormControl ('', [Validators.required])
  })
}



}
