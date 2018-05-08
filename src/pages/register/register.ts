import { Component,ViewChild} from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController} from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';

/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {
  @ViewChild('username') uname;
  @ViewChild('password') password;
  constructor(private alertCtrl:AlertController,private fire:AngularFireAuth, public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

  alert(message:string){
    this.alertCtrl.create({
      title: 'Info',
      subTitle:message,
      buttons: ['OK']
    }).present();
  }

  registerUser(){
    this.fire.auth.createUserWithEmailAndPassword(this.uname.value,this.password.value)
    .then(data=>{
     console.log("Got data",data);
     this.alert('Success! You\'re registered!');
    })
    .catch(error =>{
      console.log('got an error',error);
      this.alert(error);
    })
    console.log("register with",this.uname.value , this.password.value);
  }
}
