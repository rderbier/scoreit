import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { EventPage } from '../event/event';
import { ResultPage } from '../event/result';




@Component({
  templateUrl: 'event-tabs.html'
})
export class EventTabsPage {
  
  tab1Root = EventPage;
  tab2Root = ResultPage;
  tab3Root = ContactPage;
  constructor() {

  }

}
