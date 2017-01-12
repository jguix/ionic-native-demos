import { Component, ViewChild } from '@angular/core';
import { Platform, NavController } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';

import { TabsPage } from '../pages';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild('myNav') nav: NavController;
  rootPage = TabsPage;

  constructor(
    platform: Platform) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
    });
  }

  // Wait for the components in MyApp's template to be initialized
  // In this case, we are waiting for the Nav with reference variable of "#myNav"
  ngOnInit() {
    // Let's navigate from TabsPage to AboutPage
    this.nav.push(TabsPage);
  }
}
