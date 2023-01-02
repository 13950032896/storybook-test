import FmInput from '../'

export default {
  title: 'FmInput',
  component: FmInput
}

export const Test = () => ({
  components: { FmInput },
  template: '<fm-input v-model="value"></fm-input>',
  data () {
    return {
      value: 'admin'
    }
  }
})