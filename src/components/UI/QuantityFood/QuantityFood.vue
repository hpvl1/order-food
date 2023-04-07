<script setup>
import { ref } from 'vue';

let quantity = ref(1);

</script>

<template>
  <div class="food-quantity">
    <label>Введите количество</label>
    <input v-model="quantity" type="number" min="1">
  </div>
</template>

<style lang="scss" scoped>

.food-quantity > label {
  display: block;
  margin: 20px 0px;
}

.food-quantity > input {
  width: 390px;
  background: #aed9f8;
}

</style>
