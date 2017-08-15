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

    this.favoriteQuotes.slice(index, 1)
  }

  // findFavoriteQuote(quote: Quote) {
  //   const index = this.favoriteQuotes.findIndex((checkedQuote: Quote) => {
  //     return checkedQuote.id == quote.id
  //   })
  // }

  getFavoriteQuotes() {
    return this.favoriteQuotes;
  }
}
