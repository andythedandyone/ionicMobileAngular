import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import {QuotesService} from "../../services/quotes.service";


@IonicPage()
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage {
  constructor(private quotesService: QuotesService) {}

  toggleStatus(event) {
    console.log(event)
    this.quotesService.setSwitchStatus(event.checked)
  }

  isSwitchStatus() {
    return this.quotesService.getSwtichStatus();
  }
}
