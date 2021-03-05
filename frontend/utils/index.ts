export const formatCurrency = (number: number | string | undefined | null): string => {
    if (!number) return ''
    if (typeof number === 'string') {
      return new Intl.NumberFormat('it-IT', { style: 'currency', currency: 'VND' }).format(
        parseFloat(number),
      )
    }
    return new Intl.NumberFormat('it-IT', { style: 'currency', currency: 'VND' }).format(number)
}