import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private data = new BehaviorSubject({'endpoint_url': 'https://creasouk-builder.firebaseio.com'});
  // currentMessage = this.endpoint_url.asObservable();

  constructor() { }

  // Get data
  get_data(): Observable <any>{
    return this.data ;
  }

 // Set data
 set_data(data_param: any): void {
  this.data.next(data_param);
}

}
