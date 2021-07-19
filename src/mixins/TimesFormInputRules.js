import { required } from "vuelidate/lib/validators";

export default {
  validations: {
    dateStart: {
      required
    },
    dateEnd: {
      required
    },
    startTime: {
      required
    },
    endTime: {
      required
    }
  },
  computed: {
    dateStartErrors() {
      const errors = [];
      if (
        this.$v.dateStart.$dirty &&
        !this.$v.dateStart.required &&
        !this.dates.length
      ) {
        errors.push("Обязательно для заполнения.");
      }
      return errors;
    },
    dateEndErrors() {
      const errors = [];
      if (
        this.$v.dateEnd.$dirty &&
        !this.$v.dateEnd.required &&
        !this.dates.length
      ) {
        errors.push("Обязательно для заполнения.");
      }
      return errors;
    },
    startTimeErrors() {
      const errors = [];
      if (
        this.$v.startTime.$dirty &&
        !this.$v.startTime.required &&
        !this.dates.length
      ) {
        errors.push("Обязательно для заполнения.");
      }
      return errors;
    },
    endTimeErrors() {
      const errors = [];
      if (
        this.$v.endTime.$dirty &&
        !this.$v.endTime.required &&
        !this.dates.length
      ) {
        errors.push("Обязательно для заполнения.");
      }
      return errors;
    }
  }
};
