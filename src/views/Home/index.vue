<template>
  <div class="home">
    <TypographyTitle
      size="xl"
      isBlock
      msg="This is an about page"
      level="h2"
      color="primary"
    />
    <TypographyText
      size="sm"
      isBlock
      msg="Some description here"
      color="primary-light"
    />
  </div>
</template>

<script>
// @ is an alias to /src
import { TypographyText, TypographyTitle } from '@/components/Typography'

export default {
  name: 'home',
  components: {
    TypographyText,
    TypographyTitle,
  },
}
</script>

<style lang="scss" scoped>
.home {
  height: 100%;
}
</style>
