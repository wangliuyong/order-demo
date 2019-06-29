import { Component, OnInit } from '@angular/core';

import { StoreListService } from "../../services/store-list.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit {

  constructor(
    private storeListService: StoreListService
  ) { }

  ngOnInit() {
    this.storeListService.getStore().then((res:any)=>{
      console.log(res.result);
    })
  }

}
