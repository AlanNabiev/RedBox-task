<template>
  <div class="selector__container">
    <div class="input">
      <label class="input__label">{{ label }}</label>
      <select
        class="input__container border border-purple-300 w-full"
        @input="$emit('input', $event.target.value)"
      >
        <option disabled selected>Выберите рейтинг</option>
        <option v-for="option in options" :key="option.index">
          {{ option.title }}
        </option>
      </select>
    </div>
    <div v-if="validationErrors" class="Errors__list">
      <p
        v-for="(error, idx) in validationErrors"
        :key="idx"
        class="text-red-500"
      >
        {{ error }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "BaseSelector",
  data() {
    return {
      options: [
        { index: 1, title: "6+" },
        { index: 2, title: "9+" },
        { index: 3, title: "12+" },
        { index: 4, title: "15+" },
        { index: 5, title: "18+" }
      ]
    };
  },
  props: {
    label: String,
    validationErrors: Array
  }
};
</script>

<style lang="scss">
.selector__container {
  position: relative;
}
.Select__Errors__list {
  position: absolute;
  bottom: -25px;
}
</style>
