import {Component, OnInit} from '@angular/core';
import {IonicPage, NavController, NavParams, ViewController} from 'ionic-angular';
import {Quote} from "../../data/quote.interface";

@IonicPage()
@Component({
  selector: 'page-quote',
  templateUrl: 'quote.html',
})
export class QuotePage implements OnInit {
  quote: Quote;
  constructor(public navCtrl: NavController,
              public viewCtrl: ViewController,
              public navParams: NavParams) {
  }

  // ionViewDidLoad() {
  //   console.log('ionViewDidLoad QuotePage');
  // }

  ngOnInit() {
    this.quote = this.navParams.data;
    // console.log(this.quote)
  }

  dismissModal() {
    this.viewCtrl.dismiss()
  }

  unfavoriteQuote() {
    this.viewCtrl.dismiss(this.quote)
  }


}
