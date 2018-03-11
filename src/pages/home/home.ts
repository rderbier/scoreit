import { Component } from '@angular/core';
import { ModalController, NavController } from 'ionic-angular';
import { EventPage } from '../event/event';
import { BackendProvider } from '../../providers/backend/backend';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
   public events = [];
   eventCode: string;
   event: any;

  constructor(public modalCtrl: ModalController,public navCtrl: NavController, public backend: BackendProvider) {

  this.event = {};

  }

  addEvent(){
 
    //let addModal = this.modalCtrl.create(EventPage);
    this.navCtrl.push(EventPage);
 
    /*
    addModal.onDidDismiss((item) => {
 
          if(item){
            this.saveEvent(item);
          }
 
    });
 
    addModal.present();
    */
 
  }

  openEvent() {
  console.log("open event ");
     this.backend.getEvent(this.eventCode).then((data) => {
      console.log(data);
      this.navCtrl.push(EventPage);
      this.event = data;
    });
  }
 


}
