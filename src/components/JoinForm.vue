<script setup lang="ts">
//
// import { useQuasar } from 'quasar';
import AuthService, { LoginInfo } from 'src/derectives/axios.api';
import { reactive, ref } from 'vue';
import { useRouter } from 'vue-router';
import { useAuthStore } from 'stores/example-store';
import BaseDialog from 'src/components/BaseDialog.vue';
import axios from 'axios';

const router = useRouter();
const authStore = useAuthStore();
// const $q = useQuasar();

const email = ref(null);
const password = ref(null);
const accept = ref(false);
const alreadyJoinUs = ref(false);
const loginInfo = reactive<LoginInfo>({
  loginId: '',
  password: '',
});
const onSubmit = async () => {
  try {
    const isLogin = await AuthService.join(
      loginInfo.loginId,
      loginInfo.password
    );

    authStore.joinUser(
      loginInfo.loginId,
      isLogin.data.access_token,
      isLogin.data.refresh_token
    );

    authStore.findLoginUser();

    if (isLogin.status === 201) {
      console.log('push : ');
      router.push('/main');
    }
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const { response } = error;
      if (response?.status === 400) alreadyJoinUs.value = true;
      console.log(
        '🚀 ~ file: LoginLayout.vue ~ line 43 ~ onSubmit ~ response?.status',
        response?.status
      );
      console.log('이미 회원가입 되어있음 : ', response);
    }
  }
};

const onReset = () => {
  email.value = null;
  password.value = null;
  accept.value = false;
};
</script>
<template>
  <div class="background-color: red">
    <BaseDialog v-model="alreadyJoinUs" />
    <div class="login-layout q-gutter-xs">
      <div class="login-form q-pa-md">
        <h1 class="text-center" t>Join</h1>
        <h5 class="text-center">반가워요!</h5>

        <q-form
          @submit="onSubmit"
          @reset="onReset"
          style="width: 500px"
          class="q-gutter-md"
        >
          <q-input
            outlined
            placeholder="Enter Email"
            v-model="loginInfo.loginId"
            lazy-rules
            :rules="[
              (val) => (val && val.length > 0) || 'Please type something',
            ]"
          />

          <q-input
            outlined
            placeholder="Enter Password"
            type="text"
            v-model="loginInfo.password"
            lazy-rules
            :rules="[
              (val) => (val && val.length > 0) || 'Please type something',
            ]"
          />
          <h6 class="text-left">Having trouble in sign in?</h6>
          <div class="row">
            <q-btn type="submit" class="sign-btn"> Sign In</q-btn>
          </div>
          <p>{{ alreadyJoinUs }}</p>
        </q-form>
      </div>
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

.login-form {
  width: 600px;
  border-radius: 20px;
  background-color: #ffffff;
  border-radius: 20px;
  /* background-color: #e9e9e9; */
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 0 3rem;
  height: 100%;
  text-align: center;
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

.sign-btn {
  /* justify-content: center; */
  margin-top: 1rem;
  margin-bottom: 1rem;
  width: 100%;
  background-color: #fdc886;
  border: 0px;
  box-shadow: none;
  font-size: x-large;
}

.join-btns {
  height: 60px;
  font-size: 3rem;
}
</style>
