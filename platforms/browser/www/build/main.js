webpackJsonp([1],{

/***/ 101:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AboutPage = (function () {
    function AboutPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    AboutPage.prototype.swipe = function (event) {
        console.log("Swipe " + event.direction);
    };
    AboutPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-about',template:/*ion-inline-start:"/Users/raph/work/perso/schav/scoreit/src/pages/about/about.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      About\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n	<div class="bracket" (swipe)="swipe($event)" >\n	<ul class="round round-1">\n		<li class="spacer">&nbsp;</li>\n		\n		<li class="game game-top winner">Lousville <span>79</span></li>\n		<li class="game game-spacer">&nbsp;</li>\n		<li class="game game-bottom ">NC A&T <span>48</span></li>\n\n		<li class="spacer">&nbsp;</li>\n		\n		<li class="game game-top winner">Colo St <span>84</span></li>\n		<li class="game game-spacer">&nbsp;</li>\n		<li class="game game-bottom ">Missouri <span>72</span></li>\n\n		<li class="spacer">&nbsp;</li>\n		\n		<li class="game game-top ">Oklahoma St <span>55</span></li>\n		<li class="game game-spacer">&nbsp;</li>\n		<li class="game game-bottom winner">Oregon <span>68</span></li>\n\n		<li class="spacer">&nbsp;</li>\n		\n		<li class="game game-top winner">Saint Louis <span>64</span></li>\n		<li class="game game-spacer">&nbsp;</li>\n		<li class="game game-bottom ">New Mexico St <span>44</span></li>\n\n		<li class="spacer">&nbsp;</li>\n		\n		<li class="game game-top winner">Memphis <span>54</span></li>\n		<li class="game game-spacer">&nbsp;</li>\n		<li class="game game-bottom ">St Mary\'s <span>52</span></li>\n\n		<li class="spacer">&nbsp;</li>\n		\n		<li class="game game-top winner">Mich St <span>65</span></li>\n		<li class="game game-spacer">&nbsp;</li>\n		<li class="game game-bottom ">Valparaiso <span>54</span></li>\n\n		<li class="spacer">&nbsp;</li>\n		\n		<li class="game game-top winner">Creighton <span>67</span></li>\n		<li class="game game-spacer">&nbsp;</li>\n		<li class="game game-bottom ">Cincinnati <span>63</span></li>\n\n		<li class="spacer">&nbsp;</li>\n		\n		<li class="game game-top winner">Duke <span>73</span></li>\n		<li class="game game-spacer">&nbsp;</li>\n		<li class="game game-bottom ">Albany <span>61</span></li>\n\n		<li class="spacer">&nbsp;</li>\n	</ul>\n	<ul class="round round-2">\n		<li class="spacer">&nbsp;</li>\n		\n		<li class="game game-top winner">Lousville <span>82</span></li>\n		<li class="game game-spacer">&nbsp;</li>\n		<li class="game game-bottom ">Colo St <span>56</span></li>\n\n		<li class="spacer">&nbsp;</li>\n		\n		<li class="game game-top winner">Oregon <span>74</span></li>\n		<li class="game game-spacer">&nbsp;</li>\n		<li class="game game-bottom ">Saint Louis <span>57</span></li>\n\n		<li class="spacer">&nbsp;</li>\n		\n		<li class="game game-top ">Memphis <span>48</span></li>\n		<li class="game game-spacer">&nbsp;</li>\n		<li class="game game-bottom winner">Mich St <span>70</span></li>\n\n		<li class="spacer">&nbsp;</li>\n		\n		<li class="game game-top ">Creighton <span>50</span></li>\n		<li class="game game-spacer">&nbsp;</li>\n		<li class="game game-bottom winner">Duke <span>66</span></li>\n\n		<li class="spacer">&nbsp;</li>\n	</ul>\n	\n</div>\n\n</ion-content>\n'/*ion-inline-end:"/Users/raph/work/perso/schav/scoreit/src/pages/about/about.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]])
    ], AboutPage);
    return AboutPage;
}());

//# sourceMappingURL=about.js.map

/***/ }),

/***/ 102:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ContactPage = (function () {
    function ContactPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    ContactPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-contact',template:/*ion-inline-start:"/Users/raph/work/perso/schav/scoreit/src/pages/contact/contact.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Contact\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <ion-list-header>Follow us on Twitter</ion-list-header>\n    <ion-item>\n      <ion-icon name="ionic" item-start></ion-icon>\n      @ionicframework\n    </ion-item>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/raph/work/perso/schav/scoreit/src/pages/contact/contact.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]])
    ], ContactPage);
    return ContactPage;
}());

