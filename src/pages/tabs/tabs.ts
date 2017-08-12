import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import {FavoritesPage} from "../favorites/favorites";
import {LibraryPage} from "../library/library";

@IonicPage()
@Component({
  selector: 'page-tabs',
  template: `
    <ion-tabs>
      <ion-tab [root]="favorites" tabTitle="Favorites" tabIcon="star"></ion-tab>
      <ion-tab [root]="library" tabTitle="Library" tabIcon="book"></ion-tab>
    </ion-tabs>
  `
})
export class TabsPage {
  favorites = FavoritesPage;
  library = LibraryPage;

  constructor(public navCtrl: NavController, public navParams: NavParams) {}
}
