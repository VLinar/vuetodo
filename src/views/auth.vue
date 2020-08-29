<template>
    <div class="main">
        <h1>Тут будет авторизация</h1>
        <span>{{$route.params.id}}</span>
        <button @click = '$router.push(url)'>Click to calendar</button>
    </div>
</template>

<script>
    import {mapGetters} from 'vuex'
    export default {
        data() {
            return {
                url: '/test'
            }
        },
        computed: {
            ...mapGetters([
                "Getmonth"
            ])
        },
        created(){
            let date = new Date()
            let todaymonth = this.Getmonth.filter(e => e.id === date.getMonth() + 1)
            this.url = '/' + todaymonth.map(e => {return e.title})
            console.log(this.url)
        }
    }
</script>

<style scoped>

</style>