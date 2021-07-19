import { required, minLength, email } from "vuelidate/lib/validators";

export default {
  validations: {
    form: {
      organiser: {
        required,
        minLength: minLength(6)
      },
      email: {
        required,
        email
      },
      description: {
        required
      },
      address: {
        required
      },
      phone: {
        required,
        minLength: minLength(18)
      },
      cityOrganiser: {
        required
      },
      eventName: {
        required
      },
      image: {
        required
      },
      rating: {
        required
      }
    }
  },
  computed: {
    organiserErrors() {
      const errors = [];
      if (this.$v.form.organiser.$dirty) {
        if (!this.$v.form.organiser.required)
          errors.push("Обязательно для заполнения.");
        if (!this.$v.form.organiser.minLength)
          errors.push("Не меньше 6 знаков.");
      }
      return errors;
    },
    emailErrors() {
      const errors = [];
      if (this.$v.form.email.$dirty) {
        if (!this.$v.form.email.required)
          errors.push("Обязательно для заполнения.");
        if (!this.$v.form.email.email) errors.push("Невалидный email.");
      }
      return errors;
    },
    phoneErrors() {
      const errors = [];
      if (this.$v.form.phone.$dirty) {
        if (!this.$v.form.phone.required)
          errors.push("Обязательно для заполнения.");
        if (!this.$v.form.phone.minLength) errors.push("Не меньше 10 знаков.");
      }
      return errors;
    },
    cityOrganiserErrors() {
      const errors = [];
      if (
        !this.$v.form.cityOrganiser.required &&
        this.$v.form.cityOrganiser.$dirty
      )
        errors.push("Обязательно для заполнения.");
      return errors;
    },
    eventNameErrors() {
      const errors = [];
      if (!this.$v.form.eventName.required && this.$v.form.eventName.$dirty)
        errors.push("Обязательно для заполнения.");
      return errors;
    },
    imageErrors() {
      const errors = [];
      if (!this.$v.form.image.required && this.$v.form.image.$dirty)
        errors.push("Обязательно для заполнения.");
      return errors;
    },
    descriptionErrors() {
      const errors = [];
      if (!this.$v.form.description.required && this.$v.form.description.$dirty)
        errors.push("Обязательно для заполнения.");
      return errors;
    },
    ratingErrors() {
      const errors = [];
      if (!this.$v.form.rating.required && this.$v.form.rating.$dirty)
        errors.push("Обязательно для заполнения.");
      return errors;
    },
    addressErrors() {
      const errors = [];
      if (!this.$v.form.address.required && this.$v.form.address.$dirty)
        errors.push("Обязательно для заполнения.");
      return errors;
    }
  }
};
