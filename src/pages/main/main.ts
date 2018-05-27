import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

import { RegisterPage } from '../register/register';
import { AngularFireAuth  } from 'angularfire2/auth';
import { ListsPage } from '../lists/lists';
import firebase from 'firebase';




/**
 * Generated class for the MainPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-main',
  templateUrl: 'main.html',
})
export class MainPage {
  nextMsg: string = "No account? then Sign up!";
  message: string = '';
  @ViewChild ('Email') user;
  @ViewChild ('Password') password;

  constructor(private alertCtrl: AlertController,
    private fire: AngularFireAuth, public navCtrl: NavController, public navParams: NavParams)
   {
     //check
     console.log(this.navParams);
    
  }

  ionViewDidLoad() {
    
    console.log('ionViewDidLoad MainPage');
  }

  Next() {
    this.navCtrl.push(RegisterPage);
  }

  alert(message: string) {
    this.alertCtrl.create({
      title: 'info!',
      subTitle: message,
      buttons: ['OK']

    }).present();
  } 

  
  signIn() {
    this.fire.auth.signInWithEmailAndPassword(this.user.value, this.password.value)
    .then(data =>{
      console.log('got some data', this.fire.auth.currentUser);
      //user is logged in
      this.alert('Succes! You are logged in');
      this.navCtrl.setRoot(ListsPage);
      
    })

    .catch(error =>{
      console.log('got an error', error);
      this.alert(error.message);
    })
    console.log('Would sign in with', this.user.value, this.password.value);
  }

  



  

}
