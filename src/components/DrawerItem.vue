<script setup lang="ts">
const props = defineProps({
  drawerItems: Object,
});
</script>
<template>
  <q-item
    v-for="item in props.drawerItems"
    :key="item.index"
    clickable
    v-ripple
    :to="item.to"
  >
    <q-item-section avatar>
      <q-icon :name="item.icon" />
    </q-item-section>
    <q-item-section> {{ item.name }} </q-item-section>
  </q-item>
</template>
<style scpoe></style>
