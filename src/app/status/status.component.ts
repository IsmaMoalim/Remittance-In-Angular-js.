import { Component, OnInit } from '@angular/core';
import { ApiService } from '../shared/api.service';

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.css']
})
export class StatusComponent implements OnInit {
  isLoading: boolean = true
  allStatus:any;

  constructor(private apiServices: ApiService) { }

  ngOnInit(): void {
    this.apiServices.getStatus_API()
    .then(result =>{
      this.isLoading = false
      this.allStatus = result;
      console.log(result);
      
    }).catch(err =>{
      console.error(err);
      
    })
  }

}
