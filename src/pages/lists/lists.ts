import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import 'rxjs/add/operator/map';
import { Http } from '@angular/http';
import { AngularFireAuth  } from 'angularfire2/auth';
import { MainPage } from '../main/main';


/**
 * Generated class for the ListsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-lists',
  templateUrl: 'lists.html',
})
export class ListsPage {
  information: any[];

  constructor(public firebaseauth: AngularFireAuth, public navCtrl: NavController, public navParams: NavParams, private http:Http) {
    let localData = this.http.get('assets/information.json').map(res => res.json().items);
    localData.subscribe(data => {
      this.information = data;
    });



  }

  toggleSection(i) {
    this.information[i].open = !this.information[i].open;

  }

  toggleItem(i, j) {
    this.information[i].children[j].open = !this.information[i].children[j].open;
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListsPage');
  }

  logout() {
    this.firebaseauth.auth.signOut();
    this.navCtrl.push(MainPage);

  }

}
