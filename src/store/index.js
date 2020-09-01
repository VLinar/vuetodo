import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    mounth: [
        {
            id: 0,
            name: 'Январь',
            title: 'january'
        },
        {
            id: 1,
            name: 'Февраль',
            title: 'februal'
        },
        {
            id: 2,
            name: 'Март',
            title: 'mart'
        },
        {
            id: 3,
            name: 'Апрель',
            title: 'april'
        },
        {
            id: 4,
            name: 'Май',
            title: 'may'
        },
        {
            id: 5,
            name: 'Июнь',
            title: 'june'
        },
        {
            id: 6,
            name: 'Июль',
            title: 'jule'
        },
        {
            id: 7,
            name: 'Август',
            title: 'august'
        },
        {
            id: 8,
            name: 'Сентябрь',
            title: 'september'
        },
        {
            id: 9,
            name: 'Октябрь',
            title: 'oktober'
        },
        {
            id: 10,
            name: 'Ноябрь',
            title: 'november'
        },
        {
            id: 11,
            name: 'Декабрь',
            title: 'december'
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
        // state.mounth.filter(e => e.title === title).map(e => e.id)
        return state.mounth.filter(e => e.title === title).map(e => e.id)[0]
    } 
  }
})