import { Injectable } from '@angular/core';

import { HttpService } from "./http.service";

@Injectable({
  providedIn: 'root'
})
export class StoreListService {

  constructor(
    private httpService:HttpService
  ) { }

  public getStore(){
    return this.httpService.get('/productlist')
  }
}
