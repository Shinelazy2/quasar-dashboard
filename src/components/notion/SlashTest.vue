<template>
  <q-menu activable>
    <q-item>
      <q-item-section>
        <q-item-label>Item 1</q-item-label>
      </q-item-section>
    </q-item>
    <q-item>
      <q-item-section>
        <q-item-label>Item 2</q-item-label>
      </q-item-section>
    </q-item>
  </q-menu>
</template>

<script>
export default {
  data() {
    return {
      searchTerm: '',
      items: [],
    };
  },
  computed: {
    filteredItems() {
      return this.items.filter((item) => item.name.includes(this.searchTerm));
    },
  },
};
</script>
