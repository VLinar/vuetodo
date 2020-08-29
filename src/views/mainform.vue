<template>
    <div class="background">
        <div class="back">
            <div class="form">
                <todo />
                <calendar />
            </div>   
        </div>
    </div>
</template>

<script>
    import todo from '@/components/todo.vue';
    import calendar from '@/components/calendarform.vue';
import { mapGetters } from 'vuex';
    export default {
        components: {
            todo,
            calendar
        },
        created(){
            // this.correctmonth(this.$route.params.month) 
        },
        computed: {
            ...mapGetters([
                'Getmonth'
            ])
        },
        methods: {
            correctmonth(path){
                if (this.Getmonth.filter(e => e.title === path).length < 1)  this.$router.push('/yanvar/1')
            }
        }
    }
</script>

<style scoped>
.background {
    background: brown;
    height: 100vh;
    width: 100vw;
    display: flex;
    justify-content: center;
}

.back{
    display: grid;
    justify-content: center;
    align-items: center;
}
.form{
    background: white;
    grid-template-columns: 1fr 2fr;
    display: grid;
}
</style>