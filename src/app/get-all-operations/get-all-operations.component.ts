import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../shared/api.service';

@Component({
  selector: 'app-get-all-operations',
  templateUrl: './get-all-operations.component.html',
  styleUrls: ['./get-all-operations.component.css']
})
export class GetAllOperationsComponent implements OnInit {
allcountries: any;
isLoading: boolean = false;
  constructor(private apiServices: ApiService, private route: Router) { }

  ngOnInit(): void {
    // this.apiServices.getCountries_API()
    // .then(result =>{
    //   this.isLoading =false
    //   this.allcountries = result
    //   console.log(result);
      
    // }).catch(err =>{
    //   console.log(err);
      
    // })
  }

  getcountry() {
    this.route.navigateByUrl('/edituser')

  }

  getcurrency(){
    this.route.navigateByUrl('/allCurrency')

  }

  getstatus() {
    this.route.navigateByUrl('/status')
  }
}
