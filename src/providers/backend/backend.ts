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
       teams : [
        {
    "id": "T1",
    "name": "Houston Rockets"
  },
  {
    "id": "T2",
    "name": "Minesotta Timberwolves"
  },
  {
    "id": "T3",
    "name": "Oklahoma City Thunder"
  },
  {
    "id": "T4",
    "name": "Utah Jazz"
  },
  {
    "id": "T5",
    "name": "Portland Trailblazzers"
  },
  {
    "id": "T6",
    "name": "New Orleans Pelicans"
  },
  {
    "id": "T7",
    "name": "Golden State Warriors"
  },
  {
    "id": "T8",
    "name": "San Antonio Spurs"
  },
  {
    "id": "T9",
    "name": "Toronto Raptors"
  },
  {
    "id": "T10",
    "name": "Washington Wizards"
  },
  {
    "id": "T11",
    "name": "Cleveland Cavaliers"
  },
  {
    "id": "T12",
    "name": "Indiana Pacers"
  },
  {
    "id": "T13",
    "name": "Philadelphia Sixers"
  },
  {
    "id": "T14",
    "name": "Miami Heat"
  },
  {
    "id": "T15",
    "name": "Boston Celics"
  },
  {
    "id": "T16",
    "name": "Milwaukee Bucks"
  },
  {
    "id": "T17",
    "name": "Risus At PC"
  },
  {
    "id": "T18",
    "name": "Vestibulum Ut Inc."
  },
  {
    "id": "T19",
    "name": "Aliquam Corporation"
  },
  {
    "id": "T20",
    "name": "Enim Nisl Elementum LLC"
  },
  {
    "id": "T21",
    "name": "Facilisis Non Ltd"
  },
  {
    "id": "T22",
    "name": "Urna Nullam Inc."
  },
  {
    "id": "T23",
    "name": "Nam Porttitor Scelerisque Foundation"
  },
  {
    "id": "T24",
    "name": "Vel Nisl Institute"
  },
  {
    "id": "T25",
    "name": "Massa Lobortis Ultrices Corporation"
  },
  {
    "id": "T26",
    "name": "Quam Vel Corporation"
  },
  {
    "id": "T27",
    "name": "Molestie Tellus Aenean Ltd"
  },
  {
    "id": "T28",
    "name": "Adipiscing Incorporated"
  },
  {
    "id": "T29",
    "name": "Velit Consulting"
  },
  {
    "id": "T30",
    "name": "Donec Nibh Quisque Company"
  },
  {
    "id": "T31",
    "name": "Id Corp."
  },
  {
    "id": "T32",
    "name": "Urna Et Foundation"
  },
  {
    "id": "T33",
    "name": "Ac Industries"
  },
  {
    "id": "T34",
    "name": "Nec Incorporated"
  },
  {
    "id": "T35",
    "name": "Rutrum Fusce Dolor LLC"
  },
  {
    "id": "T36",
    "name": "Nascetur Ridiculus Associates"
  },
  {
    "id": "T37",
    "name": "Egestas Urna Justo Corp."
  },
  {
    "id": "T38",
    "name": "Feugiat Industries"
  },
  {
    "id": "T39",
    "name": "Vivamus Sit Amet LLP"
  },
  {
    "id": "T40",
    "name": "Cursus Et Magna Associates"
  },
  {
    "id": "T41",
    "name": "Dolor Company"
  },
  {
    "id": "T42",
    "name": "Orci Consulting"
  },
  {
    "id": "T43",
    "name": "Nulla Industries"
  },
  {
    "id": "T44",
    "name": "Primis Ltd"
  },
  {
    "id": "T45",
    "name": "Vel Mauris Integer Company"
  },
  {
    "id": "T46",
    "name": "Suspendisse Sed Dolor Corp."
  },
  {
    "id": "T47",
    "name": "Metus Urna Associates"
  },
  {
    "id": "T48",
    "name": "Pede Praesent Eu Ltd"
  },
  {
    "id": "T49",
    "name": "Enim Curabitur Consulting"
  },
  {
    "id": "T50",
    "name": "Nisi LLC"
  },
  {
    "id": "T51",
    "name": "Mollis Phasellus Libero Corp."
  },
  {
    "id": "T52",
    "name": "Mus Proin Vel Consulting"
  },
  {
    "id": "T53",
    "name": "Dis Parturient Corp."
  },
  {
    "id": "T54",
    "name": "Tempus Lorem LLC"
  },
  {
    "id": "T55",
    "name": "At Corp."
  },
  {
    "id": "T56",
    "name": "Ultricies Ltd"
  },
  {
    "id": "T57",
    "name": "A Mi Fringilla Foundation"
  },
  {
    "id": "T58",
    "name": "Pharetra LLP"
  },
  {
    "id": "T59",
    "name": "Ullamcorper Velit In Industries"
  },
  {
    "id": "T60",
    "name": "Duis LLC"
  },
  {
    "id": "T61",
    "name": "Dolor Elit Corp."
  },
  {
    "id": "T62",
    "name": "Nisl Limited"
  },
  {
    "id": "T63",
    "name": "Nulla In Corp."
  },
  {
    "id": "T64",
    "name": "Donec Tempor Institute"
  },
  {
    "id": "T65",
    "name": "Vel Venenatis PC"
  },
  {
    "id": "T66",
    "name": "Nullam Lobortis Quam Limited"
  },
  {
    "id": "T67",
    "name": "Scelerisque Institute"
  },
  {
    "id": "T68",
    "name": "Facilisis Incorporated"
  },
  {
    "id": "T69",
    "name": "Lorem Lorem Luctus Inc."
  },
  {
    "id": "T70",
    "name": "Mauris Morbi Incorporated"
  },
  {
    "id": "T71",
    "name": "Lorem Eu Metus LLC"
  },
  {
    "id": "T72",
    "name": "Ut Ipsum Associates"
  },
  {
    "id": "T73",
    "name": "Magna Incorporated"
  },
  {
    "id": "T74",
    "name": "Bibendum Consulting"
  },
  {
    "id": "T75",
    "name": "Mi Lacinia Ltd"
  },
  {
    "id": "T76",
    "name": "Laoreet Lectus Quis Foundation"
  },
  {
    "id": "T77",
    "name": "Lorem Sit Amet Company"
  },
  {
    "id": "T78",
    "name": "Laoreet Institute"
  },
  {
    "id": "T79",
    "name": "A Facilisis Corp."
  },
  {
    "id": "T80",
    "name": "In Condimentum Donec Institute"
  },
  {
    "id": "T81",
    "name": "Neque LLP"
  },
  {
    "id": "T82",
    "name": "In Scelerisque Scelerisque LLC"
  },
  {
    "id": "T83",
    "name": "Blandit Corp."
  },
  {
    "id": "T84",
    "name": "Quam Consulting"
  },
  {
    "id": "T85",
    "name": "Nec Tempus Corporation"
  },
  {
    "id": "T86",
    "name": "A Mi Associates"
  },
  {
    "id": "T87",
    "name": "In Aliquet Lobortis Incorporated"
  },
  {
    "id": "T88",
    "name": "Imperdiet Ullamcorper Company"
  },
  {
    "id": "T89",
    "name": "Sem Industries"
  },
  {
    "id": "T90",
    "name": "Porttitor Tellus Non Limited"
  },
  {
    "id": "T91",
    "name": "Vel Faucibus Id Institute"
  },
  {
    "id": "T92",
    "name": "Phasellus Dapibus Quam Industries"
  },
  {
    "id": "T93",
    "name": "Nibh Phasellus Industries"
  },
  {
    "id": "T94",
    "name": "Gravida Nunc Sed Ltd"
  },
  {
    "id": "T95",
    "name": "Magna A Neque Incorporated"
  },
  {
    "id": "T96",
    "name": "Nulla Vulputate Dui Corporation"
  },
  {
    "id": "T97",
    "name": "Non Lacinia At Ltd"
  },
  {
    "id": "T98",
    "name": "Volutpat Associates"
  },
  {
    "id": "T99",
    "name": "Ut Nec Urna LLP"
  },
  {
    "id": "T100",
    "name": "Eget Varius Corporation"
  }

       ],

       groups :[
       {
          id: "A",
          name: "West",
          type: "bracket"
       },
       {
          id: "B",
          name: "Est",
          type: "bracket"
       },
       {
          id: "C",
          name: "Poupoule",
          type: "pool",
          rankData:["pt","tt"],
          ranks:[
              { "rank": 1, "team": "T1", data: { pt: "12", tt:"28" }},
              { "rank": 2, "team": "T3", data: { pt: "10", tt:"20" }},
              { "rank": 3, "team": "T2", data: { pt: "8", tt:"15" }},
              { "rank": 3, "team": "T4", data: { pt: "8", tt:"7" }},

              { "rank": 5, "team": "T7", data: { pt: "1", tt:"5" }},
              { "rank": 5, "team": "T6", data: { pt: "1", tt:"4" }},
              { "rank": 5, "team": "T5", data: { pt: "1", tt:"-1" }},
              { "rank": 8, "team": "T8", data: { pt: "0", tt:"-5" }}

          ]
       }
       ],
       games: [
         {
         date: "2018-04-05T13:00:00.000Z",
         round: 1,
         roundIndex: 1,
         groupId: "A",
         teams : [
          { id: "T1", score:"4", isWinner: true},
          { id: "T2", score:"1" }
          ],

        isFinal: true,
         },
         {
         date: "2018-04-05T13:00:00.000Z",
         round: 1,
         roundIndex: 2,
         groupId: "A",
         teams : [
          { id: "T3", score:"2"},
          { id: "T4", score:"3" , isWinner: true}
          ],
          isFinal: true,
          },

          {
          date: "2018-04-05T13:00:00.000Z",
          round: 1,
          roundIndex: 3,
          groupId: "A",
          teams : [
           { id: "T5", score:"0"},
           { id: "T6", score:"4" , isWinner: true}
           ],

         isFinal: true,
           },
           {
           date: "2018-04-05T13:00:00.000Z",
           round: 1,
           roundIndex: 4,
           groupId: "A",
           teams : [
            { id: "T7", score:"4",isWinner: true},
            { id: "T8", score:"1"  }
            ],

         isFinal: true,
         },

         {
         date: "2018-04-05T13:00:00.000Z",
         round: 2,
         roundIndex: 1,
         groupId: "A",
         teams : [
          { id: "T1", score:"0"},
          { id: "T4", score:"4" , isWinner: true}
          ],

        isFinal: false,
          },

          {
          date: "2018-04-05T13:00:00.000Z",
          round: 2,
          roundIndex: 2,
          groupId: "A",
          teams : [
           { id: "T6", score:"2"},
           { id: "T7", score:"4" , isWinner: true}
           ],

         isFinal: true,
           },

          {
           date: "2018-04-05T13:00:00.000Z",
           round: 3,
           roundIndex: 1,
           groupId: "A",
           location: {name:" Oakland"},
           teams : [
            { id: "T4"},
            { id: "T7"}
            ],

          isFinal: false,
            },
         {
         date: "2018-04-07T13:00:00.000Z",
         round: 1,
         roundIndex: 1,
         groupId: "B",
         teams : [
          { id: "T9", score:"4", isWinner: true},
          { id: "T10", score:"2"}
          ]
         },
         {
         date: "2018-04-06T13:00:00.000Z",
         round: 1,
         roundIndex: 2,
         groupId: "B",
         teams : [
          { id: "T11", score:"4", isWinner: true},
          { id: "T12", score:"1" }
          ],

         isFinal: true,
         },
         {
         date: "2018-04-07T13:00:00.000Z",
         round: 1,
         roundIndex: 3,
         groupId: "B",
         teams : [
          { id: "T13", score:"5", isWinner: true},
          { id: "T14", score:"2" }
          ],

         isFinal: true,
         },

         {
         date: "2018-04-07T13:00:00.000Z",
         round: 1,
         roundIndex: 4,
         groupId: "B",
         teams : [
          { id: "T15", score:"2"},
          { id: "T16", score:"6" , isWinner: true}
          ],

         isFinal: true,
         },


         {
         date: "2018-04-28T13:00:00.000Z",
         round: 2,
         roundIndex: 1,
         location: {name:"chez Raph"},
         groupId: "B",
         teams : [
          { id: "T9"},
          { id: "T11" }
          ],

         isFinal: true,
         },
         {
         date: "2018-04-29T13:00:00.000Z",
         round: 2,
         roundIndex: 2,
         location: {name:"chez Matth"},
         groupId: "B",
         teams : [
          { id: "T13"},
          { id: "T16" }
          ],


         },

         {
         date: "2018-04-30T13:00:00.000Z",
         round: 3,
         roundIndex: 1,
         location: {name:"chez Jules"},
         groupId: "B",
         teams : [
          { id: "T9"},
          { id: "T16" }
          ],


        },
        {
        date: "2018-04-29T13:00:00.000Z",

        location: {name:"terrain 1"},
        groupId: "C",
        teams : [
         { id: "T1", score:"64" , isWinner: true},
         { id: "T2", score:"32" }
         ],
         isFinal: true,


        },
        {
        date: "2018-04-29T13:10:00.000Z",

        location: {name:"terrain 2"},
        groupId: "C",
        teams : [
         { id: "T3", score:"0" },
         { id: "T4" , score:"93" , isWinner: true}
         ],
isFinal: true,

        },
        {
        date: "2018-04-29T13:00:00.000Z",

        location: {name:"terrain 3"},
        groupId: "C",
        teams : [
         { id: "T5", score:"16" },
         { id: "T6", score:"16"  }
         ],
isFinal: true,

        },
        {
        date: "2018-04-29T13:10:00.000Z",

        location: {name:"terrain 4"},
        groupId: "C",
        teams : [
         { id: "T7", score:"36" , isWinner: true},
         { id: "T8", score:"5" }
         ],

        },
        {
        date: "2018-04-29T13:50:00.000Z",

        location: {name:"terrain 3"},
        groupId: "C",
        teams : [
         { id: "T1"},
         { id: "T3" }
         ],


        },
        {
        date: "2018-04-29T14:00:00.000Z",

        location: {name:"terrain 2"},
        groupId: "C",
        teams : [
         { id: "T2"},
         { id: "T4" }
         ],


        },
        {
        date: "2018-04-29T13:00:00.000Z",
        location: {name:"terrain 1"},
        groupId: "C",
        teams : [
         { id: "T5"},
         { id: "T7" }
         ],


        },
        {
        date: "2018-04-30T13:00:00.000Z",
        location: {name:"terrain 3"},
        groupId: "C",
        teams : [
         { id: "T5"},
         { id: "T8" }
         ],


        }

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
