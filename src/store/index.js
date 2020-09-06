import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    mounth: [
        {
            id: 0,
            name: 'Январь',
            title: 'january',
            mood: 'января'
        },
        {
            id: 1,
            name: 'Февраль',
            title: 'februal',
            mood: 'февраля'
        },
        {
            id: 2,
            name: 'Март',
            title: 'mart',
            mood: 'марта'
        },
        {
            id: 3,
            name: 'Апрель',
            title: 'april',
            mood: 'апреля'
        },
        {
            id: 4,
            name: 'Май',
            title: 'may',
            mood: 'мая'
        },
        {
            id: 5,
            name: 'Июнь',
            title: 'june',
            mood: 'июня'
        },
        {
            id: 6,
            name: 'Июль',
            title: 'jule',
            mood: 'июля'
        },
        {
            id: 7,
            name: 'Август',
            title: 'august',
            mood: 'августа'
        },
        {
            id: 8,
            name: 'Сентябрь',
            title: 'september',
            mood: 'сентября'
        },
        {
            id: 9,
            name: 'Октябрь',
            title: 'oktober',
            mood: 'октября'
        },
        {
            id: 10,
            name: 'Ноябрь',
            title: 'november',
            mood: 'ноября'
        },
        {
            id: 11,
            name: 'Декабрь',
            title: 'december',
            mood: 'декабря'
        },
    ],
    todo: [
        {
            id: 1,
            title: "test",
            date: "2020-08-26",
            time: '8:00',
            checked: false,
            userid: 1
        },
        {
            id: 2,
            title: "test2",
            date: "2020-08-26",
            time: '8:00',
            checked: false,
            userid: 2
        }
    ],
    year: '2020'
  },
  mutations: {
  },
  actions: {
  },
  getters: {
    Getmonth: (state) => {
      return state.mounth
    },
    GetNextPrevDay: (state) => (month , year) => {
        let currentmonth = state.mounth
                .filter(e => e.title === month)
                .map(e => {return e.id})[0]
        console.log()
        return  {
            prev: {
                month: state.mounth.filter(e => e.id === new Date(year, currentmonth-1).getMonth() ).map(e => {return e.title})[0],
                year: new Date(year, currentmonth-1).getFullYear()
            },
            next: {
                month: state.mounth.filter(e => e.id === new Date(year, currentmonth+1).getMonth() ).map(e => {return e.title})[0],
                year: new Date(year, currentmonth+1).getFullYear()
            }
        }
      
    },
    GetNameMonth: (state) => (title) => {
        return state.mounth.filter(e => e.title === title).map(e => e.name).map(e => {return e})[0]
    },
    GetNumberMonth: (state) => (title) => {
        return state.mounth.filter(e => e.title === title).map(e => e.id)[0]
    },
    GetMoodMonth: (state) => (title) => {
        return state.mounth.filter(e => e.title === title).map(e => e.mood).map(e => {return e})[0]
    },
  }
})