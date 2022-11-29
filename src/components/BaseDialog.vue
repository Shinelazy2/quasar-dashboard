<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps({
  modelValue: Boolean,
});

const emit = defineEmits(['update:modelValue']);

const model = computed({
  get: () => !!props.modelValue,
  set: (val) => {
    emit('update:modelValue', val);
  },
});
</script>
<template>
  <q-dialog v-model="model">
    <q-card style="width: 300px">
      <q-card-section>
        <div class="text-h6">Small</div>
      </q-card-section>

      <q-card-section class="q-pt-none">
        Click/Tap on the backdrop.
      </q-card-section>

      <q-card-actions align="right" class="bg-white text-teal">
        <q-btn flat label="OK" v-close-popup />
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>
<style scpoe></style>
