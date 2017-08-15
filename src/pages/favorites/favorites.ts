import {Component, OnInit} from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import {QuotesService} from "../../services/quotes.service";
import {Quote} from "../../data/quote.interface";
import {QuotePage} from "../quote/quote";

@IonicPage()
@Component({
  selector: 'page-favorites',
  templateUrl: 'favorites.html',
})
export class FavoritesPage implements OnInit {
  favoriteQuotes: Quote[];

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public modalCtrl: ModalController,
              private quoteService: QuotesService) {
  }

  ngOnInit() {
  //   this.favoriteQuotes = this.quoteService.getFavoriteQuotes()
  }

  ionViewWillEnter() {
    this.favoriteQuotes = this.quoteService.getFavoriteQuotes();
  }

  // ionViewDidLoad() {
  //   console.log('ionViewDidLoad FavoritesPage');
  // }

  openModal(quote: Quote) {
    // console.log('This is the modal quote --> ', quote);
    const modal = this.modalCtrl.create(QuotePage, quote);
    modal.onDidDismiss((data) => {
      if (data) {
        this.quoteService.removeFavoriteQuote(data);
      } else {
        console.log('nothing was deleted.');
      }
    })
    modal.present();
  }

  removeQuote(quote: Quote) {
    this.quoteService.removeFavoriteQuote(quote);
  }

}