//# sourceMappingURL=contact.js.map

/***/ }),

/***/ 103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BackendProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(286);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/*
  Generated class for the BackendProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var BackendProvider = (function () {
    function BackendProvider(http) {
        this.http = http;
        console.log('BackendProvider Provider');
        this.event = null;
    }
    BackendProvider.prototype.getCurrentEvent = function () {
        return this.event;
    };
    BackendProvider.prototype.getEvent = function (eventCode) {
        var _this = this;
        if (this.event) {
            return Promise.resolve(this.event);
        }
        /*
        return new Promise(resolve => {
     
          this.http.get('http://scorepro.herokuapp.com/api/event/'+eventCode)
            .subscribe(data => {
              this.event = data;
              resolve(this.event);
            });
        });
        */
        return new Promise(function (resolve) {
            _this.event = { title: "test event",
                isOver: false,
                games: [
                    {
                        date: "2018-04-05T13:00:00.000Z",
                        teams: [
                            { name: "the king", score: "35", isWinner: true },
                            { name: "SF Monkeys", score: "12" }
                        ],
                        isFinal: true,
                    },
                    {
                        date: "2018-04-07T13:00:00.000Z",
                        teams: [
                            { name: "sapporo" },
                            { name: "stella" }
                        ]
                    },
                    {
                        date: "2018-04-05T13:00:00.000Z",
                        teams: [
                            { name: "team a", score: "2" },
                            { name: "team b", score: "2" }
                        ],
                        isFinal: true,
                    },
                ] };
            // set real date objects
            for (var _i = 0, _a = _this.event.games; _i < _a.length; _i++) {
                var g = _a[_i];
                g.date = new Date(g.date);
            }
            // sort games by date
            _this.event.games.sort(function (a, b) {
                var d1 = a.date;
                var d2 = b.date;
                return d1 < d2 ? -1 : d1 > d2 ? 1 : 0;
            });
            resolve(_this.event);
        });
    };
    BackendProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], BackendProvider);
    return BackendProvider;
}());

//# sourceMappingURL=backend.js.map

/***/ }),

/***/ 104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SandboxPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_camera__ = __webpack_require__(160);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the SandboxPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SandboxPage = (function () {
    function SandboxPage(navCtrl, navParams, camera) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.camera = camera;
    }
    SandboxPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SandboxPage');
    };
    SandboxPage.prototype.takePicture = function () {
        var _this = this;
        window.document.querySelector('ion-app').classList.add('transparent-body');
        window.document.querySelector('ion-content').classList.add('transparent-body');
        this.camera.getPicture({
            destinationType: this.camera.DestinationType.DATA_URL,
            targetWidth: 1000,
            targetHeight: 1000
        }).then(function (imageData) {
            // imageData is a base64 encoded string
            _this.base64Image = "data:image/jpeg;base64," + imageData;
            window.document.querySelector('ion-app').classList.remove('transparent-body');
            window.document.querySelector('ion-content').classList.remove('transparent-body');
        }, function (err) {
            console.log(err);
        });
    };
    SandboxPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-sandbox',template:/*ion-inline-start:"/Users/raph/work/perso/schav/scoreit/src/pages/sandbox/sandbox.html"*/'<!--\n  Generated template for the SandboxPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>sandbox</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n<ion-content padding>\n  \n  \n  <button ion-button color="primary" (click)="takePicture()">Take a Picture</button>\n  <br>\n      Latest Picture:\n      <img [src]="base64Image" *ngIf="base64Image" />\n</ion-content>\n</ion-content>\n'/*ion-inline-end:"/Users/raph/work/perso/schav/scoreit/src/pages/sandbox/sandbox.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_camera__["a" /* Camera */]])
    ], SandboxPage);
    return SandboxPage;
}());

//# sourceMappingURL=sandbox.js.map

/***/ }),

/***/ 117:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 117;

/***/ }),

