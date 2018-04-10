import { NgModule, ErrorHandler } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { EventPage } from '../pages/event/event';
import { ResultPage } from '../pages/event/result';
import { EventTabsPage } from '../pages/event-tabs/event-tabs';
import { SandboxPage } from '../pages/sandbox/sandbox';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { BackendProvider } from '../providers/backend/backend';
import { Camera } from '@ionic-native/camera';
//import { QRScanner } from '@ionic-native/qr-scanner';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
/*
class CameraMock extends Camera {
  getPicture(options) {
    return new Promise((resolve, reject) => {
      resolve("BASE_64_ENCODED_DATA_GOES_HERE");
    })
  }
}
*/

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    EventPage,
    SandboxPage,
    ResultPage,
    EventTabsPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    EventPage,
    SandboxPage,
    ResultPage,
    EventTabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    Camera,
    BarcodeScanner,
    BackendProvider
  ]
})
export class AppModule {}
