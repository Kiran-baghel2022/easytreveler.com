import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) {

  }


  private itemsUrl = 'http://localhost:8082/items';
  private vendersUrl = 'http://localhost:8082/venders';
  private showItemFormUrl = 'http://localhost:8082/itemsdetails';
  private generateTokenUrl = 'http://localhost:8082/authenticate';
  private detinationUrl = 'https://travel-advisor.p.rapidapi.com/attractions/get-details?location_id=297628&currency=USD&lang=en_US';

  
  getDestinationDetails(){
    //let auth_token = localStorage.getItem("token");
    const headers = new HttpHeaders({'Content-Type': 'application/json'
    ,'X-RapidAPI-Key': '74d95903cdmshc697d66a17dbe06p141010jsne6d0dd45d097',
		'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'});
     const requestOptions = { headers: headers }
     console.log('checking headers : ',requestOptions.headers.get('X-RapidAPI-Key'));
    return this.http.get(this.detinationUrl);
  }

  public generateToken(request: any) {
    this.http.post(this.generateTokenUrl, request, { responseType: 'text' as 'json' });
  }

  getItems() {
    
    return this.http.get(this.itemsUrl);
  }
  getVenders() { 
    // let auth_token = localStorage.getItem("token");
    // const headers = new HttpHeaders({'Content-Type': 'application/json','Authorization': `Bearer ${auth_token}`});
    //  const requestOptions = { headers: headers }
    //  console.log('checking headers : ',requestOptions.headers.get('Authorization'));
      return this.http.get(this.vendersUrl);
    }
    
  showAddItemForm(){
      return this.http.get(this.showItemFormUrl);
    }
}
