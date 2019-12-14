<script>
import { colorValidator, fontSizeValidator } from '../utils'
export default {
  functional: true,
  props: {
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
      default: false,
    },
    element: {
      type: String,
      default: () => 'span',
    },
    customStyle: {
      type: Object,
      default: () => ({})
    }
  },
  render (h, context) {
    const { color, size, element, isBlock, msg, customStyle } = context.props

    return h(element, {
      attrs: {
        'data-color': color,
        'data-size': size,
        'data-is-block': isBlock,
      },
      style: {
        ...customStyle
      },
      class: 'typography',
    }, msg)
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
$colors: (
  primary-light: $color-primary-light,
  primary: $color-primary,
  primary-dark: $color-primary-dark,
  danger: $color-danger,
  warn: $color-warn,
  gray-darkest: $gray-darkest,
  gray-darker: $gray-darker,
  gray-white: $gray-white
);

$sizes: (
  xs: $font-size-xs,
  sm: $font-size-sm,
  md: $font-size-md,
  lg: $font-size-lg,
  xl: $font-size-xl
);

.typography {
  align-items: center;
  padding: 0 0.5rem;

  @each $color, $style in $colors {
    &[data-color="#{$color}"] {
      color: $style;
    }
  }

  @each $size, $style in $sizes {
    &[data-size="#{$size}"] {
      font-size: $style;
    }
  }
  &[data-is-block="true"] {
    display: flex;
    width: 100%;
  }

  &[data-is-block="false"] {
    display: inline-flex;
  }

  &[data-should-ellipsis="true"] {
    display: block;
    @include text-truncate-singleline;
  }
}
</style>
