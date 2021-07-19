<template>
  <button @click="$emit('click', $event)" class="button">
    <slot />
  </button>
</template>

<script>
export default {
  name: "BaseButton"
};
</script>

<style lang="scss" scoped>
.button {
  margin-top: 35px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 58px;
  border: 1px solid #9b63f8;
  padding: 15px 20px;
  border-radius: 4px;

  font-weight: 600;
  font-size: 16px;
  line-height: 20px;
}
.nav-btn:hover {
  background: #9b63f8;
  color: #fff;
  transition: 0.5s;
}
</style>
