import { Component } from '@angular/core';
//import { Item } from '../item.model';
import { Item } from '../models/item';
import { ApiService } from '../services/api.service';


@Component({
  selector: 'app-itemlist',
  templateUrl: './itemlist.component.html',
  styleUrls: ['./itemlist.component.scss']
})
export class ItemlistComponent {

  items!: Item[];

  constructor(private api: ApiService){ 
    this.api.getItems().subscribe((data: any) => {
      this.items=data;
        console.log(this.items);
      });
  }
}
