<template>
  <div class="timer">
    <div v-for="(date, idx) in dates" :key="idx" class="output__row px-6 mb-9">
      <div class="output__row--items grid grid-cols-9 gap-6">
        <base-output-time-item
          label="Дата начала"
          class="col-span-2"
          icon="calendar"
          >{{ date.startingDate }}</base-output-time-item
        >
        <base-output-time-item
          label="Время начала"
          class="col-span-2"
          icon="watches"
          >{{ date.startingTime }}</base-output-time-item
        >
        <div class="hyphen__box">
          <div class="col-span-1 hyphen"></div>
        </div>
        <base-output-time-item
          label="Дата окончания"
          class="col-span-2"
          icon="calendar"
          >{{ date.endingDate }}</base-output-time-item
        >
        <base-output-time-item
          label="Время окончания"
          class="col-span-2"
          icon="watches"
          >{{ date.endingTime }}</base-output-time-item
        >
      </div>
      <div class="output__row--drop-btn">
        <svg
          @click.prevent="deleteOutputRow(date)"
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
      </div>
    </div>

    <div class="timer__input grid grid-cols-5 gap-4">
      <base-date-and-time-input
        label="Дата начало"
        placeholder="ДД.ММ.ГГГГ"
        icon="calendar"
        :inputValue="this.dateStart"
        :validationErrors="dateStartErrors"
      >
        <template v-slot:content
          ><el-date-picker
            v-model="dateStart"
            clear-icon="clear-icon"
            type="date"
            format="dd.MM.yyyy"
            value-format="dd.MM.yyyy"
            class="input__box el-time-select"
            :picker-options="{
              disabledDate(time) {
                return time.getTime() < Date.now();
              }
            }"
          >
          </el-date-picker
        ></template>
        <template v-slot:value>
          {{ dateStart }}
        </template>
      </base-date-and-time-input>
      <base-date-and-time-input
        label="Время начало"
        placeholder="ЧЧ:ММ"
        icon="watches"
        :inputValue="this.startTime"
        :validationErrors="startTimeErrors"
      >
        <template v-slot:content
          ><el-time-select
            clear-icon="clear-icon"
            v-model="startTime"
            :picker-options="{
              start: '08:30',
              step: '00:15',
              end: '22:30'
            }"
            v-mask="'##:##'"
            class="input__box el-time-select"
          >
          </el-time-select
        ></template>
        <template v-slot:value>
          {{ startTime }}
        </template>
      </base-date-and-time-input>
      <div class="dash__box">
        <div class="dash"></div>
      </div>
      <base-date-and-time-input
        label="Дата окончания"
        placeholder="ДД.ММ.ГГГГ"
        icon="calendar"
        :inputValue="this.dateEnd"
        :validationErrors="dateEndErrors"
      >
        <template v-slot:content
          ><el-date-picker
            v-model="dateEnd"
            clear-icon="clear-icon"
            type="date"
            format="dd.MM.yyyy"
            value-format="dd.MM.yyyy"
            class="input__box el-time-select"
            :picker-options="{
              disabledDate(time) {
                return time.getTime() < Date.now();
              }
            }"
          >
          </el-date-picker
        ></template>
        <template v-slot:value>
          {{ dateEnd }}
        </template>
      </base-date-and-time-input>
      <base-date-and-time-input
        label="Время окончания"
        placeholder="ЧЧ:ММ"
        icon="watches"
        :inputValue="this.endTime"
        :validationErrors="endTimeErrors"
      >
        <template v-slot:content
          ><el-time-select
            clear-icon="clear-icon"
            v-model="endTime"
            :picker-options="{
              start: '08:30',
              step: '00:15',
              end: '22:30'
            }"
            v-mask="'##:##'"
            class="input__box el-time-select"
          >
          </el-time-select
        ></template>
        <template v-slot:value>
          {{ endTime }}
        </template>
      </base-date-and-time-input>
    </div>
    <base-button @click="addDateForm" class="nav-btn"
      >+ Добавить дату</base-button
    >
    <p
      v-if="
        this.$store.state['formData'].Dates.length &&
        this.$store.state['timerValidate'].timerValidate
      "
      class="text-red-500 timer__error"
    >
      Не меньше 1 временного интервала
    </p>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import BaseDateAndTimeInput from "./BaseDateAndTimeInput.vue";
import BaseOutputTimeItem from "./BaseOutputTimeItem.vue";
import TimesFormInputRulesMixin from "@/mixins/TimesFormInputRules.js";

export default {
  name: "BaseTimer",
  components: {
    BaseOutputTimeItem,
    BaseDateAndTimeInput
  },
  mixins: [TimesFormInputRulesMixin],
  data() {
    return {
      dateStart: null,
      startTime: null,
      dateEnd: null,
      endTime: null,
      dates: []
    };
  },
  computed: {
    ...mapGetters({
      Dates: "formData/Dates"
    })
  },
  methods: {
    ...mapActions({
      sendDates: "formData/sendDates"
    }),
    addDateForm() {
      this.$v.$touch();
      const currentDates = {
        startingDate: this.dateStart,
        startingTime: this.startTime,
        endingDate: this.dateEnd,
        endingTime: this.endTime
      };

      if (
        this.dateStart !== null &&
        this.startTime !== null &&
        this.dateEnd !== null &&
        this.endTime !== null
      ) {
        this.dates = [...this.dates, currentDates];
        this.$store.dispatch("sendDates", this.dates);

        this.dateStart = null;
        this.startTime = null;
        this.dateEnd = null;
        this.endTime = null;
      } else {
        this.timerValidate = true;
      }
    },
    deleteOutputRow(RowToRemove) {
      this.dates = this.dates.filter((date) => date !== RowToRemove);
      this.$store.state["formData"].Dates = this.$store.state[
        "formData"
      ].Dates.filter((date) => date !== RowToRemove);
    }
  }
};
</script>

<style lang="scss">
.output__row {
  background: #faf7fe;
  position: relative;
  padding-top: 50px;
  padding-bottom: 22px;
  &--drop-btn {
    position: absolute;
    right: -17px;
    top: -19px;
    cursor: pointer;
  }
}
.dash__box,
.hyphen__box {
  display: flex;
  justify-content: center;
}
.hyphen__box {
  align-items: center;
}

.dash {
  width: 55px;
  margin-top: 45px;
}
.hyphen {
  width: 22px;
}
.dash,
.hyphen {
  height: 2px;
  background: #cdb1fb;
  border-radius: 5px;
}
.timer {
  margin-top: 75px;
}
.timer__error {
  margin: 0 auto;
}
</style>
