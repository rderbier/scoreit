import { Component, ViewChild } from '@angular/core';
import { Content } from 'ionic-angular';
import {  NavController, NavParams , ViewController} from 'ionic-angular';
import { BackendProvider } from '../../providers/backend/backend';
import { TabsPage } from '../tabs/tabs';
import { App } from 'ionic-angular';

/**
 * Generated class for the AddEventPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-event',
  templateUrl: 'event.html',
})
export class EventPage {
  @ViewChild(Content) content: Content;
  title: string;
  show: string;
  startDate: Date;
  event: any;
  current: Date;
  groups: Array<any>;
 // group: string;
  groupId: string;
   groupType: string;
  groupIds: Array<string>;
  teams: Array<any>;
  calendarGames: Array<any>;
  calendarGamesKeys: Array<string>;
  rounds: any; // rounds is a map of arrays

  constructor(private app: App, public navCtrl: NavController, public navParams: NavParams, public view: ViewController, public backend: BackendProvider) {
     this.event = {};
    this.groupIds=[];
    this.groups=[];
    this.showTopic('games');
        
    this.event = this.backend.getCurrentEvent();
    
    // trasnform array in map
    this.teams = [];
    for (let t of this.event.teams) {
    this.teams[t.id]=t;
    }

    for (let g of this.event.groups) {
       this.groups[g.id]=g;
       this.groupIds.push(g.id);
    }

    this.setGroup(0);
    
     
    this.current = undefined;

    

  }

 

  buildBracket(group) {
    // build the round for brackets
    this.rounds={};
    if (this.groups[this.groupId].type=="bracket") {
    for ( let game of this.event.games) {
      if( game.groupId == this.groupId) {
       if (this.rounds[game.round]==undefined) { this.rounds[game.round] = []}
       this.rounds[game.round].push(game);
      }
    }
    // sort each round per roundIndex;
    for (let r in this.rounds) {
        this.rounds[r].sort(function(a, b) {
    
    return a.roundIndex < b.roundIndex ? -1 : a.roundIndex > b.roundIndex ? 1 : 0;
});
    }
    }
  }

    buildCalendarGames(group) {
    // build the calendar view of the games
    this.calendarGames=[];
    this.calendarGamesKeys=[];

    for ( let game of this.event.games) {
      if( game.groupId == this.groupId) {
        var date = game.date.toDateString();
        if (this.calendarGames[date]==undefined) this.calendarGames[date]=[];
        this.calendarGames[date].push(game);
       
      }
    }
    this.calendarGamesKeys=Object.keys(this.calendarGames);

    
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad AddEventPage');


    
  }
  ionViewDidEnter() {
    console.log('ionViewDidEnter ');
    this.content.scrollTo(0, 500, 200);
    
  }
  scrollTo() {
    this.content.scrollTo(0, 500, 200);
  }
  clearDate() {
     this.current = undefined;
  }
  isCurrentGroup(m) {
     return (m.groupId == this.groupId)
  }
  isNewDate(d) {
     var result = true;
     if ((this.current != undefined)&&(d!=undefined)) {
        result = (d.toDateString()!=this.current.toDateString());
     }
     //this.current = d;
     return(result);
  }
  nextGroup() {
    var index = this.groupIds.indexOf(this.groupId);
    index = (index+1)%this.groupIds.length;
    this.setGroup(index);
  }
  setGroup(groupId) {
    this.groupId=this.groupIds[groupId];
    this.groupType=this.groups[this.groupId].type;
    this.buildBracket(this.groupId);
    this.buildCalendarGames(this.groupId);
  }
  goHome() {
     var ctrl = this.app.getRootNavs()[0];
      ctrl.setRoot(TabsPage);
  }

  showTopic(topic) {
      this.show=topic;
  }

 

}
