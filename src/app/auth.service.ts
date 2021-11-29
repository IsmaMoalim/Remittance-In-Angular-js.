import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private Http: HttpClient) { }

  // public login(data: any):Observable<any> {

  //   const param = new HttpParams()

  //   // const header = new HttpHeaders({ 
  //   //   'Content-Type': 'application/json', 
  //   //   'Authorization': 'Angular-Training',
  //   //   'MyKey' : 'MyValue'
  //   // });
  //   // var options = {
  //   //   headers: header,
  //   //   withCredentials: true,
  //   //   params: param
  //   // }
  //   console.log('I am a server'); 
  //   console.log(data);
    
  //   return this.Http.post(`http://localhost:3001/v1/user/login/`,data)

  // }


  public login(userInfo: any){
    localStorage.setItem('ACCESS_TOKEN', userInfo);
  }

  public isLoggedIn(){
    return localStorage.getItem('ACCESS_TOKEN') !== null;

  }

  public logout(){
    localStorage.removeItem('ACCESS_TOKEN');
  }
}
