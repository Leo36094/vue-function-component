import { oneOfType } from '@/utils/validator'

const colorList = [
  'primary',
  'primary-light',
  'primary-dark',
  'danger',
  'warn',
  'gray-darkest',
  'gray-darker',
  'gray-white'
]

const fontSizeList = ['xs', 'sm', 'md', 'lg', 'xl']

export const colorValidator = value => oneOfType(colorList, value)
export const fontSizeValidator = value => oneOfType(fontSizeList, value)
