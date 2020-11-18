import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    mounth: [
      {
        id: 0,
        name: "Январь",
        title: "january",
        mood: "января",
      },
      {
        id: 1,
        name: "Февраль",
        title: "februal",
        mood: "февраля",
      },
      {
        id: 2,
        name: "Март",
        title: "mart",
        mood: "марта",
      },
      {
        id: 3,
        name: "Апрель",
        title: "april",
        mood: "апреля",
      },
      {
        id: 4,
        name: "Май",
        title: "may",
        mood: "мая",
      },
      {
        id: 5,
        name: "Июнь",
        title: "june",
        mood: "июня",
      },
      {
        id: 6,
        name: "Июль",
        title: "jule",
        mood: "июля",
      },
      {
        id: 7,
        name: "Август",
        title: "august",
        mood: "августа",
      },
      {
        id: 8,
        name: "Сентябрь",
        title: "september",
        mood: "сентября",
      },
      {
        id: 9,
        name: "Октябрь",
        title: "oktober",
        mood: "октября",
      },
      {
        id: 10,
        name: "Ноябрь",
        title: "november",
        mood: "ноября",
      },
      {
        id: 11,
        name: "Декабрь",
        title: "december",
        mood: "декабря",
      },
    ],
    todo: [
      {
        id: 1,
        title:
          "test test test test testtesttest test test testtest testtesttest test test testtest",
        date: "2020-10-25",
        time: "08:00",
        checked: false,
        userid: 1,
      },
      {
        id: 2,
        title: "test2",
        date: "2020-08-26",
        time: "08:00",
        checked: false,
        userid: 2,
      },
      {
        id: 3,
        title: "testestet",
        date: "2020-08-26",
        time: "08:15",
        checked: true,
        userid: 1,
      },
      {
        id: 4,
        title: "testest",
        date: "2020-08-26",
        time: "08:20",
        checked: true,
        userid: 1,
      },
      {
        id: 5,
        title: "testest",
        date: "2020-08-26",
        time: "08:20",
        checked: false,
        userid: 1,
      },
      {
        id: 6,
        title:
          "test test test test testtesttest test test testtest testtesttest test test testtest",
        date: "2020-10-25",
        time: "09:00",
        checked: false,
        userid: 1,
      },
      {
        id: 7,
        title:
          "test test test test testtesttest test test testtest testtesttest test test testtest",
        date: "2020-10-25",
        time: "10:00",
        checked: false,
        userid: 1,
      },
      {
        id: 8,
        title:
          "test test test test testtesttest test test testtest testtesttest test test testtest",
        date: "2020-11-11",
        time: "14:00",
        checked: false,
        userid: 1,
      },
      {
        id: 9,
        title:
          "test test test test testtesttest test test testtest testtesttest test test testtest",
        date: "2020-11-11",
        time: "16:00",
        checked: false,
        userid: 1,
      },
      {
        id: 10,
        title:
          "test test test test testtesttest test test testtest testtesttest test test testtest",
        date: "2020-11-11",
        time: "08:00",
        checked: false,
        userid: 1,
      },
      {
        id: 11,
        title: "test",
        date: "2020-11-11",
        time: "20:00",
        checked: false,
        userid: 1,
      },
    ],
    year: "2020",
  },
  mutations: {
    checked(state, value) {
      state.todo.map((e) => {
        if (e.id === value) {
          e.checked = !e.checked;
        }
        return e;
      });
    },
    deleted(state, value) {
      state.todo = state.todo.filter((e) => e.id !== value);
      console.log(state.todo);
    },
    updatetodo(state, val) {
      state.todo.map((e) => {
        if (e.id === val.id) {
          e.time = val.time;
          e.title = val.task;
        }
        return e;
      });
    },
  },
  actions: {
    checkededit({ commit }, val) {
      commit("checked", val);
    },
    deletedtask({ commit }, value) {
      commit("deleted", value);
    },
    edittododate({ commit }, val) {
      commit("updatetodo", val);
    },
  },
  getters: {
    Getmonth: (state) => {
      return state.mounth;
    },
    GetNextPrevDay: (state) => (month, year) => {
      let currentmonth = state.mounth
        .filter((e) => e.title === month)
        .map((e) => {
          return e.id;
        })[0];
      console.log();
      return {
        prev: {
          month: state.mounth
            .filter((e) => e.id === new Date(year, currentmonth - 1).getMonth())
            .map((e) => {
              return e.title;
            })[0],
          year: new Date(year, currentmonth - 1).getFullYear(),
        },
        next: {
          month: state.mounth
            .filter((e) => e.id === new Date(year, currentmonth + 1).getMonth())
            .map((e) => {
              return e.title;
            })[0],
          year: new Date(year, currentmonth + 1).getFullYear(),
        },
      };
    },
    GetNameMonth: (state) => (title) => {
      return state.mounth
        .filter((e) => e.title === title)
        .map((e) => e.name)
        .map((e) => {
          return e;
        })[0];
    },
    GetNumberMonth: (state) => (title) => {
      let number = state.mounth
        .filter((e) => e.title === title)
        .map((e) => e.id)[0];
      if (number.toString.length > 1) {
        return number;
      } else {
        return `0${number}`;
      }
    },
    GetMoodMonth: (state) => (title) => {
      return state.mounth
        .filter((e) => e.title === title)
        .map((e) => e.mood)
        .map((e) => {
          return e;
        })[0];
    },
    GetTodo: (state) => (id, date) => {
      // console.log(state.todo.filter(e => e.userid === id && e.date === date))
      return state.todo
        .filter((e) => e.userid === id && e.date === date)
        .sort((a, b) => {
          if (a.time > b.time) {
            return 1;
          }
          if (a.time < b.time) {
            return -1;
          }
          return 0;
        });
      // return state.todo.filter(e => e.userid === id && e.date === date)
    },
  },
});
