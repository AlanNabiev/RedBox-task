<template>
  <div class="textarea">
    <div class="textarea__container">
      <label class="textarea__label">{{ label }}</label>
      <textarea
        @input="$emit('input', $event.target.value)"
        class="textarea__box"
        rows="10"
        placeholder="Coca-Cola"
      />
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
  name: "BaseInput",
  props: {
    value: String,
    label: {
      type: String,
      default: ""
    },
    type: {
      type: String,
      default: "number"
    },
    validationErrors: {
      type: Array
    }
  }
};
</script>

<style lang="scss">
.textarea {
  position: relative;
  &__container {
    @apply flex flex-col;
  }
  &__label {
    color: #211536;
    font-size: 16px;
    font-weight: 600;
    line-height: 1;
    margin-bottom: 5px;
  }

  &__box {
    @apply px-4 py-3 rounded;
    border: 1px solid #cdb1fb;
  }
}
</style>
