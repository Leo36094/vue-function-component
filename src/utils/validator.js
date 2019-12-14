export const oneOfType = (arr, checkValue) => {
  if (Array.isArray(arr)) return arr.indexOf(checkValue) !== -1
  else throw new Error('Please throw an array')
}
