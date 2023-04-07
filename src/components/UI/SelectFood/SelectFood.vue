<script setup>
import { reactive, computed } from 'vue';

import { getProducts } from '/src/api/index.js';

const state = reactive({
  products: [],
  food: {
    name: null,
    quantity: null,
  },
});

state.products = await getProducts();

const getProductsName = computed(() => {
  return state.products.map((product) => product.title);
});


</script>

<template>
  <div>
    <v-select
      v-model="state.food.name"
      :options="getProductsName"
      placeholder="Поиск стран"
      class="select"
      :searchable="true"
      :filterable="true"
      append-to-body
    />
  </div>
</template>

<style scoped></style>
