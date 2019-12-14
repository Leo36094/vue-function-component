<script>
import TypographyText from '@/components/Typography/Text'
import { colorValidator, fontSizeValidator } from '../utils'

export default {
  functional: true,
  props: {
    level: {
      validator: (value) => ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'].indexOf(value) > -1,
      default: () => 'h1',
    },
    msg: {
      type: String,
      default: () => 'Please insert message',
    },
    size: {
      validator: value => fontSizeValidator(value),
      default: () => 'sm',
    },
    color: {
      validator: value => colorValidator(value),
      default: () => 'gray-darkest',
    },
    isBlock: {
      type: Boolean,
      default: () => false
    }
  },
  render (h, context) {
    const { level, ...restProps } = context.props

    return h(TypographyText, {
      props: {
        level,
        ...restProps,
      },
    })
  }
}
</script>
