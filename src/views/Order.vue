<script setup>
import SelectFood from '../components/UI/SelectFood/SelectFood.vue';
import QuantityFood from '../components/UI/QuantityFood/QuantityFood.vue';
import AddFoodBtn from '../components/UI/AddFoodBtn/AddFoodBtn.vue';
import ListProducts from '../components/UI/ListProducts/ListProducts.vue';


function onClickAddBtn() {
}

</script>


<template>
  <div>
    <header class="header"></header>
    <SelectFood />
    <QuantityFood />
    <AddFoodBtn @on-click-add-btn="onClickAddBtn" />
    <ListProducts />
  </div>
</template>

<style lang="scss" scoped>
.header {
  height: 60px;
  width: 100%;
  background-color: #755858;
}
</style>
