<template>
    <div class="calendar">
        <table>
            <thead>
                <tr>
                    <th v-for="(title,index) in headtitle" :key="index">{{title}}</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(week, index) in getcalendar" :key='index' class="week">
                    <td v-for="day in week" :key="day"><h3>{{day}}</h3></td>
                </tr>
            </tbody>
        </table> 
    </div>
</template>

<script>
    export default {
         data() {
            return {
                date: new Date(2020, 7),
                dayinmonth: '',
                WEEK_DAYS_FROM_MONDAY: [6, 0, 1, 2, 3, 4, 5],
                headtitle: ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс']
            }
        },
        created(){
            this.dayinmonth = new Date(2020, 8, 0).getDate()
        },
        computed: {
            getcalendar(){
                // console.log('перезапуск компьютед')
                const result = [];
                const monthStartsOn = this.getDayOfWeek();
                let day = 1;
                for (let i = 0; i < (this.dayinmonth + monthStartsOn) / 7; i++) {
                    result[i] = [];
                    for (let j = 0; j < 7; j++) {
                        if ((i === 0 && j < monthStartsOn) || day > this.dayinmonth) {
                            result[i][j] = undefined;
                        } else {
                            result[i][j] = new Date(2020, 7, day++).getDate();
                        }
                    }
                }
                return result;
            }
        },
        methods: {
            getDayOfWeek(){
                    return this.WEEK_DAYS_FROM_MONDAY[this.date.getDay()];
            }
        }
    }
</script>

<style scoped>
    table {
        border-collapse: collapse; 
        width: 100%;
        height: max-content;
    }
    td{
        height: 40px;
        text-align: end;
        border: 1px solid grey;  
        vertical-align: baseline;
        padding: 5px;
    }
    td h3{
        margin: 0px;
        margin-bottom: 5px
    }
    .calendar{
        padding: 10px;
    }
    thead{
        text-align: end;
    }
</style>