/***/ 159:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/sandbox/sandbox.module": [
		287,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 159;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 203:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__about_about__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__contact_contact__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__sandbox_sandbox__ = __webpack_require__(104);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var TabsPage = (function () {
    function TabsPage() {
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_1__about_about__["a" /* AboutPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_2__contact_contact__["a" /* ContactPage */];
        this.tab4Root = __WEBPACK_IMPORTED_MODULE_4__sandbox_sandbox__["a" /* SandboxPage */];
    }
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/raph/work/perso/schav/scoreit/src/pages/tabs/tabs.html"*/'<ion-tabs color="lightdark">\n  <ion-tab [root]="tab1Root" tabTitle="Home" tabIcon="home"></ion-tab>\n  <ion-tab [root]="tab2Root" tabTitle="About" tabIcon="information-circle"></ion-tab>\n  <ion-tab [root]="tab3Root" tabTitle="Contact" tabIcon="contacts"></ion-tab>\n  <ion-tab [root]="tab4Root" tabTitle="Test" tabIcon="plus"></ion-tab>\n</ion-tabs>\n'/*ion-inline-end:"/Users/raph/work/perso/schav/scoreit/src/pages/tabs/tabs.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 204:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__event_tabs_event_tabs__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_backend_backend__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_barcode_scanner__ = __webpack_require__(207);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var HomePage = (function () {
    function HomePage(app, modalCtrl, navCtrl, backend, qrScanner) {
        this.app = app;
        this.modalCtrl = modalCtrl;
        this.navCtrl = navCtrl;
        this.backend = backend;
        this.qrScanner = qrScanner;
        this.events = [];
        this.event = {};
    }
    HomePage.prototype.openEvent = function () {
        var _this = this;
        console.log("open event ");
        this.backend.getEvent(this.eventCode).then(function (data) {
            console.log(data);
            _this.event = data;
            // change the main root to event
            var ctrl = _this.app.getRootNavs()[0];
            ctrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__event_tabs_event_tabs__["a" /* EventTabsPage */]);
        });
    };
    HomePage.prototype.qrscanRequest = function () {
        var _this = this;
        this.options = {
            preferFrontCamera: true,
            showFlipCameraButton: true,
            showTorchButton: true,
            torchOn: true,
            prompt: "Place a barcode inside the scan area",
            resultDisplayDuration: 500,
            formats: "QR_CODE,PDF_417",
            orientation: "landscape",
            disableAnimations: true,
            disableSuccessBeep: false // iOS and Android
        };
        // start scanning
        var scanSub = this.qrScanner.scan().then(function (barcodeData) {
            console.log(barcodeData);
            _this.eventCode = barcodeData.text;
        }, function (err) {
            console.log("Error occured : " + err);
        });
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/Users/raph/work/perso/schav/scoreit/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar color="lightdark">\n    <ion-title>\n      Tournament Scoring\n    </ion-title>\n\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <button  ion-button color="primary" (click)="qrscanRequest()">Scan the QR Code of the event</button>\n\n  <h2>Or enter your event code</h2>\n \n  \n    <ion-item>\n      \n      <ion-input type="text" [(ngModel)]="eventCode"></ion-input>\n    </ion-item>\n<button  *ngIf="eventCode" ion-button color="primary" (click)="openEvent()">Open Event</button>\n\n\n</ion-content>\n'/*ion-inline-end:"/Users/raph/work/perso/schav/scoreit/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* App */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ModalController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_3__providers_backend_backend__["a" /* BackendProvider */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_barcode_scanner__["a" /* BarcodeScanner */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 205:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventTabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__about_about__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__contact_contact__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__event_event__ = __webpack_require__(206);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var EventTabsPage = (function () {
    function EventTabsPage() {
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_3__event_event__["a" /* EventPage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_1__about_about__["a" /* AboutPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_2__contact_contact__["a" /* ContactPage */];
    }
    EventTabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/raph/work/perso/schav/scoreit/src/pages/event-tabs/event-tabs.html"*/'<ion-tabs color="lightdark">\n  <ion-tab [root]="tab1Root" tabTitle="today" tabIcon="play"></ion-tab>\n  <ion-tab [root]="tab2Root" tabTitle="Classement" tabIcon="podium"></ion-tab>\n  <ion-tab [root]="tab3Root" tabTitle="Calendar" tabIcon="calendar"></ion-tab>\n\n</ion-tabs>'/*ion-inline-end:"/Users/raph/work/perso/schav/scoreit/src/pages/event-tabs/event-tabs.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], EventTabsPage);
    return EventTabsPage;
}());

//# sourceMappingURL=event-tabs.js.map

/***/ }),

