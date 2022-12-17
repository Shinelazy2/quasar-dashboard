<script setup lang="ts">
import { computed, ref } from 'vue';
const inputString = ref('');
const emit = defineEmits(['update:modelValue', 'update:innerText']);
const setModel = (val: string) => {
  inputString.value = val;
};
const model = computed({
  get: () => !!props.modelValue,
  set: (val) => {
    emit('update:modelValue', val);
  },
});
const subString = computed({
  get: () => props.subStrings,
  set: (val) => {
    emit('update:modelValue', val);
  },
});
const props = defineProps({
  modelValue: String,
  innerText: Object,
  subStrings: String,
});

const option = [
  {
    label: 'Google',
    value: 'Google',
    description: 'Search engine',
    icon: 'mail',
  },
  {
    label: 'Facebook',
    value: 'Facebook',
    description: 'Social media',
    icon: 'bluetooth',
  },
  {
    label: 'Twitter',
    value: 'Twitter',
    description: 'Quick updates',
    icon: 'map',
  },
  {
    label: 'Apple',
    value: 'Apple',
    description: 'iStuff',
    icon: 'golf_course',
  },
  {
    label: 'Oracle',
    value: 'Oracle',
    disable: true,
    description: 'Databases',
    icon: 'casino',
  },
];

const options = ref(option);

const filterFn = (val: any, update: any) => {
  val = subString.value;
  if (val === '') {
    update(() => {
      options.value = option;
    });
    return;
  }

  update(() => {
    const needle = val.toLowerCase();
    options.value = options.value.filter(
      (v) => v.label.toLowerCase().indexOf(needle) > -1
    );
  });
};
</script>
<template>
  <p>{{ props.innerText }}</p>
  <div class="q-pa-md">
    <div class="q-gutter-md row">
      <q-select
        class="q-filed--hightlighted"
        menu-self="bottom left"
        :model-value="subString"
        input-debounce="0"
        :options="options"
        @filter="filterFn"
        @input-value="setModel"
        hint="Text autocomplete"
        style="width: 250px; padding-bottom: 32px"
      >
        <!-- autofocus -->

        <!-- <template v-slot:no-option>
          <q-item>
            <q-item-section class="text-grey"> No results </q-item-section>
          </q-item>
        </template> -->

        <template v-slot:option="scope">
          <q-item v-bind="scope.itemProps">
            <q-item-section avatar>
              <q-icon :name="scope.opt.icon" />
            </q-item-section>
            <q-item-section>
              <q-item-label>{{ scope.opt.label }}</q-item-label>
              <q-item-label caption>{{ scope.opt.description }}</q-item-label>
            </q-item-section>
          </q-item>
        </template>
      </q-select>
    </div>
  </div>
</template>
<style scpoe></style>
