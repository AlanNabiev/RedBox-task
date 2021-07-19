<template>
  <div class="input">
    <label class="input__label">{{ label }}</label>
    <div class="input--timepicker__container">
      <slot name="content"></slot>
      <p class="date__input--value"><slot name="value"></slot></p>
      <p v-if="inputValue === null" class="date__input--value text-gray-300">
        {{ placeholder }}
      </p>
      <img
        :src="require(`@/assets/icons/${icon}.svg`)"
        class="w-4 h-4 time__output--icon"
      />
    </div>
    <div v-if="validationErrors" class="Timer__Errors__list">
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
  name: "DateAndTimeInput",
  data() {
    return {};
  },
  props: {
    label: {
      type: String,
      default: "Label"
    },
    icon: {
      type: String
    },
    placeholder: {
      type: String,
      default: "ДД.ММ.ГГГГ"
    },
    inputValue: {
      type: [String, Number],
      default: null
    },
    validationErrors: {
      type: Array
    }
  }
};
</script>

<style lang="scss">
.input--timepicker__container {
  @apply px-1 py-1 rounded flex items-center;
  border: 1px solid #cdb1fb;
  position: relative;
}
.time__input--value {
  position: absolute;
  right: 45px;
  z-index: -1;
}
.el-time-select {
  opacity: 0;
}

.time__output--icon {
  position: absolute;
  right: 20px;
  z-index: -1;
}
.date__input--value {
  position: absolute;
  left: 20px;
  z-index: -1;
}
.clear-icon {
  display: none;
}
.Timer__Errors__list {
  font-size: 15px;
  position: absolute;
  bottom: -25px;
}
</style>
