<script setup></script>

<template>
  <div class="add-food">
    <button @click="$emit('on-click-add-btn')">Добавить</button>
  </div>
</template>

<style lang="scss" scoped>
.add-food > button {
  width: 395px;
  height: 55px;
  margin: 40px 0px;
  background: #2FA6EA;
}
</style>
