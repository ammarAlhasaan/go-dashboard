const priceFormatter = (value: number) => value?.toLocaleString('en-US', {
  style: 'currency',
  currency: 'AED',
  minimumFractionDigits: 0
})

const dateFormatter = (value: any) => {
  if (!value) {
    return ''
  }
  const date = new Date(value)
  return date?.toLocaleDateString('en-GB', {
    day: '2-digit', month: 'short', year: 'numeric'
  }).replace(/ /g, '-');
}
export {priceFormatter, dateFormatter}
