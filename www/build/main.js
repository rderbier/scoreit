webpackJsonp([1],{

/***/ 101:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__about_about__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__contact_contact__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__sandbox_sandbox__ = __webpack_require__(105);
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

/***/ 102:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_backend_backend__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tabs_tabs__ = __webpack_require__(101);
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
    function EventPage(app, navCtrl, navParams, view, backend) {
        this.app = app;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.view = view;
        this.backend = backend;
        this.event = {};
        this.groupIds = [];
        this.groups = [];
        this.showTopic('games');
        this.event = this.backend.getCurrentEvent();
        // trasnform array in map
        this.teams = [];
        for (var _i = 0, _a = this.event.teams; _i < _a.length; _i++) {
            var t = _a[_i];
            this.teams[t.id] = t;
        }
        for (var _b = 0, _c = this.event.groups; _b < _c.length; _b++) {
            var g = _c[_b];
            this.groups[g.id] = g;
            this.groupIds.push(g.id);
        }
        this.setGroup(0);
        this.current = undefined;
    }
    EventPage.prototype.buildBracket = function (group) {
        // build the round for brackets
        this.rounds = {};
        if (this.groups[this.groupId].type == "bracket") {
            for (var _i = 0, _a = this.event.games; _i < _a.length; _i++) {
                var game = _a[_i];
                if (game.groupId == this.groupId) {
                    if (this.rounds[game.round] == undefined) {
                        this.rounds[game.round] = [];
                    }
                    this.rounds[game.round].push(game);
                }
            }
            // sort each round per roundIndex;
            for (var r in this.rounds) {
                this.rounds[r].sort(function (a, b) {
                    return a.roundIndex < b.roundIndex ? -1 : a.roundIndex > b.roundIndex ? 1 : 0;
                });
            }
        }
        this.roundIndex = 1;
    };
    EventPage.prototype.buildCalendarGames = function (group) {
        // build the calendar view of the games
        this.calendarGames = [];
        this.calendarGamesKeys = [];
        for (var _i = 0, _a = this.event.games; _i < _a.length; _i++) {
            var game = _a[_i];
            if (game.groupId == this.groupId) {
                var date = game.date.toDateString();
                if (this.calendarGames[date] == undefined)
                    this.calendarGames[date] = [];
                this.calendarGames[date].push(game);
            }
        }
        this.calendarGamesKeys = Object.keys(this.calendarGames);
    };
    EventPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AddEventPage');
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
    EventPage.prototype.isCurrentGroup = function (m) {
        return (m.groupId == this.groupId);
    };
    EventPage.prototype.isNewDate = function (d) {
        var result = true;
        if ((this.current != undefined) && (d != undefined)) {
            result = (d.toDateString() != this.current.toDateString());
        }
        //this.current = d;
        return (result);
    };
    EventPage.prototype.nextGroup = function () {
        var index = this.groupIds.indexOf(this.groupId);
        index = (index + 1) % this.groupIds.length;
        this.setGroup(index);
    };
    EventPage.prototype.setGroup = function (groupId) {
        this.groupId = this.groupIds[groupId];
        this.groupType = this.groups[this.groupId].type;
        this.buildBracket(this.groupId);
        this.buildCalendarGames(this.groupId);
    };
    EventPage.prototype.goHome = function () {
        var ctrl = this.app.getRootNavs()[0];
        ctrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__tabs_tabs__["a" /* TabsPage */]);
    };
    EventPage.prototype.showTopic = function (topic) {
        this.show = topic;
    };
    EventPage.prototype.swipeBracket = function (event) {
        console.log("swipe " + event.direction);
        if ((event.direction === 2)) {
            this.roundIndex += 1;
        }
        if ((event.direction === 4) && (this.roundIndex > 1)) {
            this.roundIndex -= 1;
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Content */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Content */])
    ], EventPage.prototype, "content", void 0);
    EventPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-event',template:/*ion-inline-start:"/Users/raph/work/perso/schav/scoreit/src/pages/event/event.html"*/'<ion-header>\n	<ion-navbar color="lightdark">\n		<ion-buttons left>\n			<button ion-button icon-only large (click)="goHome()">\n				<ion-icon name="md-home"></ion-icon>\n			</button>\n		</ion-buttons>\n		<ion-title text-center>\n			{{event.title}}\n		</ion-title>\n		<ion-buttons end>\n\n\n\n		</ion-buttons>\n\n\n	</ion-navbar>\n	<ion-navbar color="lightdark">\n		<ion-buttons left>\n			<button ion-button icon-only (click)="nextGroup()">\n				<ion-icon name="md-rewind"></ion-icon>\n			</button>\n		</ion-buttons>\n		<ion-title text-center>\n			{{groups[groupId].name}}\n		</ion-title>\n		<ion-buttons end>\n\n\n			<button ion-button icon-only (click)="nextGroup()">\n				<ion-icon name="md-fastforward"></ion-icon>\n			</button>\n		</ion-buttons>\n\n	</ion-navbar>\n\n</ion-header>\n\n<ion-content>\n	<div *ngIf="show==\'games\'">\n\n		<ion-list no-lines>\n\n			<div *ngFor="let d of calendarGamesKeys">\n\n				<ion-list-header >\n					{{d}}\n				</ion-list-header>\n				<ion-item *ngFor="let m of calendarGames[d]" class="matches__list-item" (click)="scrollTo()" >\n\n					<a  class="matches__item matches__link" >\n\n						<!--span class="matches__item-col matches__label">CHA</span-->\n\n						<span class="matches__item-col matches__participant matches__participant--side1" [ngClass]="{\'winner\': m.teams[0].isWinner===true }">{{teams[m.teams[0].id].name}}</span>\n\n						<span class="matches__item-col matches__status ">\n\n							<span class="matches__teamscores" *ngIf="m.isFinal==true" >\n\n								<span class="matches__teamscores-side left">{{m.teams[0].score}}</span>\n\n								<span class="matches__teamscores-side right">{{m.teams[1].score}}</span>\n\n							</span>\n							<span class="matches__time" *ngIf="m.isFinal!=true" >\n\n								{{m.date.toTimeString().substr(0,5)}}\n\n							</span>\n\n\n\n						</span>\n\n						<span class="matches__item-col matches__participant matches__participant--side2">{{teams[m.teams[1].id].name}}</span>\n\n						<!--span class="matches__item-col matches__info">FT</span-->\n\n\n					</a>\n					<p class="matches_location" *ngIf="(m.isFinal!=true) && (m.location!=undefined)">{{m.location.name}}</p>\n				</ion-item>\n\n			</div>\n\n		</ion-list>\n	</div>\n\n	<div *ngIf="show==\'results\'">\n\n\n		<ion-slides class="bracket" *ngIf="groupType==\'bracket\'" (swipe)="swipeBracket($event)">\n\n\n			<ion-slide class="bracket">\n				<div class="round1">\n					<ion-list-header >\n						Round {{roundIndex}}\n					</ion-list-header>\n					<div *ngFor="let m of rounds[roundIndex]; let i = index"  class="game-card" [ngClass]="{\'upper\': i%2===0, \'lower\': i%2===1 }">\n						<ion-card  class="scorecard" >\n\n\n							<div class="scorecard_item" [ngClass]="{\'winner\': m.teams[0].isWinner===true }">{{teams[m.teams[0].id].name}}</div>\n							<div class="scorecard_item matches__status ">\n								<span class="matches__teamscores" *ngIf="m.isFinal==true" >\n\n									<span class="matches__teamscores-side left">{{m.teams[0].score}}</span>\n\n									<span class="matches__teamscores-side right">{{m.teams[1].score}}</span>\n\n								</span>\n							</div>\n							<div class="scorecard_item " [ngClass]="{\'winner\': m.teams[1].isWinner===true }">{{teams[m.teams[1].id].name}} </div>\n\n						</ion-card>\n					</div>\n				</div>\n				<div class="round2">\n					<ion-list-header >\n						Round {{roundIndex+1}}\n					</ion-list-header>\n					<div  *ngFor="let m of rounds[roundIndex+1]; let i = index" class="game-card"  [ngClass]="{\'upper\': i%2===0, \'lower\': i%2===1 }">\n\n						<ion-card  class="scorecard" >\n\n\n							<div class="scorecard_item" [ngClass]="{\'winner\': m.teams[0].isWinner===true }">{{teams[m.teams[0].id].name}}</div>\n							<div class="scorecard_item matches__status ">\n								<span class="matches__teamscores" *ngIf="m.isFinal==true" >\n\n									<span class="matches__teamscores-side left">{{m.teams[0].score}}</span>\n\n									<span class="matches__teamscores-side right">{{m.teams[1].score}}</span>\n\n								</span>\n							</div>\n\n							<div class="scorecard_item " [ngClass]="{\'winner\': m.teams[1].isWinner===true }">{{teams[m.teams[1].id].name}} </div>\n\n						</ion-card>\n					</div>\n				</div>\n			</ion-slide>\n\n\n		</ion-slides>\n		<div class="pool" *ngIf="groupType==\'pool\'">\n\n			<ion-grid>\n				<ion-row class="header">\n					<ion-col>#</ion-col>\n\n\n\n\n					<ion-col col-9>team</ion-col>\n					<ion-col *ngFor="let c of groups[groupId].rankData">{{c}}</ion-col>\n				</ion-row>\n\n				<ion-row *ngFor="let r of groups[groupId].ranks">\n					<ion-col>{{r.rank}}</ion-col>\n					<ion-col col-9>{{teams[r.team].name}}</ion-col>\n					-\n					<ion-col *ngFor="let c of groups[groupId].rankData">{{r.data[c]}}</ion-col>\n				</ion-row>\n			</ion-grid>\n		</div>\n	</div>\n\n\n</ion-content>\n\n\n<ion-footer>\n	<ion-navbar color="lightdark">\n		<ion-buttons >\n			<button start ion-button icon-only large (click)="showTopic(\'games\')">\n				<ion-icon name="md-calendar"></ion-icon>\n			</button>\n			<button center ion-button icon-only large (click)="showTopic(\'results\')">\n				<ion-icon name="md-podium"></ion-icon>\n			</button>\n			<button end ion-button icon-only large (click)="showTopic(\'info\')">\n				<ion-icon name="md-information-circle"></ion-icon>\n			</button>\n		</ion-buttons>\n	</ion-navbar>\n</ion-footer>\n'/*ion-inline-end:"/Users/raph/work/perso/schav/scoreit/src/pages/event/event.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* App */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ViewController */], __WEBPACK_IMPORTED_MODULE_2__providers_backend_backend__["a" /* BackendProvider */]])
    ], EventPage);
    return EventPage;
}());

