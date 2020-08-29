import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    mounth: [
        {
            id: 1,
            name: 'Январь',
            title: 'yanvar'
        },
        {
            id: 2,
            name: 'Февраль',
            title: 'februal'
        },
        {
            id: 3,
            name: 'Март',
            title: 'mart'
        },
        {
            id: 4,
            name: 'Апрель',
            title: 'april'
        },
        {
            id: 5,
            name: 'Май',
            title: 'may'
        },
        {
            id: 6,
            name: 'Июнь',
            title: 'june'
        },
        {
            id: 7,
            name: 'Июль',
            title: 'jule'
        },
        {
            id: 8,
            name: 'Август',
            title: 'august'
        },
        {
            id: 9,
            name: 'Сентябрь',
            title: 'september'
        },
        {
            id: 10,
            name: 'Октябрь',
            title: 'oktober'
        },
        {
            id: 11,
            name: 'Ноябрь',
            title: 'november'
        },
        {
            id: 12,
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
    ]
  },
  mutations: {
  },
  actions: {
  },
  getters: {
    Getmonth: (state) => {
      return state.mounth
    }
  }
})
