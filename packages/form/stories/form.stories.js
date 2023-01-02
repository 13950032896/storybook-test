import FmForm from '../'
import FmFormItem from '../../formitem'
import FmInput from '../../input'
import FmButton from '../../button'

export default {
  title: 'FmForm',
  component: FmForm
}

export const Login = () => ({
  components: { FmForm, FmFormItem, FmInput, FmButton },
  template: `
    <Fm-form class="form" ref="form" :model="user" :rules="rules">
      <Fm-form-item label="用户名" prop="username">
        <!-- <Fm-input v-model="user.username"></Fm-input> -->
        <Fm-input :value="user.username" @input="user.username=$event" placeholder="请输入用户名"></Fm-input>
      </Fm-form-item>
      <Fm-form-item label="密码" prop="password">
        <Fm-input type="password" v-model="user.password"></Fm-input>
      </Fm-form-item>
      <Fm-form-item>
        <Fm-button type="primary" @click="login">登 录</Fm-button>
      </Fm-form-item>
    </Fm-form>
  `,
  data () {
    return {
      user: {
        username: '',
        password: ''
      },
      rules: {
        username: [
          {
            required: true,
            message: '请输入用户名'
          }
        ],
        password: [
          {
            required: true,
            message: '请输入密码'
          },
          {
            min: 6,
            max: 12,
            message: '请输入6-12位密码'
          }
        ]
      }
    }
  },
  methods: {
    login () {
      console.log('button')
      this.$refs.form.validate(valid => {
        if (valid) {
          alert('验证成功')
        } else {
          alert('验证失败')
          return false
        }
      })
    }
  }
})