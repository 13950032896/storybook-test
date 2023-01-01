import LgInput from '../'

export default {
  title: 'LgInput',
  component: LgInput
}

export const Test = () => ({
  components: { LgInput },
  template: '<lg-input v-model="value"></lg-input>',
  data () {
    return {
      value: 'admin'
    }
  }
})