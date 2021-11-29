import { Component, OnInit } from '@angular/core';
import { ApiService } from '../shared/api.service';

@Component({
  selector: 'app-all-currency',
  templateUrl: './all-currency.component.html',
  styleUrls: ['./all-currency.component.css']
})
export class AllCurrencyComponent implements OnInit {
allcurrency: any;
isLoading: boolean= true
  constructor(private apiServices: ApiService) { }

  ngOnInit(): void {
    this.apiServices.getCurrencies_API()
    .then(result =>{
      this.isLoading = false
      this.allcurrency = result;
      console.log(result);
      
    }).catch(err =>{
      console.error(err);
      
    })
    
  }

}
