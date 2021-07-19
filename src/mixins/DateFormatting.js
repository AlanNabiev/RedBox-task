import moment from "moment";
const momentTools = moment;

export default {
  methods: {
    DateFormatting(dateToFormat) {
      return momentTools(dateToFormat, "DD.MM.YYYY")
        .locale("ru")
        .format("DD MMM YYYY (dd)");
    }
  }
};
