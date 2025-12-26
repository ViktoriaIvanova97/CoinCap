export const selectorList = (state) => state.assets.list
export const selectorError = (state) => state.assets.error
export const selectorStatus = (state) => state.assets.status

export const selectorCurrency = (state) => state.currency.currency
export const selectorTotal = (state) =>
  state.currency.currency
    .reduce((sum, item) => {
      const value = parseFloat(item.total) || 0
      return sum + value
    }, 0)
    .toFixed(2)
