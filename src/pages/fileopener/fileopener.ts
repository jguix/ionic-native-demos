import { Component } from '@angular/core';
import { LoadingController, NavController, NavParams, Platform } from 'ionic-angular';
import { FileOpener, Toast, Transfer } from 'ionic-native';
import { Observable } from 'rxjs';
import 'rxjs/operator/map';

declare var cordova: any;

@Component({
  selector: 'page-fileopener',
  templateUrl: 'fileopener.html'
})
export class FileOpenerPage {

  constructor(
    public loadingCtrl: LoadingController,
    public navCtrl: NavController,
    public navParams: NavParams,
    public platform: Platform) {}

  ionViewDidLoad() {
  }

  openRemotePDF(filePath: string, cachedir?: string) {
    this.presentLoading('Opening remote PDF... \nIf you don\'t see a PDF, \nsomething went wrong');

    if (this.platform.is('cordova')) {

      Observable.of(cachedir)
        .flatMap(cachedir => {
          console.log('Cache dir: ' + cachedir);

          if (cachedir != null) {
            switch (cachedir) {
              case 'external': cachedir = cordova.file.externalCacheDirectory; break;
              default: cachedir = cordova.file.cacheDirectory;
            }
            // Return cachedPath
            return this.cacheFile(filePath, cachedir);
          } else {
            // Return original filePath
            return Observable.of(filePath);
          }
        })
        .map( (filePath) => {
          console.log('Final path: ' + filePath);

          FileOpener.open(filePath, 'application/pdf')
            .then((res) => {
              this.log('File opened successfully');
            })
            .catch((err) => {
              this.log('Error status: ' + err.status + ' - Error message: ' + err.message);
            });
          // return this.openPDF(filePath);
        })
        .subscribe();

      // if (cachedir) {
      //
      // } else {
      //
      // }
      // this.cacheFile(filePath)
      //   .map( (cachedPath) => {
      //     FileOpener.open(cachedPath, 'application/pdf')
      //       .then((res) => {
      //         this.log('File opened successfully');
      //       })
      //       .catch((err) => {
      //         this.log('Error status: ' + err.status + ' - Error message: ' + err.message);
      //       });
      //   });
    } else {
      window.open(filePath, '_blank');
    }
  }

  openRemotePDF2(filePath: string) {
    this.presentLoading('Opening remote PDF... \nIf you don\'t see a PDF, \nsomething went wrong');

    if (this.platform.is('cordova')) {
      this.cacheFile(filePath, cordova.file.externalCacheDirectory)
        .map( (cachedPath) => {
          FileOpener.open(cachedPath, 'application/pdf')
            .then((res) => {
              this.log('File opened successfully');
            })
            .catch((err) => {
              this.log('Error status: ' + err.status + ' - Error message: ' + err.message);
            });
        })
        .subscribe();

    } else {
      window.open(filePath, '_blank');
    }
  }
  //
  // private openPDF(filePath: string): Observable<void> {
  //   return Observable.fromPromise(FileOpener.open(filePath, 'application/pdf'))
  //     .do( () => {
  //       this.log('File opened successfully');
  //     }, (err) => {
  //       this.log('Error status: ' + err.status + ' - Error message: ' + err.message);
  //     });
  // }

  private cacheFile(filePath: string, fs: string = cordova.file.cacheDirectory): Observable<string> {
    const fileTransfer = new Transfer();
    console.log('Caching file: ' + filePath + ' at fs: ' + fs);

    return Observable.fromPromise(fileTransfer.download(filePath, fs + 'file.pdf'))
      .map((entry) => {
        const cachedPath = entry.toURL();
        console.log('download complete: ' + cachedPath);
        return cachedPath;
      }, (error) => {
        console.log('Error: ' + error.message);
      });

  }

  private log(message: string, duration: string = 'short') {
    console.log(message);
    Toast.show(message, duration, 'center').subscribe();
  }

  private presentLoading(message: string, duration: string = 'short') {
    let time: number = 1000;
    switch (duration) {
      case 'short': time = 1000; break;
      case 'long': time = 5000; break;
      default: try { time = parseInt(duration) } catch(err) { /* keep default value */ }
    }

    let loading = this.loadingCtrl.create({
      content: message
    });

    console.log(message);
    loading.present();

    setTimeout(() => {
      loading.dismiss();
    }, time);
  }
}
