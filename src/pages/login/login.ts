import { Component,ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import {LoggedinPage} from '../loggedin/loggedin';
/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  @ViewChild('username') uname;
  @ViewChild('password') password;
  constructor(private alertCtrl:AlertController,private fire:AngularFireAuth,public navCtrl: NavController, public navParams: NavParams) {
  }

  alert(message:string){
    this.alertCtrl.create({
      title: 'Info',
      subTitle:message,
      buttons: ['OK']
    }).present();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }
  signInUser(){
    this.fire.auth.signInWithEmailAndPassword(this.uname.value,this.password.value)
    .then(data=>{
      this.alert('Success! You\'re logged in');
      this.navCtrl.setRoot(LoggedinPage);
      //console.log("Got data",data);
     })
     .catch(error =>{
      console.log('got an error',error);
      this.alert(error.message);
    });
    console.log("signin with",this.uname.value , this.password.value);
  }
}
