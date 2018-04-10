import { Component } from '@angular/core';
import { ModalController, NavController } from 'ionic-angular';
import { EventTabsPage } from '../event-tabs/event-tabs';
import { EventPage } from '../event/event';
import { BackendProvider } from '../../providers/backend/backend';
import { BarcodeScanner, BarcodeScannerOptions } from '@ionic-native/barcode-scanner';
import { App } from 'ionic-angular';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
   public events = [];
   eventCode: string;
   event: any;
   
   options :BarcodeScannerOptions;
   barcodeData: any;

  constructor( private app: App, public modalCtrl: ModalController,public navCtrl: NavController, public backend: BackendProvider, private qrScanner: BarcodeScanner) {

  this.event = {};

  }



  openEvent() {
  console.log("open event ");
     this.backend.getEvent(this.eventCode).then((data) => {
      console.log(data);
      this.event = data;
      // change the main root to event
      var ctrl = this.app.getRootNavs()[0];
      ctrl.setRoot(EventPage);
      
      
    });
  }


qrscanRequest() {
this.options = {
        
        preferFrontCamera : true, // iOS and Android
          showFlipCameraButton : true, // iOS and Android
          showTorchButton : true, // iOS and Android
          torchOn: true, // Android, launch with the torch switched on (if available)
          prompt : "Place a barcode inside the scan area", // Android
          resultDisplayDuration: 500, // Android, display scanned text for X ms. 0 suppresses it entirely, default 1500
          formats : "QR_CODE,PDF_417", // default: all but PDF_417 and RSS_EXPANDED
          orientation : "landscape", // Android only (portrait|landscape), default unset so it rotates with the device
          disableAnimations : true, // iOS
          disableSuccessBeep: false // iOS and Android
    }

       // start scanning
       let scanSub = this.qrScanner.scan().then((barcodeData) => {

        console.log(barcodeData);
        this.eventCode = barcodeData.text;
    }, (err) => {
        console.log("Error occured : " + err);
    });  



  }
 


}
