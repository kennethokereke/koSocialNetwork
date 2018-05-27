import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { MainPage } from '../main/main';



/**
 * Generated class for the MainPage page.
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
  clickMe: string = "Already have an account? Click me";

  @ViewChild ('Email') user;
  @ViewChild ('Password') password;

  constructor(private alertCtrl: AlertController,private fire: AngularFireAuth, public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MainPage');
  }


  alert(message: string) {
    this.alertCtrl.create({
      title: 'info!',
      subTitle: message,
      buttons: ['OK']

    }).present();
  } 


  registerUser() {
    
    this.fire.auth.createUserWithEmailAndPassword(this.user.value, this.password.value)
    .then(data =>{
      console.log('got data', data);
      this.alert('Registered!');
      this.navCtrl.setRoot(MainPage);
    })
    .catch(error =>{
     console.log('got an error', error);
     this.alert(error.message);
    });
    
    console.log('Would register user with ', this.user.value, this.password.value);

  }

  Login() {
    this.navCtrl.push(MainPage);
  }

  

}
