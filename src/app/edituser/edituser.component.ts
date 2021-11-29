import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../shared/api.service';

@Component({
  selector: 'app-edituser',
  templateUrl: './edituser.component.html',
  styleUrls: ['./edituser.component.css']
})
export class EdituserComponent implements OnInit {
  oneUser: any ;
  isLoading: boolean = true

  constructor(private route: ActivatedRoute,private apiServices: ApiService) { }

  ngOnInit(): void {
    // this.route.queryParams.subscribe(pram =>{
    //   this.apiServices.getUserById_API()
    //   .then(result =>{
    //     if(result){
    //       this.oneUser = result
    //       // console.log(result);
    //     }
    //   }).catch(err =>{
    //     console.log(err);
        
    //   })
    // })

    this.apiServices.getCountries_API()
    .then(result =>{
      this.isLoading = false
      this.oneUser = result;
      console.log(result);
      
    }).catch(err =>{
      console.error(err);
      
    })
    
  }

}
