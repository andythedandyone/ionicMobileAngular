import {Quote} from "../data/quote.interface";

export class QuotesService {
  private favoriteQuotes: Quote[] = [];

  addFavoriteQuote(quote: Quote) {
    this.favoriteQuotes.push(quote)
    console.log(this.favoriteQuotes);
    const index = this.favoriteQuotes.findIndex((data: Quote) => {
      console.log(data)
      return data.id == quote.id
    })
    console.log(index)
  }

  removeFavoriteQuote(quote: Quote) {
    // const quoteIndex = this.favoriteQuotes.indexOf(quote.id)
    this.favoriteQuotes.slice()
  }
}
