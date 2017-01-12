import { Component } from '@angular/core';
import { NavController, NavParams, Platform } from 'ionic-angular';
import { FileOpener } from 'ionic-native';

declare var cordova: any;

/*
  Generated class for the Fileopener page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-fileopener',
  templateUrl: 'fileopener.html'
})
export class FileopenerPage {

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public platform: Platform) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad FileopenerPage');
  }

  openPDF(filePath: string) {
    console.log('Open PDF at ', filePath);
    this.platform.ready()
      .then( ()=> {
        if (this.platform.is('cordova')) {
          FileOpener.open(filePath, 'application/pdf')
            .then((res) => {
              console.log('file opened successfully');
            }).catch((err) => {
            console.log('Error status: ' + err.status + ' - Error message: ' + err.message);
          });
        } else {
          window.open(filePath, '_blank');
        }
      });
  }
}
