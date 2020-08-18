<template>
    <div class="main">
        <h1>Тут будет авторизация</h1>
        <span>{{$route.params.id}}</span>
        <button @click = '$router.push(url)'>Click to calendar</button>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                url: '/test',
                mounth: [
                    {
                        id: 1,
                        title: 'yanvar'
                    },
                    {
                        id: 2,
                        title: 'februal'
                    },
                    {
                        id: 3,
                        title: 'mart'
                    },
                    {
                        id: 4,
                        title: 'april'
                    },
                    {
                        id: 5,
                        title: 'may'
                    },
                    {
                        id: 6,
                        title: 'june'
                    },
                    {
                        id: 7,
                        title: 'jule'
                    },
                    {
                        id: 8,
                        title: 'august'
                    },
                    {
                        id: 9,
                        title: 'september'
                    },
                    {
                        id: 10,
                        title: 'oktober'
                    },
                    {
                        id: 11,
                        title: 'november'
                    },
                    {
                        id: 12,
                        title: 'december'
                    },
                ]
            }
        },
        created(){
            let date = new Date()
            let todaymonth = this.mounth.filter(e => e.id === date.getMonth() + 1)
            this.url = '/' + todaymonth.map(e => {return e.title})
            console.log(this.url)
        }
    }
</script>

<style scoped>

</style>