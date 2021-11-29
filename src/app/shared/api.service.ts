import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class ApiService {
  re: any;

  constructor(private Http: HttpClient) { }

  login(data: any):Observable<any> {

    const param = new HttpParams()

    const header = new HttpHeaders({ 
      'Content-Type': 'application/json', 
      'Authorization': 'Angular-Training',
      'MyKey' : 'MyValue'
    });
    var options = {
      headers: header,
      withCredentials: true,
      params: param
    }
    console.log('I am a server'); 
    console.log(data);
    
    return this.Http.post(`http://localhost:3001/v1/auth/login/`,data)

  }


  register_API(data: any):Observable<any> {

    const param = new HttpParams()
    console.log('I am a server'); 
    console.log(data);
    
    return this.Http.post(`http://localhost:3001/v1/auth/register/`,data)

  }

   
  getAllUsers_API(): Promise<any> {
    return new Promise((resolve,reject)=> {
      this.Http.get('http://localhost:3001/v1/user')
      .toPromise()
      .then(result =>{
        if (result) {
          resolve(result)
          this.re = result;
         console.log(result); 
        }
      }).catch(err => {
        reject(err)
      })
    })  
  }


  getCountries_API(): Promise<any> {
    return new Promise((resolve,reject)=> {
      this.Http.get('http://localhost:3001/v1/oper/getcounties')
      .toPromise()
      .then(result =>{
        if (result) {
          resolve(result)
          this.re = result;
         // console.log(result); 
        }
      }).catch(err => {
        reject(err)
      })
    })  
  }


  getCurrencies_API(): Promise<any> {
    return new Promise((resolve,reject)=> {
      this.Http.get('http://localhost:3001/v1/oper/getcurrencies')
      .toPromise()
      .then(result =>{
        if (result) {
          resolve(result)
          this.re = result;
         // console.log(result); 
        }
      }).catch(err => {
        reject(err)
      })
    })  
  }

  getbyId(url: any): Promise<any> {
    return new Promise((resolve,reject)=> {
      this.Http.get(url)
      .toPromise()
      .then(result =>{
       
          resolve(result)
         
         // console.log(result); 
       
      }).catch(err => {
        reject(err)
      })
    })  
  }
  
  getStatus_API(): Promise<any> {
    return new Promise((resolve,reject)=> {
      this.Http.get('http://localhost:3001/v1/oper/status')
      .toPromise()
      .then(result =>{
        if (result) {
          resolve(result)
          this.re = result;
         // console.log(result); 
        }
      }).catch(err => {
        reject(err)
      })
    })  
  }

  postStatus_API(url:any,data:any): Promise<any> {
    return new Promise((resolve,reject)=> {
      this.Http.post(url,data)
      .toPromise()
      .then(result =>{
        if (result) {
          resolve(result)
        }
      }).catch(err => {
        reject(err)
      })
    })  
  }

  
  getUserById_API(id: number): Promise<any> {
    return new Promise((resolve,reject)=> {
      this.Http.get('http://localhost:3001/v1/user/getuserByID/' +id)
      .toPromise()
      .then(result =>{
        if (result) {
          resolve(result)
          console.log(result); 
        }
      }).catch(err => {
        reject(err)
      })
    })   
  }

  addNewUser(): Promise<any> {

    const param = new HttpParams().set('userId', 100).set('branchId', 253);


    const header = new HttpHeaders({ 
      'Content-Type': 'application/json', 
      'Authorization': 'Angular-Training',
      'MyKey' : 'MyValue'
    });
    

    var options = {
      headers: header,
      withCredentials: true,
      params: param
    }

    var body: {
      completed: false
      id: 201
      title: "delectus aut autem"
      userId: 1
    };
    return new Promise<any>((resolve, reject) => {
      this.Http.post('https://jsonplaceholder.typicode.com/todos', body, options)
        .toPromise()
        .then(result => {
          if (result) {
            resolve(result);
          }
        }).catch(err => {
          reject(err)
        });
    });
  }

}