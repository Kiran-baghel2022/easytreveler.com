import { Component } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-vendoritemselection',
  templateUrl: './vendoritemselection.component.html',
  styleUrls: ['./vendoritemselection.component.scss']
})
export class VendoritemselectionComponent {
  constructor(private api: ApiService){ 
      this.api.getDestinationDetails().subscribe((data: any) => {
       // this.venders=data;
          console.log(data);
        });
    }
}
