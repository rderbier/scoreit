import { Component } from '@angular/core';
import { ModalController, NavController } from 'ionic-angular';
import { EventPage } from '../event/event';
import { BackendProvider } from '../../providers/backend/backend';
import { BarcodeScanner, BarcodeScannerOptions } from '@ionic-native/barcode-scanner';
import { Camera, CameraOptions } from '@ionic-native/camera';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
   public events = [];
   eventCode: string;
   event: any;
   base64Image : any;
   options :BarcodeScannerOptions;
   barcodeData: any;

  constructor(public modalCtrl: ModalController,public navCtrl: NavController, public backend: BackendProvider, private qrScanner: BarcodeScanner, private camera: Camera) {

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
  takePicture(){
       window.document.querySelector('ion-app').classList.add('transparent-body');
       window.document.querySelector('ion-content').classList.add('transparent-body');
    this.camera.getPicture({
        destinationType: this.camera.DestinationType.DATA_URL,
        targetWidth: 1000,
        targetHeight: 1000
    }).then((imageData) => {
      // imageData is a base64 encoded string
        this.base64Image = "data:image/jpeg;base64," + imageData;
       window.document.querySelector('ion-app').classList.remove('transparent-body');
       window.document.querySelector('ion-content').classList.remove('transparent-body');
    }, (err) => {
        console.log(err);
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
//this.qrScanner.prepare()
//  .then((status: QRScannerStatus) => {
//     if (status.authorized) {
       // camera permission was granted


       // start scanning
       let scanSub = this.qrScanner.scan().then((barcodeData) => {

        console.log(barcodeData);
        this.eventCode = barcodeData.text;
    }, (err) => {
        console.log("Error occured : " + err);
    });  

   /*
       subscribe((text: string) => {
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

     } 
     */
 // })
 // .catch((e: any) => console.log('Error is', e));

  }
 


}
