<template>
  <div class="result__container">
    <div class="result__container--notice">
      <div class="result__mark">
        <div class="result__mark--exclamation">!</div>
      </div>
      <div class="result__notice--text">
        Проверьте ваше мероприятие на наличие ошибок, если все в порядке -
        отправляйте на модерацию.
      </div>
    </div>
    <div class="result__content">
      <div class="result__content__rating">
        <img
          class="result__content__rating--bg"
          src="@/assets/icons/rectangle.svg"
          alt=""
        />
        <p class="result__content__rating--text">18+</p>
      </div>

      <div class="result__content--info">
        <div class="result__content--title">
          {{ formData.name }}
        </div>
        <base-output icon="location"
          >г. {{ formData.cityOrganisator }},
          {{ formData.address }}</base-output
        >
        <div v-for="(date, idx) in Dates" :key="idx">
          <base-output icon="calendar"
            >{{ DateFormatting(date.startingDate) }},
            {{ DateFormatting(date.endingDate) }}</base-output
          >
          <base-output icon="watches"
            >{{ date.startingTime }} - {{ date.endingTime }}</base-output
          >
        </div>
        <base-title class="mt-23 mb-0" titleString="Контакты"></base-title>
        <base-output icon="phone">{{ formData.phone }}</base-output>
        <base-output icon="mail">{{ formData.email }}</base-output>
        <base-title
          :titleString="`${formData.organiser}`"
          mt="25"
          mb="1"
          fw="normal"
        ></base-title>
        <p class="result__content--description">Организатор мероприятия</p>
      </div>
      <div class="result__content--img">
        <img :src="`${formData.image}`" alt="" />
      </div>
    </div>
    <div class="result__content--about">
      <p>
        {{ formData.description }}
      </p>
    </div>
    <div class="result__container--nav flex">
      <router-link :to="{ name: 'MainForm' }">
        <base-button class="nav-btn mr-5">Назад</base-button>
      </router-link>
      <base-button class="nav-btn">Отправить на модерацию</base-button>
    </div>
  </div>
</template>

<script>
import BaseButton from "../components/base/BaseButton.vue";
import BaseOutput from "../components/base/BaseOutput.vue";
import BaseTitle from "../components/base/BaseTitle.vue";
import DateFormatting from "@/mixins/DateFormatting.js";

export default {
  name: "ConfirmingForm",
  mixins: [DateFormatting],
  components: { BaseOutput, BaseTitle, BaseButton },
  computed: {
    formData() {
      return this.$store.getters.formData;
    },
    Dates() {
      return this.$store.getters.Dates;
    }
  }
};
</script>

<style lang="scss" scoped>
.result__container {
  padding: 30px;
  &--notice {
    width: 100%;
    height: 80px;
    box-shadow: 0px 8px 25px rgba(155, 99, 248, 0.15);
    border-radius: 4px;
    display: inline-flex;
    align-items: center;
    padding-left: 25px;
    .result__mark {
      width: 45px;
      height: 45px;
      background-color: #ff2998;
      border: 2px solid #ff2998;
      border-radius: 50%;
      display: flex;
      justify-content: center;
      .result__mark--exclamation {
        font-weight: bold;
        font-size: 32px;
        color: #ffffff;
      }
    }
    .result__notice--text {
      font-weight: 600;
      font-size: 18px;
      color: #211536;
      margin-left: 21px;
    }
  }

  .result__content {
    margin-top: 60px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    &--about {
      margin-top: 30px;
    }
    &--title {
      font-weight: 800;
      font-size: 32px;
      color: #351768;
      line-height: 39px;
    }
    &--info {
      width: 415px;
      height: 385px;
    }
    &--description {
      font-weight: 500;
      font-size: 10px;
      color: #8e69cc;
    }
    &__rating {
      position: relative;
      &--text {
        position: absolute;
        top: 10px;
        left: 10px;
        font-weight: 600;
        font-size: 18px;
        color: #ffffff;
      }
    }
  }
}
</style>