//# sourceMappingURL=event.js.map

/***/ }),

/***/ 104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BackendProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(119);
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
                teams: [
                    {
                        "id": "T1",
                        "name": "Houston Rockets"
                    },
                    {
                        "id": "T2",
                        "name": "Minesotta Timberwolves"
                    },
                    {
                        "id": "T3",
                        "name": "Oklahoma City Thunder"
                    },
                    {
                        "id": "T4",
                        "name": "Utah Jazz"
                    },
                    {
                        "id": "T5",
                        "name": "Portland Trailblazzers"
                    },
                    {
                        "id": "T6",
                        "name": "New Orleans Pelicans"
                    },
                    {
                        "id": "T7",
                        "name": "Golden State Warriors"
                    },
                    {
                        "id": "T8",
                        "name": "San Antonio Spurs"
                    },
                    {
                        "id": "T9",
                        "name": "Toronto Raptors"
                    },
                    {
                        "id": "T10",
                        "name": "Washington Wizards"
                    },
                    {
                        "id": "T11",
                        "name": "Cleveland Cavaliers"
                    },
                    {
                        "id": "T12",
                        "name": "Indiana Pacers"
                    },
                    {
                        "id": "T13",
                        "name": "Philadelphia Sixers"
                    },
                    {
                        "id": "T14",
                        "name": "Miami Heat"
                    },
                    {
                        "id": "T15",
                        "name": "Boston Celics"
                    },
                    {
                        "id": "T16",
                        "name": "Milwaukee Bucks"
                    },
                    {
                        "id": "T17",
                        "name": "Risus At PC"
                    },
                    {
                        "id": "T18",
                        "name": "Vestibulum Ut Inc."
                    },
                    {
                        "id": "T19",
                        "name": "Aliquam Corporation"
                    },
                    {
                        "id": "T20",
                        "name": "Enim Nisl Elementum LLC"
                    },
                    {
                        "id": "T21",
                        "name": "Facilisis Non Ltd"
                    },
                    {
                        "id": "T22",
                        "name": "Urna Nullam Inc."
                    },
                    {
                        "id": "T23",
                        "name": "Nam Porttitor Scelerisque Foundation"
                    },
                    {
                        "id": "T24",
                        "name": "Vel Nisl Institute"
                    },
                    {
                        "id": "T25",
                        "name": "Massa Lobortis Ultrices Corporation"
                    },
                    {
                        "id": "T26",
                        "name": "Quam Vel Corporation"
                    },
                    {
                        "id": "T27",
                        "name": "Molestie Tellus Aenean Ltd"
                    },
                    {
                        "id": "T28",
                        "name": "Adipiscing Incorporated"
                    },
                    {
                        "id": "T29",
                        "name": "Velit Consulting"
                    },
                    {
                        "id": "T30",
                        "name": "Donec Nibh Quisque Company"
                    },
                    {
                        "id": "T31",
                        "name": "Id Corp."
                    },
                    {
                        "id": "T32",
                        "name": "Urna Et Foundation"
                    },
                    {
                        "id": "T33",
                        "name": "Ac Industries"
                    },
                    {
                        "id": "T34",
                        "name": "Nec Incorporated"
                    },
                    {
                        "id": "T35",
                        "name": "Rutrum Fusce Dolor LLC"
                    },
                    {
                        "id": "T36",
                        "name": "Nascetur Ridiculus Associates"
                    },
                    {
                        "id": "T37",
                        "name": "Egestas Urna Justo Corp."
                    },
                    {
                        "id": "T38",
                        "name": "Feugiat Industries"
                    },
                    {
                        "id": "T39",
                        "name": "Vivamus Sit Amet LLP"
                    },
                    {
                        "id": "T40",
                        "name": "Cursus Et Magna Associates"
                    },
                    {
                        "id": "T41",
                        "name": "Dolor Company"
                    },
                    {
                        "id": "T42",
                        "name": "Orci Consulting"
                    },
                    {
                        "id": "T43",
                        "name": "Nulla Industries"
                    },
                    {
                        "id": "T44",
                        "name": "Primis Ltd"
                    },
                    {
                        "id": "T45",
                        "name": "Vel Mauris Integer Company"
                    },
                    {
                        "id": "T46",
                        "name": "Suspendisse Sed Dolor Corp."
                    },
                    {
                        "id": "T47",
                        "name": "Metus Urna Associates"
                    },
                    {
                        "id": "T48",
                        "name": "Pede Praesent Eu Ltd"
                    },
                    {
                        "id": "T49",
                        "name": "Enim Curabitur Consulting"
                    },
                    {
                        "id": "T50",
                        "name": "Nisi LLC"
                    },
                    {
                        "id": "T51",
                        "name": "Mollis Phasellus Libero Corp."
                    },
                    {
                        "id": "T52",
                        "name": "Mus Proin Vel Consulting"
                    },
                    {
                        "id": "T53",
                        "name": "Dis Parturient Corp."
                    },
                    {
                        "id": "T54",
                        "name": "Tempus Lorem LLC"
                    },
                    {
                        "id": "T55",
                        "name": "At Corp."
                    },
                    {
                        "id": "T56",
                        "name": "Ultricies Ltd"
                    },
                    {
                        "id": "T57",
                        "name": "A Mi Fringilla Foundation"
                    },
                    {
                        "id": "T58",
                        "name": "Pharetra LLP"
                    },
                    {
                        "id": "T59",
                        "name": "Ullamcorper Velit In Industries"
                    },
                    {
                        "id": "T60",
                        "name": "Duis LLC"
                    },
                    {
                        "id": "T61",
                        "name": "Dolor Elit Corp."
                    },
                    {
                        "id": "T62",
                        "name": "Nisl Limited"
                    },
                    {
                        "id": "T63",
                        "name": "Nulla In Corp."
                    },
                    {
                        "id": "T64",
                        "name": "Donec Tempor Institute"
                    },
                    {
                        "id": "T65",
                        "name": "Vel Venenatis PC"
                    },
                    {
                        "id": "T66",
                        "name": "Nullam Lobortis Quam Limited"
                    },
                    {
                        "id": "T67",
                        "name": "Scelerisque Institute"
                    },
                    {
                        "id": "T68",
                        "name": "Facilisis Incorporated"
                    },
                    {
                        "id": "T69",
                        "name": "Lorem Lorem Luctus Inc."
                    },
                    {
                        "id": "T70",
                        "name": "Mauris Morbi Incorporated"
                    },
                    {
                        "id": "T71",
                        "name": "Lorem Eu Metus LLC"
                    },
                    {
                        "id": "T72",
                        "name": "Ut Ipsum Associates"
                    },
                    {
                        "id": "T73",
                        "name": "Magna Incorporated"
                    },
                    {
                        "id": "T74",
                        "name": "Bibendum Consulting"
                    },
                    {
                        "id": "T75",
                        "name": "Mi Lacinia Ltd"
                    },
                    {
                        "id": "T76",
                        "name": "Laoreet Lectus Quis Foundation"
                    },
                    {
                        "id": "T77",
                        "name": "Lorem Sit Amet Company"
                    },
                    {
                        "id": "T78",
                        "name": "Laoreet Institute"
                    },
                    {
                        "id": "T79",
                        "name": "A Facilisis Corp."
                    },
                    {
                        "id": "T80",
                        "name": "In Condimentum Donec Institute"
                    },
                    {
                        "id": "T81",
                        "name": "Neque LLP"
                    },
                    {
                        "id": "T82",
                        "name": "In Scelerisque Scelerisque LLC"
                    },
                    {
                        "id": "T83",
                        "name": "Blandit Corp."
                    },
                    {
                        "id": "T84",
                        "name": "Quam Consulting"
                    },
                    {
                        "id": "T85",
                        "name": "Nec Tempus Corporation"
                    },
                    {
                        "id": "T86",
                        "name": "A Mi Associates"
                    },
                    {
                        "id": "T87",
                        "name": "In Aliquet Lobortis Incorporated"
                    },
                    {
                        "id": "T88",
                        "name": "Imperdiet Ullamcorper Company"
                    },
                    {
                        "id": "T89",
                        "name": "Sem Industries"
                    },
                    {
                        "id": "T90",
                        "name": "Porttitor Tellus Non Limited"
                    },
                    {
                        "id": "T91",
                        "name": "Vel Faucibus Id Institute"
                    },
                    {
                        "id": "T92",
                        "name": "Phasellus Dapibus Quam Industries"
                    },
                    {
                        "id": "T93",
                        "name": "Nibh Phasellus Industries"
                    },
                    {
                        "id": "T94",
                        "name": "Gravida Nunc Sed Ltd"
                    },
                    {
                        "id": "T95",
                        "name": "Magna A Neque Incorporated"
                    },
                    {
                        "id": "T96",
                        "name": "Nulla Vulputate Dui Corporation"
                    },
                    {
                        "id": "T97",
                        "name": "Non Lacinia At Ltd"
                    },
                    {
                        "id": "T98",
                        "name": "Volutpat Associates"
                    },
                    {
                        "id": "T99",
                        "name": "Ut Nec Urna LLP"
                    },
                    {
                        "id": "T100",
                        "name": "Eget Varius Corporation"
                    }
                ],
                groups: [
                    {
                        id: "A",
                        name: "West",
                        type: "bracket"
                    },
                    {
                        id: "B",
                        name: "Est",
                        type: "bracket"
                    },
                    {
                        id: "C",
                        name: "Poupoule",
                        type: "pool",
                        rankData: ["pt", "tt"],
                        ranks: [
                            { "rank": 1, "team": "T1", data: { pt: "12", tt: "28" } },
                            { "rank": 2, "team": "T3", data: { pt: "10", tt: "20" } },
                            { "rank": 3, "team": "T2", data: { pt: "8", tt: "15" } },
                            { "rank": 3, "team": "T4", data: { pt: "8", tt: "7" } },
                            { "rank": 5, "team": "T7", data: { pt: "1", tt: "5" } },
                            { "rank": 5, "team": "T6", data: { pt: "1", tt: "4" } },
                            { "rank": 5, "team": "T5", data: { pt: "1", tt: "-1" } },
                            { "rank": 8, "team": "T8", data: { pt: "0", tt: "-5" } }
                        ]
                    }
                ],
                games: [
                    {
                        date: "2018-04-05T13:00:00.000Z",
                        round: 1,
                        roundIndex: 1,
                        groupId: "A",
                        teams: [
                            { id: "T1", score: "4", isWinner: true },
                            { id: "T2", score: "1" }
                        ],
                        isFinal: true,
                    },
                    {
                        date: "2018-04-05T13:00:00.000Z",
                        round: 1,
                        roundIndex: 2,
                        groupId: "A",
                        teams: [
                            { id: "T3", score: "2" },
                            { id: "T4", score: "3", isWinner: true }
                        ],
                        isFinal: true,
                    },
                    {
                        date: "2018-04-05T13:00:00.000Z",
                        round: 1,
                        roundIndex: 3,
                        groupId: "A",
                        teams: [
                            { id: "T5", score: "0" },
                            { id: "T6", score: "4", isWinner: true }
                        ],
                        isFinal: true,
                    },
                    {
                        date: "2018-04-05T13:00:00.000Z",
                        round: 1,
                        roundIndex: 4,
                        groupId: "A",
                        teams: [
                            { id: "T7", score: "4", isWinner: true },
                            { id: "T8", score: "1" }
                        ],
                        isFinal: true,
                    },
                    {
                        date: "2018-04-05T13:00:00.000Z",
                        round: 2,
                        roundIndex: 1,
                        groupId: "A",
                        teams: [
                            { id: "T1", score: "0" },
                            { id: "T4", score: "4", isWinner: true }
                        ],
                        isFinal: false,
                    },
                    {
                        date: "2018-04-05T13:00:00.000Z",
                        round: 2,
                        roundIndex: 2,
                        groupId: "A",
                        teams: [
                            { id: "T6", score: "2" },
                            { id: "T7", score: "4", isWinner: true }
                        ],
                        isFinal: true,
                    },
                    {
                        date: "2018-04-05T13:00:00.000Z",
                        round: 3,
                        roundIndex: 1,
                        groupId: "A",
                        location: { name: " Oakland" },
                        teams: [
                            { id: "T4" },
                            { id: "T7" }
                        ],
                        isFinal: false,
                    },
                    {
                        date: "2018-04-07T13:00:00.000Z",
                        round: 1,
                        roundIndex: 1,
                        groupId: "B",
                        teams: [
                            { id: "T9", score: "4", isWinner: true },
                            { id: "T10", score: "2" }
                        ]
                    },
                    {
                        date: "2018-04-06T13:00:00.000Z",
                        round: 1,
                        roundIndex: 2,
                        groupId: "B",
                        teams: [
                            { id: "T11", score: "4", isWinner: true },
                            { id: "T12", score: "1" }
                        ],
                        isFinal: true,
                    },
                    {
                        date: "2018-04-07T13:00:00.000Z",
                        round: 1,
                        roundIndex: 3,
                        groupId: "B",
                        teams: [
                            { id: "T13", score: "5", isWinner: true },
                            { id: "T14", score: "2" }
                        ],
                        isFinal: true,
                    },
                    {
                        date: "2018-04-07T13:00:00.000Z",
                        round: 1,
                        roundIndex: 4,
                        groupId: "B",
                        teams: [
                            { id: "T15", score: "2" },
                            { id: "T16", score: "6", isWinner: true }
                        ],
                        isFinal: true,
                    },
                    {
                        date: "2018-04-28T13:00:00.000Z",
                        round: 2,
                        roundIndex: 1,
                        location: { name: "chez Raph" },
                        groupId: "B",
                        teams: [
                            { id: "T9" },
                            { id: "T11" }
                        ],
                        isFinal: true,
                    },
                    {
                        date: "2018-04-29T13:00:00.000Z",
                        round: 2,
                        roundIndex: 2,
                        location: { name: "chez Matth" },
                        groupId: "B",
                        teams: [
                            { id: "T13" },
                            { id: "T16" }
                        ],
                    },
                    {
                        date: "2018-04-30T13:00:00.000Z",
                        round: 3,
                        roundIndex: 1,
                        location: { name: "chez Jules" },
                        groupId: "B",
                        teams: [
                            { id: "T9" },
                            { id: "T16" }
                        ],
                    },
                    {
                        date: "2018-04-29T13:00:00.000Z",
                        location: { name: "terrain 1" },
                        groupId: "C",
                        teams: [
                            { id: "T1", score: "64", isWinner: true },
                            { id: "T2", score: "32" }
                        ],
                        isFinal: true,
                    },
                    {
                        date: "2018-04-29T13:10:00.000Z",
                        location: { name: "terrain 2" },
                        groupId: "C",
                        teams: [
                            { id: "T3", score: "0" },
                            { id: "T4", score: "93", isWinner: true }
                        ],
                        isFinal: true,
                    },
                    {
                        date: "2018-04-29T13:00:00.000Z",
                        location: { name: "terrain 3" },
                        groupId: "C",
                        teams: [
                            { id: "T5", score: "16" },
                            { id: "T6", score: "16" }
                        ],
                        isFinal: true,
                    },
                    {
                        date: "2018-04-29T13:10:00.000Z",
                        location: { name: "terrain 4" },
                        groupId: "C",
                        teams: [
                            { id: "T7", score: "36", isWinner: true },
                            { id: "T8", score: "5" }
                        ],
                    },
                    {
                        date: "2018-04-29T13:50:00.000Z",
                        location: { name: "terrain 3" },
                        groupId: "C",
                        teams: [
                            { id: "T1" },
                            { id: "T3" }
                        ],
                    },
                    {
                        date: "2018-04-29T14:00:00.000Z",
                        location: { name: "terrain 2" },
                        groupId: "C",
                        teams: [
                            { id: "T2" },
                            { id: "T4" }
                        ],
                    },
                    {
                        date: "2018-04-29T13:00:00.000Z",
                        location: { name: "terrain 1" },
                        groupId: "C",
                        teams: [
                            { id: "T5" },
                            { id: "T7" }
                        ],
                    },
                    {
                        date: "2018-04-30T13:00:00.000Z",
                        location: { name: "terrain 3" },
                        groupId: "C",
                        teams: [
                            { id: "T5" },
                            { id: "T8" }
                        ],
                    }
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

/***/ 105:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SandboxPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_camera__ = __webpack_require__(161);
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

/***/ 118:
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
webpackEmptyAsyncContext.id = 118;

/***/ }),

