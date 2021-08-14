<template>
  <div class="input">
    <label class="input__label">{{ label }}</label>
    <div
      :class="
        focusStatus ? 'border-gray-800 border-2' : 'border-purple-300 border'
      "
      class="input__container"
    >
      <input
        @focus="focusChange"
        @blur="focusChange"
        @input="$emit('input', $event.target.value)"
        :placeholder="placeholder"
        :type="type"
        class="input__box"
      />
      <img
        v-if="icon"
        :src="require(`@/assets/icons/${icon}.svg`)"
        class="w-4 h-4 time__output--icon"
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
    placeholder: String,
    label: {
      type: String,
      default: ""
    },
    type: {
      type: String,
      default: "text"
    },
    icon: {
      type: String
    },
    validationErrors: {
      type: Array
    }
  },
  data() {
    return {
      focusStatus: false
    };
  },
  methods: {
    focusChange() {
      this.focusStatus = !this.focusStatus;
    }
  }
};
</script>

<style lang="scss">
.input {
  position: relative;
  &__label {
    color: #211536;
    font-size: 16px;
    font-weight: 600;
    line-height: 1;
    margin-bottom: 5px;
  }

  &__box {
    @apply w-full outline-none;
  }

  &__container {
    @apply px-4 py-3 rounded flex items-center;
  }
}
.Errors__list {
  position: absolute;
  bottom: -25px;
}
</style>
