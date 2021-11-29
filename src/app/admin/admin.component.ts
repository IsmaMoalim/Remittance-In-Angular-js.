import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../shared/api.service';
declare var $:any
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
Sender:  any = []
Reciever:  any = []
rate:number = 1;
res:number = 1;
quantity = 4
currencyCode:any
inputValue: string = "ex";
charge:number = 1 
payment: any =[]
status: any= []
isSubmitted: boolean = false

 sendForm = new FormGroup({
      send: new FormControl('',[Validators.required]),
      recieve: new FormControl('',[Validators.required]),
      amount: new FormControl('',[Validators.required]),
      payment: new FormControl('',[Validators.required]),
      status: new FormControl('',[Validators.required]),
      convertamount: new FormControl('',[Validators.required]), 
      charges: new FormControl('',[Validators.required])
    })
  constructor(private apiService: ApiService, private route: Router,private fb:FormBuilder) { }


  ngOnInit(): void {

    this.apiService.getbyId('http://localhost:3001/v1/remittance/getCustomers')
    .then(result => {
      this.Sender = result;
    }) 
    this.getpayment() 
    this.getstatus()
  }

  get FormControl() { return this.sendForm.controls; }

  getreciever(id:any){
    console.log(id);
    this.apiService.getbyId('http://localhost:3001/v1/remittance/getCustomer/'+id+'/no')
    .then(result => {
      this.Reciever = result    
    })
  }

  getinfo(id:any){
    this.apiService.getbyId('http://localhost:3001/v1/remittance/getCustomer/'+id+'/equal')
    .then(result => {
      this.rate = result.data[0].rates; 
      this.currencyCode = result.data[0].currency_code    
      console.log(this.currencyCode);
      
    })
  }

  onKey(event:any) { // without type info
   const val = event.target.value;
   this.res = val*this.rate;
  $("#convertamount").val(this.res)
  $("#c_code").text(this.currencyCode)
  this.charge = val*0.05;
  $("#charge").text('fees: $'+this.charge)

  
   
  }

  getpayment() {
    this.apiService.getbyId('http://localhost:3001/v1/oper/getpayment')
    .then(result => {
      this.payment = result;
      console.log(result);
      
    })  
  }
 
  getstatus() {
    this.apiService.getbyId('http://localhost:3001/v1/oper/status')
    .then(result => {
      this.status = result;
      console.log(result);
      
    })  
  }

  sendmoney(){
    this.isSubmitted = true
    if(this.sendForm.valid && this.isSubmitted == true){
      console.log(this.sendForm.value);
    this.apiService.postStatus_API('http://localhost:3001/v1/remittance/createRemittance',this.sendForm.value)
    .then(result => {
      // this.route.navigateByUrl('/')
      console.log(result);    
      
    })
    }
    
    
  }
  
}
