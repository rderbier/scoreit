import { Component, ViewChild } from '@angular/core';
import { Content } from 'ionic-angular';
import {  NavController, NavParams , ViewController} from 'ionic-angular';
import { BackendProvider } from '../../providers/backend/backend';

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

  constructor(public navCtrl: NavController, public navParams: NavParams, public view: ViewController, public backend: BackendProvider) {
     this.event = {};
     
     
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddEventPage');
    this.event = this.backend.getCurrentEvent();
    
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
  isNewDate(d) {
     var result = true;
     if ((this.current != undefined)&&(d!=undefined)) {
        result = (d.toDateString()!=this.current.toDateString());
     }
     this.current = d;
     return(result);
  }

 

}
