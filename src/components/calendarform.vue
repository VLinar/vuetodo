<template>
    <div class="calblock">
        <div class="head">
            <div class="monthhead">
                <h2>{{GetNameMonth(this.$route.params.month)}} </h2>
                <select name="" id="yearselect" ref="yearselect" @change="edityear()">
                    <option 
                        v-for="(y, i) in year"
                        :value="y"
                        :key="i"
                        :selected="Number(currentyear) == y ? true : false"
                    >
                        {{y}}
                    </option>
                </select>
            </div>
            <div>
                <router-link
                    :to='"/" + prev.year+ "/" + prev.month + "/1"'
                    tag = 'svg'
                    class="bi bi-arrow-left-circle-fill"
                    width="2em" 
                    height="2em" 
                    viewBox="0 0 16 16" 
                    fill="currentColor" 
                    :xmlns="'http://www.w3.org/2000/svg'"
                >
                    <path fill-rule="evenodd" d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-7.646 2.646a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L6.207 7.5H11a.5.5 0 0 1 0 1H6.207l2.147 2.146z"/>
                </router-link>
                <router-link
                    :to='"/" + next.year+ "/" + next.month + "/1"'
                    tag = 'svg'
                    class="bi bi-arrow-right-circle-fill" 
                    width="2em" 
                    height="2em" 
                    viewBox="0 0 16 16" 
                    fill="currentColor" 
                    :xmlns="'http://www.w3.org/2000/svg'"
                >
                    <path fill-rule="evenodd" d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-8.354 2.646a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L9.793 7.5H5a.5.5 0 0 0 0 1h4.793l-2.147 2.146z"/>
                </router-link>
            </div>
        </div>
        <calendar />
    </div>
</template>

<script>
    import calendar from '@/components/calendar.vue';
    import { mapGetters } from 'vuex';
    export default {
        data() {
            return {
                next: '',
                prev: '',
                year: [
                    2000,
                    2001,
                    2002,
                    2003,
                    2004,
                    2005,
                    2006,
                    2007,
                    2008,
                    2009,
                    2010,
                    2011,
                    2012,
                    2013,
                    2014,
                    2015,
                    2016,
                    2017,
                    2018,
                    2019,
                    2020,
                    2021
                ] ,
                currentyear: this.$route.params.year
            }
        },
        components: {
            calendar,
        },
        created(){
          this.getpage()
          console.log(this.GetNameMonth(this.$route.params.month))
        },
        computed: {
            ...mapGetters([
                'GetNextPrevDay',
                'GetNameMonth'
            ])
        },
        methods: {
            getpage(){
                this.next = this.GetNextPrevDay(this.$route.params.month, this.$route.params.year).next
                this.prev = this.GetNextPrevDay(this.$route.params.month, this.$route.params.year).prev
            },
            edityear(){
                let selectyear = this.$refs.yearselect.value
                this.$router.push(`/${selectyear}/${this.$route.params.month}/1`)
            }
        },
        watch: {
            $route() {
                this.getpage()
                this.currentyear = this.$route.params.year
            }
        }
    }
</script>

<style scoped>
    .calblock{
        padding: 15px 15px 15px 20px;
    }
    .head{
        display: grid;
        grid-template-columns: 2fr 1fr!important;
        align-items: center;
        padding: 0px 10px;
        margin-bottom: 25px;
    }
    .head h2{
        margin: 10px 0px;
    }
    .head div{
        text-align: left;
    }
    .head div:last-child{
        text-align: end;
    }
    .head svg{
        margin: 3px;
        cursor: pointer;
    }
    .monthhead {
        display: flex;
        align-items: center;
    }
    select{
        height: fit-content;
        display: block;
        font-size: 1.4em;
        margin: 0px 5px;
    }
    option {
        font-size: 0.7em;
    }
</style>