import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';

/**
 * Generated class for the SandboxPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-sandbox',
  templateUrl: 'sandbox.html',
})
export class SandboxPage {
base64Image : any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private camera: Camera) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SandboxPage');
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
}
