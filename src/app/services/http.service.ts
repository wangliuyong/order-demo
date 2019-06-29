import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

import { environment } from ".././../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(
    private http:HttpClient
  ) { }

  public get(path:string,parma?:any){
    let url=environment.baseUrl+path;

    return new Promise((resolve,reject)=>{
      this.http.get(url).subscribe((res:any)=>{
        resolve(res) 
      })
    })
    
  }
}
