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
  startDate: Date;
  event: any;
  current: Date;
  groups: Array<any>;
 // group: string;
  groupId: string;
  groupIds: Array<string>;
  rounds: any; // rounds is a map of arrays

  constructor(private app: App, public navCtrl: NavController, public navParams: NavParams, public view: ViewController, public backend: BackendProvider) {
     this.event = {};
    this.groupIds=[];
    this.groups=[];
        
    this.event = this.backend.getCurrentEvent();

    for (let g of this.event.groups) {
       this.groups[g.id]=g;
       this.groupIds.push(g.id);
    }
    this.groupId = this.event.games[0].groupId;
    this.buildBracket(this.groupId);
   // this.group = this.groups[this.groupId].name;
     
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
    this.groupId=this.groupIds[index];
    this.buildBracket(this.groupId);
    //this.group = this.groups[this.groupId].name;
  }
  goHome() {
     var ctrl = this.app.getRootNavs()[0];
      ctrl.setRoot(TabsPage);
  }

 

}
