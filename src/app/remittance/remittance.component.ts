import { Component, OnInit } from '@angular/core';
import { ApiService } from '../shared/api.service';

@Component({
  selector: 'app-remittance',
  templateUrl: './remittance.component.html',
  styleUrls: ['./remittance.component.css']
})
export class RemittanceComponent implements OnInit {
allRemittance: any ;
  constructor(private apiServices: ApiService) { }

  ngOnInit(): void {
    this.apiServices.getbyId('http://localhost:3001/v1/remittance/getRemittance')
    .then(result =>{
      this.allRemittance = result
      console.log(result);
      

    })
  }

}
