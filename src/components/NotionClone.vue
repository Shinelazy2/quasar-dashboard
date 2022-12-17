<script setup lang="ts">
import { computed, ref, watch } from 'vue';
import SlashMenu from './notion/SlashMenu.vue';
import SlashTest from './notion/SlashTest.vue';
const html = ref(null);
const isEnterSlash = ref(false);
const editable = ref('');
const valuesAfterSlash = ref('');

const enterKeyDown = (event: any) => {
  if (isEnterSlash.value) {
    return;
  }
  switch (event.key) {
    case '/':
      isEnterSlash.value = true;
      break;

    default:
      break;
  }
  console.log(
    '🚀 ~ file: NotionClone.vue:24 ~ enterKeyDown ~ event.target.value',
    event.target.value
  );

  if (event.target.innerText.startsWith('/')) {
    // Extract the values after the slash
    valuesAfterSlash.value = event.target.innerText.substring(1);
  } else {
    valuesAfterSlash.value = '';
  }
};

const eventHandler = (event: any) => {
  editable.value = event.target.innerText;
  console.log(
    '🚀 ~ file: NotionClone.vue:23 ~ eventHandler ~ editable.value',
    editable.value
  );
  return editable.value;
};

const editableSubString = computed(() => {
  const index = editable.value.lastIndexOf('/');
  console.log(
    '🚀 ~ file: NotionClone.vue:46 ~ editableSubString ~ index',
    index
  );
  if (index !== -1) {
    return editable.value.substring(index + 1, editable.value.length);
  } else {
    return '';
  }
});

//TODO: 슬래쉬를 입력한 시점 부터 넘겨야됨..?
</script>
<template>
  <iframe src="http://localhost:9000"></iframe>
</template>
<style scpoe lang="scss">
.text-area {
  width: 100%;
  // background: rgba(255, 255, 255, 0.01);
  // background-color: aquamarine;
  border-radius: 5px;
  padding: 2px 0px;
  margin-bottom: 5px !important;
  outline: none;
  cursor: text;

  // [contenteditable='true']:empty:before {
  //   content: attr(placeholder);
  //   display: block; /* For Firefox */
  // }

  // div[contenteditable='true'] {
  //   border: 1px solid #ddd;
  //   color: #333;
  //   font-size: 12px;
  //   width: 300px;
  //   padding: 5px;
  // }
  // &[placeholder]:empty:before {
  //   display: block;
  //   content: attrs(placeholder);
  //   color: #a6a6a6;
  // }
  // &:empty:before {
  //   content: attr(placeholder);
  //   color: rgba(255, 255, 255, 0.2) !important;
  //   -webkit-text-fill-color: rgba(255, 255, 255, 0.2) !important;
  // }

  // [contentEditable='true']:empty:not(:focus):before {
  //   content: attr(data-text);
  // }

  // [contenteditable='true']:empty:before {
  //   content: attr(placeholder);
  // }
  // ::before {
  //   content: attr(placeholder);
  // }
}
.text-area:empty:before {
  content: attr(placeholder);
  color: rgba(0, 0, 0, 0.317) !important;
}
iframe {
  width: 100%;
  height: 1000px;
  border: 2px solid #ccc;
  border-radius: 10px;
  padding: none;
}
</style>
