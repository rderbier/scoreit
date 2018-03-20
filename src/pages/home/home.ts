import { Component } from '@angular/core';
import { ModalController, NavController } from 'ionic-angular';
import { EventPage } from '../event/event';
import { BackendProvider } from '../../providers/backend/backend';
import { QRScanner, QRScannerStatus } from '@ionic-native/qr-scanner';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
   public events = [];
   eventCode: string;
   event: any;

  constructor(public modalCtrl: ModalController,public navCtrl: NavController, public backend: BackendProvider, private qrScanner: QRScanner) {

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

qrscanRequest() {
this.qrScanner.prepare()
  .then((status: QRScannerStatus) => {
     if (status.authorized) {
       // camera permission was granted


       // start scanning
       let scanSub = this.qrScanner.scan().subscribe((text: string) => {
         console.log('Scanned something', text);
         this.eventCode=text;

         this.qrScanner.hide(); // hide camera preview
         scanSub.unsubscribe(); // stop scanning
         window.document.querySelector('ion-app').classList.remove('transparent-body');
         window.document.querySelector('ion-content').classList.remove('transparent-body');
       });

       // show camera preview
       this.qrScanner.show();
       window.document.querySelector('ion-app').classList.add('transparent-body');
       window.document.querySelector('ion-content').classList.add('transparent-body');

       // wait for user to scan something, then the observable callback will be called

     } else if (status.denied) {
       // camera permission was permanently denied
       // you must use QRScanner.openSettings() method to guide the user to the settings page
       // then they can grant the permission from there
     } else {
       // permission was denied, but not permanently. You can ask for permission again at a later time.
     }
  })
  .catch((e: any) => console.log('Error is', e));

  }
 


}
