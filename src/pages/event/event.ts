import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams , ViewController} from 'ionic-angular';
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
  title: string;
  startDate: Date;
  event: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public view: ViewController, public backend: BackendProvider) {
     this.event = {};
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddEventPage');
    this.event = this.backend.getCurrentEvent();
  }

 

}
