<script setup lang="ts">
import LoginForm from 'components/LoginForm.vue';
</script>
<template>
  <q-layout>
    <q-header
      unelevated
      class="login-header no-shadow bg-primary text-black"
      height-hint="98"
    >
      <q-toolbar>
        <!-- <q-btn dense flat round icon="menu" /> -->

        <q-toolbar-title class="q-ma-md">
          <q-avatar color="black">
            <img src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg" />
          </q-avatar>
          Title
        </q-toolbar-title>

        <q-btn flat dense to="signup"> Sign up </q-btn>
      </q-toolbar>

      <!-- <q-tabs align="left">
        <q-route-tab to="/page1" label="Page One" />
        <q-route-tab to="/page2" label="Page Two" />
        <q-route-tab to="/page3" label="Page Three" />
      </q-tabs> -->
    </q-header>
    <RouterView />
    <q-footer> </q-footer>
  </q-layout>
</template>
<style scpoe>
q.header {
  height: 10%;
}
.q-footer {
  height: 10%;
}
</style>
