<template>
  <div class="calendar">
    <table>
      <thead>
        <tr>
          <th v-for="(title, index) in headtitle" :key="index">{{ title }}</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(week, index) in getcalendar" :key="index" class="week">
          <router-link
            tag="td"
            v-for="(day, index) in week"
            :key="index"
            :to="day !== undefined ? '' + day : '#'"
            :active-class="day !== undefined ? 'red' : 'none'"
          >
            <h3>{{ day }}</h3>
          </router-link>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
  import { mapGetters } from "vuex";
  export default {
    data() {
      return {
        date: new Date(2020, 7),
        dayinmonth: "",
        WEEK_DAYS_FROM_MONDAY: [6, 0, 1, 2, 3, 4, 5],
        headtitle: ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"],
      };
    },
    created() {
      this.date = new Date(
        this.$route.params.year,
        this.GetNumberMonth(this.$route.params.month)
      );
      this.dayinmonth = this.getmonthcount();
    },
    beforeUpdate() {
      this.date = new Date(
        this.$route.params.year,
        this.GetNumberMonth(this.$route.params.month)
      );
      this.dayinmonth = this.getmonthcount();
    },
    computed: {
      ...mapGetters(["GetNumberMonth"]),
      getcalendar() {
        const result = [];
        const monthStartsOn = this.getDayOfWeek();
        let day = 1;
        for (let i = 0; i < (this.dayinmonth + monthStartsOn) / 7; i++) {
          result[i] = [];
          for (let j = 0; j < 7; j++) {
            if ((i === 0 && j < monthStartsOn) || day > this.dayinmonth) {
              result[i][j] = undefined;
            } else {
              result[i][j] = new Date(
                this.$route.params.year,
                this.GetNumberMonth(this.$route.params.month),
                day++
              ).getDate();
            }
          }
        }
        return result;
      },
    },
    methods: {
      getDayOfWeek() {
        return this.WEEK_DAYS_FROM_MONDAY[this.date.getDay()];
      },
      getmonthcount() {
        return new Date(
          this.$route.params.year,
          Number(this.GetNumberMonth(this.$route.params.month)) + 1,
          0
        ).getDate();
      },
    },
  };
</script>

<style scoped>
  table {
    border-collapse: collapse;
    width: 100%;
    height: max-content;
    user-select: none;
  }
  td {
    max-height: 50px;
    height: 50px;
    text-align: end;
    border: 1px solid rgb(221, 221, 221);
    vertical-align: baseline;
    padding: 5px;
    width: 100px;
    cursor: pointer;
  }
  td h3 {
    margin: 0px;
    /* margin-bottom: 5px */
  }
  td:hover {
    background: #eaeae9;
  }
  /* .calendar{
        padding: 10px;
    } */
  thead {
    text-align: end;
  }
  .red {
    color: red;
    outline: 2px solid red;
    outline-offset: -2px;
  }
  /* :style="[$route.params.day == day ? {'border':'2.5px solid red', 'color':'red'}:{'color':'black'}]" */
</style>
