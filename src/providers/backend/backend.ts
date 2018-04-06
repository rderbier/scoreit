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
 
    /*
    return new Promise(resolve => {
 
      this.http.get('http://scorepro.herokuapp.com/api/event/'+eventCode)
        .subscribe(data => {
          this.event = data;
          resolve(this.event);
        });
    });
    */

    return new Promise(resolve => {
       this.event = { title : "test event",
       isOver : false,
       games: [
         {
         date: "2018-04-05T13:00:00.000Z",
         teams : [
          { name: "the king", score:"35", isWinner: true},
          { name: "SF Monkeys", score:"12" }
          ],
   
         isFinal: true,
         },
         
         {
         date: "2018-04-07T13:00:00.000Z",
         teams : [
          { name: "sapporo"},
          { name: "stella"}
          ]
         },
         {
         date: "2018-04-05T13:00:00.000Z",
         teams : [
          { name: "team a", score:"2"},
          { name: "team b", score:"2" }
          ],
   
         isFinal: true,
         },
       ]};

       // set real date objects
       for (let g of this.event.games) {
          g.date = new Date(g.date);
       }
       // sort games by date
       this.event.games.sort(function(a, b) {
    let d1 = a.date;
    let d2 = b.date;
    return d1<d2 ? -1 : d1>d2 ? 1 : 0;
});



       resolve(this.event)
    });
  }

}
