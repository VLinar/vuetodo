<template>
  <div>
    <span class="red" v-if="SurelyToday()">СЕГОДНЯ</span>
    <div class="date">
      <h2>{{ this.GetFullDateStr().dayweek }},</h2>
      <h2>{{ this.GetFullDateStr().date }}</h2>
    </div>
  </div>
</template>

<script>
  import { mapGetters } from "vuex";

  export default {
    data() {
      return {
        today: new Date(),
      };
    },
    created() {
      // this.today =
      this.today.setHours(0, 0, 0);
    },
    computed: {
      ...mapGetters(["GetNumberMonth", "GetMoodMonth"]),
    },
    methods: {
      SurelyToday() {
        let datetoday = new Date(
          this.$route.params.year,
          this.GetNumberMonth(this.$route.params.month),
          this.$route.params.day
        );
        return this.today.toString() === datetoday.toString() ? true : false;
      },
      DayOfWeek(day) {
        switch (day) {
          case 1:
            return "Понедельник";
          case 2:
            return "Вторник";
          case 3:
            return "Среда";
          case 4:
            return "Четверг";
          case 5:
            return "Пятница";
          case 6:
            return "Суббота";
          case 0:
            return "Воскресенье";
        }
      },
      GetFullDateStr() {
        let fulldate = new Date(
          this.$route.params.year,
          this.GetNumberMonth(this.$route.params.month),
          this.$route.params.day
        );

        let date = this.GetDayMonth(
          this.$route.params.day,
          this.$route.params.month
        );
        let dayweek = this.DayOfWeek(fulldate.getDay());

        let obj = {};
        obj.dayweek = dayweek;
        obj.date = date;

        return obj;
      },
      GetDayMonth(day, month) {
        let M = this.GetMoodMonth(month);
        return `${day} ${M}`;
      },
    },
  };
</script>

<style scoped>
  .red {
    color: red;
    font-size: 12px;
  }
  .date {
    margin: 15px 0px;
  }
  h2 {
    margin: 0px;
  }
</style>
