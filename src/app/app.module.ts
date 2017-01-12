import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { ContactPage, FilePage, FileopenerPage, PhotoviewerPage, PluginsPage, TabsPage } from '../pages';

@NgModule({
  declarations: [
    MyApp,
    ContactPage,
    FileopenerPage,
    FilePage,
    PhotoviewerPage,
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
    FileopenerPage,
    FilePage,
    PhotoviewerPage,
    PluginsPage,
    TabsPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