/***/ 160:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/sandbox/sandbox.module": [
		288,
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
webpackAsyncContext.id = 160;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 204:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
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
            selector: 'page-about',template:/*ion-inline-start:"/Users/raph/work/perso/schav/scoreit/src/pages/about/about.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      About\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n	\n\n</ion-content>\n'/*ion-inline-end:"/Users/raph/work/perso/schav/scoreit/src/pages/about/about.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]])
    ], AboutPage);
    return AboutPage;
}());

//# sourceMappingURL=about.js.map

/***/ }),

/***/ 205:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__event_event__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_backend_backend__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_barcode_scanner__ = __webpack_require__(206);
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
            ctrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__event_event__["a" /* EventPage */]);
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
            selector: 'page-home',template:/*ion-inline-start:"/Users/raph/work/perso/schav/scoreit/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar color="lightdark">\n    \n    <ion-title>\n      Tournament Scoring\n    </ion-title>\n\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <button  ion-button color="primary" (click)="qrscanRequest()">Scan the QR Code of the event</button>\n\n  <h2>Or enter your event code</h2>\n \n  \n    <ion-item>\n      \n      <ion-input type="text" [(ngModel)]="eventCode"></ion-input>\n    </ion-item>\n<button  *ngIf="eventCode" ion-button color="primary" (click)="openEvent()">Open Event</button>\n\n\n</ion-content>\n'/*ion-inline-end:"/Users/raph/work/perso/schav/scoreit/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* App */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ModalController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_3__providers_backend_backend__["a" /* BackendProvider */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_barcode_scanner__["a" /* BarcodeScanner */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 207:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResultPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ResultPage = (function () {
    function ResultPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    ResultPage.prototype.swipe = function (event) {
        console.log("Swipe " + event.direction);
    };
    ResultPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-result',template:/*ion-inline-start:"/Users/raph/work/perso/schav/scoreit/src/pages/event/result.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      About\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n	<div class="bracket" (swipe)="swipe($event)">\n	<ul class="round round-1">\n		<li class="spacer">&nbsp;</li>\n		\n		<li class="game game-top winner">Lousville <span>79</span></li>\n		<li class="game game-spacer">&nbsp;</li>\n		<li class="game game-bottom ">NC A&T <span>48</span></li>\n\n		<li class="spacer">&nbsp;</li>\n		\n		<li class="game game-top winner">Colo St <span>84</span></li>\n		<li class="game game-spacer">&nbsp;</li>\n		<li class="game game-bottom ">Missouri <span>72</span></li>\n\n		<li class="spacer">&nbsp;</li>\n		\n		<li class="game game-top ">Oklahoma St <span>55</span></li>\n		<li class="game game-spacer">&nbsp;</li>\n		<li class="game game-bottom winner">Oregon <span>68</span></li>\n\n		<li class="spacer">&nbsp;</li>\n		\n		<li class="game game-top winner">Saint Louis <span>64</span></li>\n		<li class="game game-spacer">&nbsp;</li>\n		<li class="game game-bottom ">New Mexico St <span>44</span></li>\n\n		<li class="spacer">&nbsp;</li>\n		\n		<li class="game game-top winner">Memphis <span>54</span></li>\n		<li class="game game-spacer">&nbsp;</li>\n		<li class="game game-bottom ">St Mary\'s <span>52</span></li>\n\n		<li class="spacer">&nbsp;</li>\n		\n		<li class="game game-top winner">Mich St <span>65</span></li>\n		<li class="game game-spacer">&nbsp;</li>\n		<li class="game game-bottom ">Valparaiso <span>54</span></li>\n\n		<li class="spacer">&nbsp;</li>\n		\n		<li class="game game-top winner">Creighton <span>67</span></li>\n		<li class="game game-spacer">&nbsp;</li>\n		<li class="game game-bottom ">Cincinnati <span>63</span></li>\n\n		<li class="spacer">&nbsp;</li>\n		\n		<li class="game game-top winner">Duke <span>73</span></li>\n		<li class="game game-spacer">&nbsp;</li>\n		<li class="game game-bottom ">Albany <span>61</span></li>\n\n		<li class="spacer">&nbsp;</li>\n	</ul>\n	<ul class="round round-2">\n		<li class="spacer">&nbsp;</li>\n		\n		<li class="game game-top winner">Lousville <span>82</span></li>\n		<li class="game game-spacer">&nbsp;</li>\n		<li class="game game-bottom ">Colo St <span>56</span></li>\n\n		<li class="spacer">&nbsp;</li>\n		\n		<li class="game game-top winner">Oregon <span>74</span></li>\n		<li class="game game-spacer">&nbsp;</li>\n		<li class="game game-bottom ">Saint Louis <span>57</span></li>\n\n		<li class="spacer">&nbsp;</li>\n		\n		<li class="game game-top ">Memphis <span>48</span></li>\n		<li class="game game-spacer">&nbsp;</li>\n		<li class="game game-bottom winner">Mich St <span>70</span></li>\n\n		<li class="spacer">&nbsp;</li>\n		\n		<li class="game game-top ">Creighton <span>50</span></li>\n		<li class="game game-spacer">&nbsp;</li>\n		<li class="game game-bottom winner">Duke <span>66</span></li>\n\n		<li class="spacer">&nbsp;</li>\n	</ul>\n	\n</div>\n\n</ion-content>\n'/*ion-inline-end:"/Users/raph/work/perso/schav/scoreit/src/pages/event/result.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]])
    ], ResultPage);
    return ResultPage;
}());

//# sourceMappingURL=result.js.map

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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(285);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_about_about__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_contact_contact__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_home_home__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_tabs_tabs__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_event_event__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_event_result__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_event_tabs_event_tabs__ = __webpack_require__(287);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_sandbox_sandbox__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_native_status_bar__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ionic_native_splash_screen__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__providers_backend_backend__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__ionic_native_camera__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__ionic_native_barcode_scanner__ = __webpack_require__(206);
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
                __WEBPACK_IMPORTED_MODULE_12__pages_sandbox_sandbox__["a" /* SandboxPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_event_result__["a" /* ResultPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_event_tabs_event_tabs__["a" /* EventTabsPage */]
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
                __WEBPACK_IMPORTED_MODULE_12__pages_sandbox_sandbox__["a" /* SandboxPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_event_result__["a" /* ResultPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_event_tabs_event_tabs__["a" /* EventTabsPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_13__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_14__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["d" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_16__ionic_native_camera__["a" /* Camera */],
                __WEBPACK_IMPORTED_MODULE_17__ionic_native_barcode_scanner__["a" /* BarcodeScanner */],
                __WEBPACK_IMPORTED_MODULE_15__providers_backend_backend__["a" /* BackendProvider */]
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__ = __webpack_require__(101);
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

/***/ }),

/***/ 287:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventTabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__contact_contact__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__event_event__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__event_result__ = __webpack_require__(207);
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
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_2__event_event__["a" /* EventPage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_3__event_result__["a" /* ResultPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_1__contact_contact__["a" /* ContactPage */];
    }
    EventTabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/raph/work/perso/schav/scoreit/src/pages/event-tabs/event-tabs.html"*/'<ion-tabs color="lightdark">\n  <ion-tab [root]="tab1Root" tabTitle="Games" tabIcon="md-calendar"></ion-tab>\n  <ion-tab [root]="tab2Root" tabTitle="Results" tabIcon="md-podium"></ion-tab>\n  <ion-tab [root]="tab3Root" tabTitle="Info" tabIcon="md-information-circle"></ion-tab>\n\n</ion-tabs>'/*ion-inline-end:"/Users/raph/work/perso/schav/scoreit/src/pages/event-tabs/event-tabs.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], EventTabsPage);
    return EventTabsPage;
}());

//# sourceMappingURL=event-tabs.js.map

/***/ })

},[208]);
//# sourceMappingURL=main.js.map