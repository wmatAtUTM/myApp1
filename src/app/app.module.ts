import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ActionPage } from '../pages/action/action';
import { ContactPage } from '../pages/contact/contact';
import { DetailsContactPage } from '../pages/details-contact/details-contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { ServicesPage } from '../pages/services/services';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { People } from '../providers/people/people';

import { HttpClientModule } from '@angular/common/http';
import { Toast } from '@ionic-native/toast';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { DataServiceProvider } from '../providers/data-service/data-service';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    ServicesPage,
    ActionPage,
    DetailsContactPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp, {
      'tabsLayout': 'icon-left',
      platforms: {
        ios: {'tabsPlacement': 'bottom', 'iconMode': 'ios'},
        android: {'tabsPlacement': 'top', 'iconMode': 'md'}
      }
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    ServicesPage,
    ActionPage,
    DetailsContactPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    People,
    BarcodeScanner,
    Toast,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    DataServiceProvider,
  ]
})
export class AppModule {}
