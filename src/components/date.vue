<template>
    <div>
        <span 
            class="red"
            v-if="SurelyToday()"
        >СЕГОДНЯ</span>
        <div>
            <h2>{{this.GetFullDateStr()}}</h2>
        </div>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex';

    export default {
        data() {
            return {
                today: '',
            }
        },
        created(){
            this.today = new Date(this.$route.params.year, this.GetNumberMonth(this.$route.params.month), this.$route.params.day).toISOString()
        },
        computed: {
            ...mapGetters([
                'GetNumberMonth',
                'GetMoodMonth'
            ]),
        },
        methods: {
            SurelyToday(){
                let datetoday = new Date(this.$route.params.year, this.GetNumberMonth(this.$route.params.month), this.$route.params.day).toISOString()
                return this.today === datetoday ?  true : false 
            },
            DayOfWeek(day){
                switch(day){
                    case 1: return 'Понедельник'
                    case 2: return 'Вторник'
                    case 3: return 'Среда'
                    case 4: return 'Четверг'
                    case 5: return 'Пятница'
                    case 6: return 'Суббота'
                    case 0: return 'Воскресенье'
                }
            },
            GetFullDateStr(){
                let fulldate = new Date(this.$route.params.year, this.GetNumberMonth(this.$route.params.month), this.$route.params.day)
                
                let date = this.GetDayMonth(this.$route.params.day, this.$route.params.month)
                let dayweek = this.DayOfWeek(fulldate.getDay())
                
                return dayweek + date
            },
            GetDayMonth(day, month){
                let M = this.GetMoodMonth(month)
                return `, ${day} ${M}`
            }
        }
    }
</script>

<style scoped>
.red{
    color: red;
}
</style>