import {Component, OnInit} from '@angular/core';
import {AlertController, IonicPage, NavController, NavParams} from 'ionic-angular';
import {Quote} from "../../data/quote.interface";
import {QuotesService} from "../../services/quotes.service";

/**
 * Generated class for the QuotesPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-quotes',
  templateUrl: 'quotes.html',
})
export class QuotesPage implements OnInit {
  quotes: {category: string, quotes: Quote[], icon: string};
  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public alertCtrl: AlertController,
              private quoteService: QuotesService) {}

  ngOnInit() {
    this.quotes = this.navParams.data;
  }

  onFavoriteQuote(quote: Quote) {

    let alert = this.alertCtrl.create({
      title: 'Alert',
      message: 'Do you with to add quote to favorites?',
      buttons: [
        {
          text: 'Yes, add quote to favorites',
          handler: () => {
            this.quoteService.addFavoriteQuote(quote)
          }
        },
        {
          text: 'No, do not add to favorites',
          handler: () => {
          }
        }
        ]
    })
    alert.present()
  }

}
