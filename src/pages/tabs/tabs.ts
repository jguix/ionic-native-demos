import { Component } from '@angular/core';
import {
  ContactPage,
  PathsPage,
  PluginsPage
} from '..';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  tab1Root: any = PathsPage;
  tab2Root: any = PluginsPage;
  tab3Root: any = ContactPage;

  constructor() {

  }
}
