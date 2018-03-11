import { HttpClient  } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

/*
  Generated class for the BackendProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class BackendProvider {
  event: any;

  constructor(public http: HttpClient) {
    console.log('BackendProvider Provider');
    this.event = null;

  }
  
  getCurrentEvent() {
    return this.event;

  }
  getEvent(eventCode){
 
    if (this.event) { // local cache
      return Promise.resolve(this.event);
    }
 
    return new Promise(resolve => {
 
      this.http.get('http://scorepro.herokuapp.com/api/event/'+eventCode)
        .subscribe(data => {
          this.event = data;
          resolve(this.event);
        });
    });
 
  }

}
