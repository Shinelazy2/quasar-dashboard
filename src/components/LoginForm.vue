<script setup lang="ts">
//
// import { useQuasar } from 'quasar';
import AuthService, { LoginInfo } from 'src/derectives/axios.api'
import { reactive, ref } from 'vue'
import { useRouter } from 'vue-router'
import { useAuthStore } from 'stores/example-store'
import BaseDialog from 'src/components/BaseDialog.vue'
import axios from 'axios'

const router = useRouter()
const authStore = useAuthStore()
// const $q = useQuasar();

const email = ref(null)
const password = ref(null)
const accept = ref(false)
const alreadyJoinUs = ref(false)
const loginInfo = reactive<LoginInfo>({
  loginId: '',
  password: '',
})
const onSubmit = async () => {
  try {
    const isLogin = await AuthService.login(
      loginInfo.loginId,
      loginInfo.password,
    )
    console.log('🚀 ~ file: LoginForm.vue:29 ~ onSubmit ~ isLogin', isLogin)

    if (isLogin.status === 201) {
      authStore.loginUser(loginInfo.loginId)
      router.push('/main')
    }
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const { response } = error
      if (response?.status === 403) alreadyJoinUs.value = true
      console.log(
        '🚀 ~ file: LoginLayout.vue ~ line 43 ~ onSubmit ~ response?.status',
        response?.status,
      )
      console.log('잘못된 아이디 : ', response)
    }
  }
}

const onReset = () => {
  email.value = null
  password.value = null
  accept.value = false
}
</script>
<template>
  <div>
    <BaseDialog v-model="alreadyJoinUs" />
    <div class="login-layout q-gutter-xs">
      <q-form @submit="onSubmit" @reset="onReset" class="login-form">
        <h3 class="text-center">Login</h3>
        <h5 class="text-center">반가워요!</h5>

        <q-input
          outlined
          placeholder="Enter Email"
          v-model="loginInfo.loginId"
          lazy-rules
          :rules="[val => (val && val.length > 0) || 'Please type something']"
        />

        <q-input
          outlined
          placeholder="Enter Password"
          type="text"
          v-model="loginInfo.password"
          lazy-rules
          :rules="[val => (val && val.length > 0) || 'Please type something']"
        />
        <h6 class="text-left">Having trouble in sign in?</h6>
        <div class="row">
          <q-btn type="submit" class="sign-btn"> Sign In</q-btn>
        </div>
        <h5>Social Login</h5>
        <div class="join-btns row justify-center q-gutter-sm">
          <q-btn class="col">GOOGLE</q-btn>
          <q-btn class="col">GITHUB</q-btn>
          <q-btn class="col">KAKAO</q-btn>
        </div>
        <h6>Don't have an account? Request Now</h6>
      </q-form>
    </div>
  </div>
</template>
<style scpoe>
.login-layout {
  left: 50%;
  top: 50%;
  position: absolute;
  transform: translate(-50%, -50%);
}

body {
  align-items: center;
  background-color: #f5f2ea;
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  display: grid;
  height: 100vh;
  place-items: center;
}

.q-form {
  background-color: #ffffff;
  align-content: center;

  border-radius: 25px;
  width: 450px;
}
.q-form h3 {
  padding-top: 2rem;
}

.q-input {
  width: 400px;
}
</style>
