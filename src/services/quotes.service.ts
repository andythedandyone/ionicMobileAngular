import {Quote} from "../data/quote.interface";

export class QuotesService {
  private favoriteQuotes: Quote[] = [];

  addFavoriteQuote(quote: Quote) {
    this.favoriteQuotes.push(quote)
    console.log(this.favoriteQuotes)
  }

  removeFavoriteQuote(quote: Quote) {
    const index = this.favoriteQuotes.findIndex((findQuote: Quote) => {
      return findQuote.id == quote.id
    })
    this.favoriteQuotes.splice(index, 1)
    console.log('this is the final after removing --> ', this.favoriteQuotes)
  }

  isFavoriteQuote(quote: Quote) {
    return this.favoriteQuotes.find((checkedQuote: Quote) => {
      return checkedQuote.id == quote.id
    })
  }

  getFavoriteQuotes() {
    return this.favoriteQuotes;
  }
}
