<template>
  <div class="form__container">
    <base-title>Информация об организаторе</base-title>
    <base-input
      class="my-8"
      v-model="form.organiser"
      @input="$v.form.organiser.$touch"
      :validationErrors="organiserErrors"
      label="Организатор"
      placeholder="Coca-Cola"
    ></base-input>
    <base-title>Контактные данные</base-title>
    <div class="grid grid-cols-3 gap-6 my-8">
      <base-input
        v-model="form.phone"
        v-mask="'+7 (###) ###-##-##'"
        @input="$v.form.phone.$touch"
        :validationErrors="phoneErrors"
        label="Телефон"
        placeholder="+7 (XXX) XXX-XX-XX"
      ></base-input>
      <base-input
        v-model="form.email"
        @input="$v.form.email.$touch"
        :validationErrors="emailErrors"
        label="Email"
        placeholder="example@mail.ru"
        type="email"
      ></base-input>
      <base-input
        v-model="form.cityOrganiser"
        @input="$v.form.cityOrganiser.$touch"
        :validationErrors="cityOrganiserErrors"
        label="Город организатора"
        placeholder="Москва"
      ></base-input>
    </div>
    <base-title>Общая информация</base-title>
    <base-input
      class="my-8"
      v-model="form.eventName"
      @input="$v.form.eventName.$touch"
      :validationErrors="eventNameErrors"
      label="Название"
      placeholder="Введите название вашего мероприятия..."
    ></base-input>
    <base-title>Фотография</base-title>
    <base-file-input
      :initPhoto="form.image"
      v-model="form.image"
      @input="$v.form.image.$touch"
      :validationErrors="imageErrors"
    ></base-file-input>
    <base-textarea-input
      v-model="form.description"
      @input="$v.form.description.$touch"
      :validationErrors="descriptionErrors"
      class="mt-16"
      label="Подробное описание"
      placeholder="Опишите мероприятие.."
    ></base-textarea-input>
    <EventTimer />
    <div class="mt-12 grid grid-cols-2 gap-6">
      <base-selector
        v-model="form.rating"
        :validationErrors="ratingErrors"
        label="Рейтинг мероприятия"
        :options="ratings"
      ></base-selector>
      <base-input
        v-model="form.address"
        label="Адрес мероприятия"
        @input="$v.form.address.$touch"
        :validationErrors="addressErrors"
      ></base-input>
    </div>
    <div class="flex">
      <base-button @click="clearForm" class="mr-5 nav-btn" width="285"
        >Отменить</base-button
      >
      <base-button @click="next" class="nav-btn">Далее</base-button>
    </div>
    {{ form }}
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import FormInputRulesMixin from "@/mixins/FormInputRules.js";
import EventTimer from "@/components/common/EventTimer.vue";
export default {
  name: "MainForm",
  components: { EventTimer },
  mixins: [FormInputRulesMixin],
  data() {
    return {
      form: {
        description: "",
        address: "",
        organiser: "",
        phone: "",
        email: "",
        cityOrganiser: "",
        eventName: "",
        rating: "",
        image: ""
      }
    };
  },
  computed: {
    ...mapGetters({
      ratings: "raitings/ratings"
    })
  },
  methods: {
    ...mapActions({
      fetchRaitings: "raitings/fetchRaitings"
    }),
    clearForm() {
      window.location.reload();
    },
    next() {
      this.$v.form.$touch();
      this.$store.dispatch("sendtimerValidate", "invalid");
      if (!this.$v.form.$error) {
        this.$store.dispatch("sendFormData", this.form);
        this.$router.push({ name: "ConfirmingForm" });
      } else {
        console.log("hasErrors");
      }
    },
    created() {
      this.fetchRaitings();
    }
  }
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600&display=swap");

body {
  font-family: "Montserrat", sans-serif;
  line-height: 1;
  color: #211536;
  .form__container {
    padding: 40px;
  }
}
</style>
