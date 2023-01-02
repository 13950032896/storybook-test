<template>
  <form>
    <slot></slot>
  </form>
</template>

<script>
export default {
  name: 'FmForm',
  provide () {
    return {
      form: this
    }
  },
  props: {
    model: {
      type: Object
    },
    rules: {
      type: Object
    }
  }
}
</script>

<style>

</style>
