import { Component } from '@angular/core';

import { LoadingController, NavController } from 'ionic-angular';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  items: string[];
  singleValue5: number;

  constructor(
    public navCtrl: NavController,
    public loadingCtrl: LoadingController) {
    this.items = [
      "Number 1",
      "Number 2",
      "...",
      "Number n"
    ];
  }

  archive() {
    alert('Archived!');
  }

  buttonClick() {
    alert('Clicked!');
  }

  saveItem(item) {
    alert('Saving ' + JSON.stringify(item));
  }

  presentLoadingWithout() {
    let loading = this.loadingCtrl.create({
      spinner: 'dots',
      content: 'Please wait...',
      duration: 2000,
      showBackdrop: false
    });

    loading.onDidDismiss(() => {
      console.log('Dismissed loading');
    });

    loading.present();
  }

  presentLoadingWith() {
    let loading = this.loadingCtrl.create({
      spinner: 'dots',
      content: 'Please wait...',
      duration: 2000,
      showBackdrop: true
    });

    loading.onDidDismiss(() => {
      console.log('Dismissed loading');
    });

    loading.present();
  }

  radioChanged() {
    console.log('Value:', this.singleValue5);
  }
}
