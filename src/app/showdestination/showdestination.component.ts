import { Component } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-showdestination',
  templateUrl: './showdestination.component.html',
  styleUrls: ['./showdestination.component.scss']
})
export class ShowdestinationComponent {
  constructor(private api: ApiService){ 
    this.api.getDestinationDetails().subscribe((data: any) => {
        console.log("Loc id",data.location_id);
        console.log("name: ",data.name);
      });
  }
}
