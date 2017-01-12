import { Component } from '@angular/core';
import { NavController, Platform } from 'ionic-angular';
import { File, Entry } from 'ionic-native';

declare var cordova: any;

@Component({
  selector: 'page-paths',
  templateUrl: 'paths.html'
})
export class PathsPage {

  paths: any;
  items: any = [];

  constructor(
    public navCtrl: NavController,
    public platform: Platform) {
    console.log('Constructor');

  }

  ionViewDidLoad() {
    console.log('Did load');
    // Wait for cordova & plugins to be ready
    this.platform.ready().then(() => {

      if (this.platform.is('android')) {
        // Android
        this.paths = [
          {
            name: 'Application Directory',
            fsName: 'cordova.file.applicationDirectory',
            fs: cordova.file.applicationDirectory
          },
          {
            name: 'Application Storage Directory',
            fsName: 'cordova.file.applicationStorageDirectory',
            fs: cordova.file.applicationStorageDirectory
          },
          {
            name: 'Cache Directory',
            fsName: 'cordova.file.cacheDirectory',
            fs: cordova.file.cacheDirectory
          },
          {
            name: 'Data Directory',
            fsName: 'cordova.file.dataDirectory',
            fs: cordova.file.dataDirectory
          },
          {
            name: 'Documents Directory',
            fsName: 'cordova.file.dataDirectory + "Documents/"',
            fs: cordova.file.dataDirectory + 'Documents/'
          },
          {
            name: 'External Root Directory',
            fsName: 'cordova.file.externalRootDirectory',
            fs: cordova.file.externalRootDirectory
          },
          {
            name: 'External Application Storage Directory',
            fsName: 'cordova.file.externalApplicationStorageDirectory',
            fs: cordova.file.externalApplicationStorageDirectory
          },
          {
            name: 'External Cache Directory',
            fsName: 'cordova.file.externalCacheDirectory',
            fs: cordova.file.externalCacheDirectory
          },
          {
            name: 'External Data Directory',
            fsName: 'cordova.file.externalDataDirectory',
            fs: cordova.file.externalDataDirectory
          }
        ];
      } else {
        // iOS
        this.paths = [
          {
            name: 'Application Storage Directory',
            fsName: 'cordova.file.applicationStorageDirectory',
            fs: cordova.file.applicationStorageDirectory,
          },
          {
            name: 'Application Directory',
            fsName: 'cordova.file.applicationDirectory',
            fs: cordova.file.applicationDirectory,
          },
          {
            name: 'www Directory',
            fsName: 'cordova.file.applicationDirectory + "www/"',
            fs: cordova.file.applicationDirectory + 'www/',
          },
          {
            name: 'Documents Directory',
            fsName: 'cordova.file.documentsDirectory',
            fs: cordova.file.documentsDirectory,
          },
          {
            name: 'Documents NoCloud Directory',
            fsName: 'cordova.file.documentsDirectory + "NoCloud/"',
            fs: cordova.file.documentsDirectory + 'NoCloud/',
          },
          {
            name: 'Data Directory',
            fsName: 'cordova.file.dataDirectory',
            fs: cordova.file.dataDirectory,
          },
          {
            name: 'Synced Data Directory',
            fsName: 'cordova.file.syncedDataDirectory',
            fs: cordova.file.syncedDataDirectory,
          },
          {
            name: 'Cache Directory',
            fsName: 'cordova.file.cacheDirectory',
            fs: cordova.file.cacheDirectory,
          },
          {
            name: 'Temp Directory',
            fsName: 'cordova.file.tempDirectory',
            fs: cordova.file.tempDirectory,
          }
        ];
      }

      for (let path of this.paths) {
        let item: any = {};
        item.name = path.name;
        item.fsName = path.fsName;
        item.fs = path.fs;
        File.resolveLocalFilesystemUrl(path.fs)
          .then( (entry: Entry) => {
            item.nativeURL = entry.nativeURL;
            item.internalURL = entry.toInternalURL();
            this.items.push(item);
          })
      }
    });
  }

}
