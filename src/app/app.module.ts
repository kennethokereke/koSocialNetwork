import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { MainPage } from '../pages/main/main';
import { RegisterPage } from '../pages/register/register';


import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { ListsPage } from '../pages/lists/lists';
import { HttpModule } from '@angular/http';


const firebaseAuth = {
  apiKey: "AIzaSyAhy8La07xKrn15-Rw9b2LsmrFal3n_wx8",
  authDomain: "chatapp-6d6ca.firebaseapp.com",
  databaseURL: "https://chatapp-6d6ca.firebaseio.com",
  projectId: "chatapp-6d6ca",
  storageBucket: "chatapp-6d6ca.appspot.com",
  messagingSenderId: "882440663612"
};

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    MainPage,
    RegisterPage,
    ListsPage
    
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(firebaseAuth),
    AngularFireAuthModule,
    HttpModule
    

  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    MainPage,
    RegisterPage,
    ListsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
