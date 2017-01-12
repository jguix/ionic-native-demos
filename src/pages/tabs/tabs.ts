import { Component } from '@angular/core';

import { FilePage } from '../file/file';
import { PluginsPage } from '../plugins/plugins';
import { ContactPage } from '../contact/contact';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  tab1Root: any = FilePage;
  tab2Root: any = PluginsPage;
  tab3Root: any = ContactPage;

  constructor() {

  }
}
