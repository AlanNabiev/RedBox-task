<template>
  <div class="title">
    <h1
      :style="`font-weight: ${fw};
                    font-size: ${fs}px;
                    color: ${textColor};
                    margin-bottom: ${mb}px;
                    margin-top: ${mt}px;`"
      class="title__value"
    >
      {{ titleString }}
    </h1>
  </div>
</template>

<script>
export default {
  name: "BaseTitle",
  props: {
    titleString: String,
    fw: {
      type: String,
      default: "600",
    },
    fs: {
      type: String,
      default: "18",
    },
    textColor: {
      type: String,
      default: "#211536",
    },
    mt: {
      type: String,
      default: "40",
    },
    mb: {
      type: String,
      default: "30",
    },
  },
};
</script>

<style lang="scss" scoped></style>
