import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { LoginPage } from '../pages/login/login';
import { RegisterPage } from '../pages/register/register';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import {LoggedinPage} from '../pages/loggedin/loggedin';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';



const firebaseAuth = {
  apiKey: "AIzaSyDt1BqHjY4fL0bZtuFkbeGrMFS157p_F9I",
  authDomain: "test-project-bb0fe.firebaseapp.com",
  databaseURL: "https://test-project-bb0fe.firebaseio.com",
  projectId: "test-project-bb0fe",
  storageBucket: "test-project-bb0fe.appspot.com",
  messagingSenderId: "801393907708"
};

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    RegisterPage,
    LoggedinPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseAuth),
    AngularFireAuthModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    RegisterPage,
    LoggedinPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
