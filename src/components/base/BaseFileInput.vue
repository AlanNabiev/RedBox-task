<template>
  <div class="file__input--container">
    <div
      class="drop-photo-input drop-photo-input-dropzone"
      @dragover="dragover"
      @dragleave="dragleave"
      @drop="drop"
    >
      <label class="drop-photo-input__label">
        <div v-if="!file" class="drop-photo-input__title">
          <div v-if="initPhoto">
            <img :src="initPhoto" alt="" />
          </div>
          <div v-else>
            <svg
              width="47"
              height="41"
              viewBox="0 0 47 41"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M34.0107 8.33337L33.6584 7.33064L31.6431 1.59554C31.6431 1.59533 31.643 1.59512 31.6429 1.59491C31.6224 1.53705 31.5944 1.50993 31.5823 1.50091C31.5819 1.50058 31.5815 1.50028 31.5811 1.5H15.4188C15.4185 1.50022 15.4182 1.50045 15.4179 1.50069C15.4062 1.50944 15.3784 1.5363 15.3579 1.59427L34.0107 8.33337ZM34.0107 8.33337H35.0735H44.389C44.8808 8.33337 45.5 8.81416 45.5 9.68046V9.68054V38.1528C45.5 39.0192 44.8807 39.5 44.3889 39.5H2.61108C2.11938 39.5 1.5 39.0192 1.5 38.1527V9.68054C1.5 8.81417 2.11935 8.33337 2.61108 8.33337H11.926H12.9887L13.3411 7.33086L15.3577 1.59466L34.0107 8.33337Z"
                stroke="#9B63F8"
                stroke-width="3"
              />
              <path
                d="M13.9799 22.5487C13.9799 16.6273 18.3708 12.0334 23.4988 12.0334C28.6268 12.0334 33.0178 16.6268 33.0178 22.5487C33.0178 28.4707 28.6268 33.0645 23.4988 33.0645C18.3708 33.0645 13.9799 28.4707 13.9799 22.5487Z"
                stroke="#9B63F8"
                stroke-width="3"
              />
              <path
                d="M22.1602 16.6711H24.9892V29.1744H22.1602V16.6711Z"
                fill="#9B63F8"
              />
              <path
                d="M17.9167 24.4856V21.3598H29.2326V24.4856H17.9167Z"
                fill="#9B63F8"
              />
            </svg>
          </div>
        </div>
        <div v-else class="drop-photo-input__photo">
          <svg
            @click.prevent="deletePhoto()"
            class="drop-photo-input__remove"
            width="30"
            height="30"
            viewBox="0 0 30 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="15" cy="15" r="15" fill="#351767" />
            <path
              d="M9.16663 9.16666L20.6571 20.6571M20.9857 9.16666L9.4952 20.6571"
              stroke="white"
              stroke-width="2"
            />
          </svg>
          <img :src="imageData" class="img-responsive" alt="photo" />
        </div>
        <input
          ref="file"
          type="file"
          accept="image/jpeg,image/png,image/gif"
          @change="onChange($event)"
          @input="$emit('input', $event.target.value)"
        />
      </label>
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
  data: () => ({
    file: null,
    imageData: ""
  }),
  // eslint-disable-next-line
  props: {
    initPhoto: String,
    validationErrors: Array
  },
  created() {
    this.imageData = this.initPhoto;
    this.file = this.initPhoto;
  },
  watch: {
    imageData(val) {
      this.$emit("input", val);
    }
  },
  methods: {
    deletePhoto() {
      this.imageData = "";
      this.file = null;
      this.$refs.file.value = null;
    },
    onChange() {
      this.file = this.$refs.file.files[0];
      const reader = new FileReader();
      reader.onload = (e) => {
        this.imageData = e.target.result;
      };
      if (this.file) {
        reader.readAsDataURL(this.file);
      }
    },
    dragover(event) {
      event.preventDefault();
      // Add some visual fluff to show the user can drop its files
      if (!event.currentTarget.classList.contains("dropzone--active")) {
        event.currentTarget.classList.remove("dropzone--disabled");
        event.currentTarget.classList.add("dropzone--active");
      }
    },
    dragleave(event) {
      // Clean up
      event.currentTarget.classList.add("dropzone--disabled");
      event.currentTarget.classList.remove("dropzone--active");
    },
    drop(event) {
      event.preventDefault();
      this.$refs.file.files = event.dataTransfer.files;
      this.onChange(); // Trigger the onChange event manually
      // Clean up
      event.currentTarget.classList.add("dropzone--disabled");
      event.currentTarget.classList.remove("dropzone--active");
    }
  }
};
</script>

<style scoped lang="scss">
.file__input--container {
  position: relative;
}
.drop-photo-input {
  border: 4px solid #cdb1fb;
  border-radius: 4px;
  width: 126px;
  position: relative;
  height: 126px;
  display: flex;
  justify-content: center;
  align-items: center;
  &__remove {
    cursor: pointer;
  }
  &__photo {
    svg {
      position: absolute;
      right: -17px;
      top: -19px;
    }
  }
  &__label {
    max-width: 100%;
    cursor: pointer;
  }
  .img-responsive {
    max-width: 100%;
  }
  input {
    opacity: 0;
    position: absolute;
  }
}
</style>
