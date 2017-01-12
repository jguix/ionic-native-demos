import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import {
  ContactPage,
  PathsPage,
  FileOpenerPage,
  PhotoViewerPage,
  PluginsPage,
  TabsPage
} from '../pages';

@NgModule({
  declarations: [
    MyApp,
    ContactPage,
    FileOpenerPage,
    PathsPage,
    PhotoViewerPage,
    PluginsPage,
    TabsPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ContactPage,
    FileOpenerPage,
    PathsPage,
    PhotoViewerPage,
    PluginsPage,
    TabsPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