/***/ 206:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_backend_backend__ = __webpack_require__(103);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the AddEventPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var EventPage = (function () {
    function EventPage(navCtrl, navParams, view, backend) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.view = view;
        this.backend = backend;
        this.event = {};
    }
    EventPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AddEventPage');
        this.event = this.backend.getCurrentEvent();
    };
    EventPage.prototype.ionViewDidEnter = function () {
        console.log('ionViewDidEnter ');
        this.content.scrollTo(0, 500, 200);
    };
    EventPage.prototype.scrollTo = function () {
        this.content.scrollTo(0, 500, 200);
    };
    EventPage.prototype.clearDate = function () {
        this.current = undefined;
    };
    EventPage.prototype.isNewDate = function (d) {
        var result = true;
        if ((this.current != undefined) && (d != undefined)) {
            result = (d.toDateString() != this.current.toDateString());
        }
        this.current = d;
        return (result);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Content */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Content */])
    ], EventPage.prototype, "content", void 0);
    EventPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-event',template:/*ion-inline-start:"/Users/raph/work/perso/schav/scoreit/src/pages/event/event.html"*/'<ion-header>\n	<ion-navbar color="lightdark">\n    <ion-title>\n      {{event.title}}\n    </ion-title>\n  </ion-navbar>\n  <!--ion-toolbar color="secondary">\n    <ion-title>\n      New Event\n    </ion-title>\n      <ion-buttons end>\n        <button ion-button icon-only (click)="close()"><ion-icon name="close"></ion-icon></button>\n      </ion-buttons>\n    </ion-toolbar-->\n  </ion-header>\n\n  <ion-content >\n\n    <ion-list no-lines  ngInit="clearDate()">\n\n      <div *ngFor="let m of event.games">\n        <ion-list-header *ngIf="isNewDate(m.date)">\n          {{m.date.toDateString()}}\n        </ion-list-header>\n        <ion-item class="matches__list-item" (click)="scrollTo()" >\n\n          <a  class="matches__item matches__link" >\n\n            <!--span class="matches__item-col matches__label">CHA</span-->\n\n            <span class="matches__item-col matches__participant matches__participant--side1" [ngClass]="{\'winner\': m.teams[0].isWinner===true }">{{m.teams[0].name}}</span>\n\n            <span class="matches__item-col matches__status ">\n\n              <span class="matches__teamscores" *ngIf="m.isFinal==true" >\n\n                <span class="matches__teamscores-side">{{m.teams[0].score}}</span>\n\n                <span class="matches__teamscores-side">{{m.teams[1].score}}</span>\n\n              </span>\n              <span class="matches__time" *ngIf="m.isFinal!=true" >\n\n                {{m.date.toTimeString().substr(0,5)}}\n\n              </span>\n\n\n\n            </span>\n\n            <span class="matches__item-col matches__participant matches__participant--side2">{{m.teams[1].name}}</span>\n\n            <!--span class="matches__item-col matches__info">FT</span-->\n\n\n          </a>\n        </ion-item>\n      </div>\n\n    </ion-list>\n\n\n\n  </ion-content>'/*ion-inline-end:"/Users/raph/work/perso/schav/scoreit/src/pages/event/event.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ViewController */], __WEBPACK_IMPORTED_MODULE_2__providers_backend_backend__["a" /* BackendProvider */]])
    ], EventPage);
    return EventPage;
}());

//# sourceMappingURL=event.js.map

/***/ }),

/***/ 208:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(230);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 230:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(285);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_about_about__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_contact_contact__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_home_home__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_tabs_tabs__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_event_event__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_event_tabs_event_tabs__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_sandbox_sandbox__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_status_bar__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_native_splash_screen__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__providers_backend_backend__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__ionic_native_camera__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__ionic_native_barcode_scanner__ = __webpack_require__(207);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















//import { QRScanner } from '@ionic-native/qr-scanner';

/*
class CameraMock extends Camera {
  getPicture(options) {
    return new Promise((resolve, reject) => {
      resolve("BASE_64_ENCODED_DATA_GOES_HERE");
    })
  }
}
*/
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_5__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_contact_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_event_event__["a" /* EventPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_sandbox_sandbox__["a" /* SandboxPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_event_tabs_event_tabs__["a" /* EventTabsPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["e" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/sandbox/sandbox.module#SandboxPageModule', name: 'SandboxPage', segment: 'sandbox', priority: 'low', defaultHistory: [] }
                    ]
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["c" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_5__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_contact_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_event_event__["a" /* EventPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_sandbox_sandbox__["a" /* SandboxPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_event_tabs_event_tabs__["a" /* EventTabsPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_12__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_13__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["d" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_15__ionic_native_camera__["a" /* Camera */],
                __WEBPACK_IMPORTED_MODULE_16__ionic_native_barcode_scanner__["a" /* BarcodeScanner */],
                __WEBPACK_IMPORTED_MODULE_14__providers_backend_backend__["a" /* BackendProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 285:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__ = __webpack_require__(203);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__["a" /* TabsPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/raph/work/perso/schav/scoreit/src/app/app.html"*/'<ion-nav id="main" [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/Users/raph/work/perso/schav/scoreit/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ })

},[208]);
//# sourceMappingURL=main.js.map