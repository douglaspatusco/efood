export const parseToBrl = (amount: number) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(amount)
}

export const getTotalPrice = (items: Menu[]) => {
  return items.reduce((accumulator, currentPrice) => {
    if (currentPrice.preco) {
      return (accumulator += currentPrice.preco)
    }
    return 0
  }, 0)
}
