<script setup lang="ts">
import { ref } from 'vue'
import DrawerItem from 'components/DrawerItem.vue'
type drawItemType = {
  name: string
  icon: string
  index: number
  to: string
}

const drawItems = ref<drawItemType[]>([
  {
    name: 'dashBoard',
    icon: 'star',
    index: 1,
    to: 'main/dashboard',
  },
  {
    name: 'Notion',
    icon: 'done',
    index: 2,
    to: 'main/notion',
  },
  {
    name: '휴가',
    icon: 'done',
    index: 3,
    to: 'main/vacation',
  },
  {
    name: '인증?',
    icon: 'done',
    index: 3,
    to: 'main/test',
  },
])
const drawer = ref(false)

const toggleLeftDrawer = () => {
  drawer.value = !drawer.value
}
</script>

<template>
  <q-layout view="hHh lpR fFf">
    <q-header elevated class="bg-primary text-black" height-hint="98">
      <q-toolbar>
        <q-btn dense flat round icon="menu" @click="toggleLeftDrawer" />

        <q-toolbar-title>
          <q-avatar color="black">
            <img src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg" />
          </q-avatar>
          Title
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="drawer" show-if-above :width="200" :breakpoint="500">
      <q-scroll-area class="fit">
        <q-list padding class="menu-list">
          <DrawerItem :drawer-items="drawItems" />
        </q-list>
      </q-scroll-area>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<style scoped>
.menu-list .q-item {
  border-radius: 0 32px 32px 0;
}

.active {
  color: black;
}
</style>
